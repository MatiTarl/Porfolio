'use client';

import { useEffect, useRef } from 'react';

// Todos los cometas viajan en la misma dirección: 2 px a la izquierda por cada 1 px hacia abajo
const DIRECCION = { x: -2 / Math.sqrt(5), y: 1 / Math.sqrt(5) };
// Un cometa cada tantos px² de pantalla, con mínimo y máximo
// (≈27 en escritorio y 10 en celular; casi todos quedan dentro de la pantalla)
const AREA_POR_COMETA = 48000;
const MIN_COMETAS = 10;
const MAX_COMETAS = 40;
// Tamaño de referencia del sprite; cada cometa se dibuja escalado según su profundidad
const LARGO_SPRITE = 160;
const ALTO_SPRITE = 16;

type Cometa = {
  x: number;
  y: number;
  // 0 = lejano (chico, lento, tenue) · 1 = cercano (grande, rápido, brillante)
  profundidad: number;
};

// La estela se dibuja una sola vez en un canvas aparte y después se reutiliza con drawImage,
// que es mucho más barato que crear un degradé por cometa en cada frame.
function crearSprite(dpr: number) {
  const sprite = document.createElement('canvas');
  sprite.width = LARGO_SPRITE * dpr;
  sprite.height = ALTO_SPRITE * dpr;
  const ctx = sprite.getContext('2d')!;
  ctx.scale(dpr, dpr);
  const centroY = ALTO_SPRITE / 2;
  const radio = ALTO_SPRITE / 4;

  // Estela: se afina y se desvanece desde la cabeza (derecha) hacia atrás (izquierda)
  const degrade = ctx.createLinearGradient(0, 0, LARGO_SPRITE - radio, 0);
  degrade.addColorStop(0, 'rgba(255,255,255,0)');
  degrade.addColorStop(1, 'rgba(255,255,255,0.55)');
  ctx.fillStyle = degrade;
  ctx.beginPath();
  ctx.moveTo(0, centroY);
  ctx.lineTo(LARGO_SPRITE - radio, centroY - radio * 0.8);
  ctx.lineTo(LARGO_SPRITE - radio, centroY + radio * 0.8);
  ctx.closePath();
  ctx.fill();

  // Cabeza con un halo suave
  const halo = ctx.createRadialGradient(
    LARGO_SPRITE - radio,
    centroY,
    0,
    LARGO_SPRITE - radio,
    centroY,
    radio * 2,
  );
  halo.addColorStop(0, 'rgba(255,255,255,1)');
  halo.addColorStop(0.4, 'rgba(255,255,255,0.9)');
  halo.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(LARGO_SPRITE - radio, centroY, radio * 2, 0, Math.PI * 2);
  ctx.fill();

  return sprite;
}

export default function CanvaCometa() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reducirMovimiento = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    let ancho = 0;
    let alto = 0;
    let sprite = crearSprite(1);
    let cometas: Cometa[] = [];

    // Nace justo en el borde superior o en el derecho, para no gastar tiempo viajando fuera de
    // pantalla. Cada borde se elige según cuántos cometas entran por él: el de arriba en
    // proporción al ancho y el derecho al doble del alto (por la inclinación 2:1).
    const nuevoCometa = (enPantalla: boolean): Cometa => {
      const profundidad = Math.random() ** 1.5; // más cometas lejanos que cercanos
      if (enPantalla) {
        return {
          x: Math.random() * ancho,
          y: Math.random() * alto,
          profundidad,
        };
      }
      return Math.random() < ancho / (ancho + alto * 2)
        ? { x: Math.random() * ancho, y: -2, profundidad }
        : { x: ancho + 2, y: Math.random() * alto, profundidad };
    };

    const ajustarTamano = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Tamaño real en pantalla del canvas (en celulares puede no coincidir con innerWidth/innerHeight)
      ancho = canvas.clientWidth;
      alto = canvas.clientHeight;
      canvas.width = ancho * dpr;
      canvas.height = alto * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sprite = crearSprite(dpr);

      const cantidad = Math.round(
        Math.min(
          MAX_COMETAS,
          Math.max(MIN_COMETAS, (ancho * alto) / AREA_POR_COMETA),
        ),
      );
      while (cometas.length < cantidad) cometas.push(nuevoCometa(true));
      cometas = cometas.slice(0, cantidad);
    };

    // La cabeza del sprite (a la derecha) apunta hacia donde avanza el cometa; la estela queda atrás
    const angulo = Math.atan2(DIRECCION.y, DIRECCION.x);

    const escalaDe = (c: Cometa) => 0.35 + c.profundidad * 0.75;
    // Los cercanos, además de más grandes, tienen la estela proporcionalmente más larga
    const largoDe = (c: Cometa) =>
      LARGO_SPRITE * escalaDe(c) * (0.5 + c.profundidad * 0.5);

    const dibujar = () => {
      ctx.clearRect(0, 0, ancho, alto);
      for (const c of cometas) {
        const largo = largoDe(c);
        const grosor = ALTO_SPRITE * escalaDe(c);
        ctx.globalAlpha = 0.3 + c.profundidad * 0.7;
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(angulo);
        // El sprite tiene la cabeza a la derecha: se dibuja de modo que la cabeza quede en (x, y)
        ctx.drawImage(sprite, -largo, -grosor / 2, largo, grosor);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    };

    const mover = (segundos: number) => {
      for (let i = 0; i < cometas.length; i++) {
        const c = cometas[i];
        const velocidad = 40 + c.profundidad * 160; // px por segundo
        c.x += DIRECCION.x * velocidad * segundos;
        c.y += DIRECCION.y * velocidad * segundos;
        // Reaparece apenas su estela termina de salir por la izquierda o por abajo
        // (la estela se extiende hacia arriba a la derecha de la cabeza)
        const largo = largoDe(c);
        if (c.x < largo * DIRECCION.x || c.y > alto + largo * DIRECCION.y) {
          cometas[i] = nuevoCometa(false);
        }
      }
    };

    let frameId = 0;
    let anterior = 0;
    const animar = (ahora: number) => {
      // Velocidad por tiempo real, no por frame: igual en 60 Hz que en 120 Hz.
      // El tope evita un salto cuando se vuelve a una pestaña que estuvo en segundo plano.
      const segundos = anterior ? Math.min((ahora - anterior) / 1000, 0.05) : 0;
      anterior = ahora;
      mover(segundos);
      dibujar();
      frameId = requestAnimationFrame(animar);
    };

    const iniciar = () => {
      cancelAnimationFrame(frameId);
      anterior = 0;
      if (reducirMovimiento.matches) {
        dibujar(); // cielo quieto: se ven los cometas pero sin animación
      } else {
        frameId = requestAnimationFrame(animar);
      }
    };

    const alRedimensionar = () => {
      ajustarTamano();
      if (reducirMovimiento.matches) dibujar();
    };

    ajustarTamano();
    iniciar();
    const observador = new ResizeObserver(alRedimensionar);
    observador.observe(canvas);
    reducirMovimiento.addEventListener('change', iniciar);

    return () => {
      cancelAnimationFrame(frameId);
      observador.disconnect();
      reducirMovimiento.removeEventListener('change', iniciar);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
