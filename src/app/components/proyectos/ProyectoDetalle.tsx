'use client';

import { useEffect, useRef } from 'react';
import type { Proyecto } from '@/data/proyectos';
import Github from '../../../ui/icons/GitHub';
import ProyectoImagen from './ProyectoImagen';
import { EstadoBadge } from './ProyectoCard';

export default function ProyectoDetalle({
  proyecto,
  onCerrar,
}: {
  proyecto: Proyecto | null;
  onCerrar: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (proyecto && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
    } else if (!proyecto && dialog.open) {
      dialog.close();
    }
  }, [proyecto]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onCerrar}
      // Un click en el fondo oscuro (fuera del contenido) cierra el detalle
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      aria-labelledby="proyecto-detalle-titulo"
      className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-3xl border border-zinc-800 bg-black text-white shadow-[0px_0px_20px_rgba(252,252,252,0.15)] backdrop:bg-black/80 backdrop:backdrop-blur-sm open:animate-aparecer"
    >
      {proyecto && (
        <div className="p-5 sm:p-8">
          <div className="flex items-start justify-between gap-4 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-zinc-400">{proyecto.tipo}</p>
                <EstadoBadge proyecto={proyecto} />
              </div>
              <h3
                id="proyecto-detalle-titulo"
                className="text-3xl tracking-tight"
              >
                {proyecto.titulo}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Cerrar detalle"
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-zinc-200 text-2xl leading-none text-slate-950 transition-all duration-200 hover:bg-zinc-300"
            >
              ×
            </button>
          </div>

          {/* Sin captura no hay nada que mostrar: el detalle arranca por la descripción */}
          {proyecto.imagen && (
            <div className="pb-6">
              <ProyectoImagen
                proyecto={proyecto}
                sizes="(min-width: 768px) 700px, 100vw"
              />
            </div>
          )}

          <p className="text-zinc-200">{proyecto.descripcion}</p>
          {proyecto.privado ? (
            <p className="pt-3 text-sm text-zinc-400">
              Es un desarrollo privado para un cliente, por eso el código no es
              público.
            </p>
          ) : (
            !proyecto.demo && (
              <p className="pt-3 text-sm text-zinc-400">
                Este proyecto no tiene una demo online en este momento
                {proyecto.repo ? ', pero podés ver el código en GitHub.' : '.'}
              </p>
            )
          )}

          <h4 className="pt-6 pb-2 text-xl">Qué incluye</h4>
          <ul className="list-disc space-y-1 pl-5 text-zinc-300">
            {proyecto.caracteristicas.map((caracteristica) => (
              <li key={caracteristica}>{caracteristica}</li>
            ))}
          </ul>

          {proyecto.partes ? (
            <>
              <h4 className="pt-6 pb-3 text-xl">Partes del proyecto</h4>
              <ul className="space-y-4">
                {proyecto.partes.map((parte) => (
                  <li
                    key={parte.nombre}
                    className="rounded-xl border border-zinc-800 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-lg">{parte.nombre}</h5>
                      <span
                        className={
                          parte.propia
                            ? 'rounded-3xl bg-zinc-200 px-2.5 py-0.5 text-xs text-slate-950'
                            : 'rounded-3xl border border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-400'
                        }
                      >
                        {parte.propia
                          ? 'Desarrollado por mí'
                          : 'Desarrollado por otro equipo'}
                      </span>
                    </div>
                    <p className="pt-2 text-sm text-zinc-300">
                      {parte.descripcion}
                    </p>
                    <ListaTecnologias tecnologias={parte.tecnologias} chica />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h4 className="pt-6 text-xl">Tecnologías</h4>
              <ListaTecnologias tecnologias={proyecto.tecnologias} />
            </>
          )}

          {(proyecto.demo || (proyecto.repo && !proyecto.privado)) && (
            <div className="flex flex-wrap gap-4 pt-8">
              {proyecto.demo && (
                <BotonEnlace href={proyecto.demo}>Ver demo</BotonEnlace>
              )}
              {proyecto.repo && !proyecto.privado && (
                <BotonEnlace href={proyecto.repo}>
                  <Github />
                  Ver código
                </BotonEnlace>
              )}
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}

function ListaTecnologias({
  tecnologias,
  chica = false,
}: {
  tecnologias: string[];
  chica?: boolean;
}) {
  return (
    <ul className="flex flex-wrap gap-2 pt-3">
      {tecnologias.map((tecnologia) => (
        <li
          key={tecnologia}
          className={`rounded-3xl bg-zinc-200 text-slate-950 ${chica ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'}`}
        >
          {tecnologia}
        </li>
      ))}
    </ul>
  );
}

// Mismo estilo que el botón del Curriculum
function BotonEnlace({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-10 items-center gap-2 overflow-hidden rounded-3xl bg-zinc-200 px-4 py-2.5 text-slate-950 transition-all duration-200 hover:bg-zinc-300 active:scale-110"
    >
      {children}
      <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-blue-600/20"></div>
      </div>
    </a>
  );
}
