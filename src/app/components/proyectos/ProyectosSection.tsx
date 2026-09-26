'use client';

import { useState } from 'react';
import {
  categorias,
  proyectos,
  type CategoriaId,
  type Proyecto,
} from '@/data/proyectos';
import ProyectosCarrusel from './ProyectosCarrusel';
import ProyectoDetalle from './ProyectoDetalle';

export default function ProyectosSection() {
  const [seleccionado, setSeleccionado] = useState<Proyecto | null>(null);

  const filas = categorias
    .map((categoria) => ({
      categoria,
      proyectos: proyectos.filter((p) => p.categoria === categoria.id),
    }))
    .filter((fila) => fila.proyectos.length > 0);

  const [activa, setActiva] = useState<CategoriaId>(filas[0].categoria.id);
  // Hacia dónde entra el contenido nuevo: depende de si la pestaña está a la derecha o a la izquierda
  const [direccion, setDireccion] = useState<1 | -1>(1);

  const indiceActivo = filas.findIndex((f) => f.categoria.id === activa);
  const filaActiva = filas[indiceActivo];

  const cambiarA = (indice: number) => {
    if (indice === indiceActivo) return;
    setDireccion(indice > indiceActivo ? 1 : -1);
    setActiva(filas[indice].categoria.id);
  };

  // Flechas del teclado para moverse entre pestañas (patrón de tabs accesibles)
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const siguiente =
      (indiceActivo + (e.key === 'ArrowRight' ? 1 : -1) + filas.length) %
      filas.length;
    cambiarA(siguiente);
    document.getElementById(`tab-${filas[siguiente].categoria.id}`)?.focus();
  };

  return (
    <div className="w-full max-w-6xl px-4">
      <div className="items-center flex flex-col text-center pb-8">
        <h2 className="text-2xl md:text-4xl text-white p-3">Mis proyectos</h2>
      </div>

      <div className="flex justify-center pb-6">
        <div
          role="tablist"
          aria-label="Tipos de proyecto"
          onKeyDown={onKeyDown}
          className="relative grid w-full max-w-xl rounded-3xl bg-zinc-200 p-1"
          style={{ gridTemplateColumns: `repeat(${filas.length}, 1fr)` }}
        >
          {/* Pastilla que se desliza hasta la pestaña activa */}
          <span
            aria-hidden="true"
            className="absolute inset-y-1 left-1 rounded-3xl bg-slate-950 transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{
              width: `calc((100% - 0.5rem) / ${filas.length})`,
              transform: `translateX(${indiceActivo * 100}%)`,
            }}
          />
          {filas.map(({ categoria, proyectos }, i) => {
            const esActiva = i === indiceActivo;
            return (
              <button
                key={categoria.id}
                id={`tab-${categoria.id}`}
                type="button"
                role="tab"
                aria-selected={esActiva}
                aria-controls="panel-proyectos"
                tabIndex={esActiva ? 0 : -1}
                onClick={() => cambiarA(i)}
                className={`relative z-10 flex cursor-pointer items-center justify-center gap-1.5 rounded-3xl px-2 py-2.5 text-xs whitespace-nowrap transition-colors duration-300 sm:text-sm ${
                  esActiva
                    ? 'text-white'
                    : 'text-slate-950 hover:text-slate-600'
                }`}
              >
                {categoria.titulo}
                <span
                  className={`hidden text-[0.7rem] transition-colors sm:inline duration-300 ${
                    esActiva ? 'text-zinc-400' : 'text-zinc-500'
                  }`}
                >
                  {proyectos.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="panel-proyectos"
        role="tabpanel"
        aria-labelledby={`tab-${activa}`}
        // La key hace que el carrusel se vuelva a montar y se repita la animación de entrada
        key={activa}
        className={`${
          direccion === 1
            ? 'animate-entrar-derecha'
            : 'animate-entrar-izquierda'
        } motion-reduce:animate-none`}
      >
        <ProyectosCarrusel
          categoria={filaActiva.categoria}
          proyectos={filaActiva.proyectos}
          onAbrir={setSeleccionado}
        />
      </div>

      <ProyectoDetalle
        proyecto={seleccionado}
        onCerrar={() => setSeleccionado(null)}
      />
    </div>
  );
}
