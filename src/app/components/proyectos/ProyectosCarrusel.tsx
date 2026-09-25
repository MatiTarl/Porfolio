'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Categoria, Proyecto } from '@/data/proyectos';
import Left from '../../../ui/icons/left';
import Right from '../../../ui/icons/right';
import ProyectoCard from './ProyectoCard';

export default function ProyectosCarrusel({
  categoria,
  proyectos,
  onAbrir,
}: {
  categoria: Categoria;
  proyectos: Proyecto[];
  onAbrir: (proyecto: Proyecto) => void;
}) {
  const pistaRef = useRef<HTMLUListElement>(null);
  const [enInicio, setEnInicio] = useState(true);
  const [enFin, setEnFin] = useState(false);

  const actualizarFlechas = useCallback(() => {
    const pista = pistaRef.current;
    if (!pista) return;
    setEnInicio(pista.scrollLeft <= 4);
    setEnFin(pista.scrollLeft + pista.clientWidth >= pista.scrollWidth - 4);
  }, []);

  // El observer también se dispara al montar, así las flechas arrancan bien
  useEffect(() => {
    const pista = pistaRef.current;
    if (!pista) return;
    const observer = new ResizeObserver(actualizarFlechas);
    observer.observe(pista);
    return () => observer.disconnect();
  }, [actualizarFlechas]);

  const desplazar = (direccion: 1 | -1) => {
    const pista = pistaRef.current;
    if (!pista) return;
    pista.scrollBy({
      left: direccion * pista.clientWidth * 0.9,
      behavior: 'smooth',
    });
  };

  const todoVisible = enInicio && enFin;

  return (
    <div>
      <div className="flex items-end justify-between gap-4 pb-2">
        <div>
          <h3 className="text-xl md:text-2xl">{categoria.titulo}</h3>
          <p className="pt-1 text-sm text-zinc-400">{categoria.descripcion}</p>
        </div>
        {!todoVisible && (
          <div className="flex shrink-0 gap-3">
            <BotonFlecha
              onClick={() => desplazar(-1)}
              disabled={enInicio}
              label={`Anteriores de ${categoria.titulo}`}
            >
              <Left />
            </BotonFlecha>
            <BotonFlecha
              onClick={() => desplazar(1)}
              disabled={enFin}
              label={`Siguientes de ${categoria.titulo}`}
            >
              <Right />
            </BotonFlecha>
          </div>
        )}
      </div>
      {/* El padding vertical deja lugar al hover de las tarjetas (suben y brillan) */}
      <ul
        ref={pistaRef}
        onScroll={actualizarFlechas}
        className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 py-5 [scrollbar-width:none]"
      >
        {proyectos.map((proyecto) => (
          <li
            key={proyecto.id}
            className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
          >
            <ProyectoCard
              proyecto={proyecto}
              onAbrir={() => onAbrir(proyecto)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function BotonFlecha({
  onClick,
  disabled,
  label,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-200 text-slate-950 transition-all duration-200 hover:bg-zinc-300 disabled:cursor-default disabled:opacity-30 disabled:hover:bg-zinc-200"
    >
      {children}
    </button>
  );
}
