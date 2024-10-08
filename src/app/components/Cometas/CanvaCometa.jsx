import { useEffect, useRef } from 'react';

export default function CanvaCometa() {
    const canvasRef = useRef(null);
    const cometCount = 50;  // Cantidad de cometas

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
    
      function resizeCanvas() {
        canvas.width = window.innerWidth; // Tomamos el ancho de la pantalla 
        canvas.height = window.innerHeight; // Calculamos que es mal alto, el largo de la pantalla o el de la pagina sabiendolo con el scroll 
      }
    
      // Ajustar tamaño inicial
      resizeCanvas();
    
      // Redimensionar el canvas cuando cambia el tamaño de la ventana
      window.addEventListener('resize', resizeCanvas);

      const comets = []; // Crear un array de cometas
  
      for (let i = 0; i < cometCount; i++) { 
      // Recorremos la cantidad de cometas que queramos y pusheamos cada uno con posiciones y velocidades diferentes
      comets.push({ 
          x: Math.random() * canvas.width,  // Posición X aleatoria
          y: Math.random() * canvas.height,  // Posición Y aleatoria
          speed: Math.random() * 3 + 1,  // Velocidad aleatoria (entre 1 y 4)
          size: Math.random() * 5 + 2,  // Tamaño aleatorio (entre 2px y 7px)
        });
      }
  
      function drawComet(comet) {
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, comet.size, 0, Math.PI * 2);  // Dibujar el cometa
        ctx.fillStyle = 'white';
        ctx.fill();
      }
  
      function updateComet(comet) {
        comet.y += comet.speed;  // Aumentar Y según la velocidad
        comet.x -= comet.speed;  // Aumentar X según la velocidad
        
        if (comet.y > canvas.height) {
          comet.y = -comet.size;  // Resetea el cometa si sale de la pantalla
          comet.x = Math.random() * canvas.width;  // Nueva posición X aleatoria
        }
      }
  
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpiar el canvas
        comets.forEach(comet => {
          updateComet(comet);
          drawComet(comet);
        });
        requestAnimationFrame(animate);  // Siguiente frame
      }
  
      animate();  // Iniciar la animación

      return () => window.removeEventListener('resize', resizeCanvas);
    }, []);
  
    return <canvas className='pointer-events-none fixed z-[-1] top-0 bottom-0 w-full h-full' ref={canvasRef} id="myCanvas"></canvas>;
  }
  
