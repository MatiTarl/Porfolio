import { Fragment } from 'react';
import Image from 'next/image';
import type { Proyecto } from '@/data/proyectos';

export default function ProyectoImagen({
  proyecto,
  sizes,
  compacto = false,
}: {
  proyecto: Proyecto;
  sizes: string;
  // En el detalle el diagrama no necesita la proporción de una captura
  compacto?: boolean;
}) {
  if (!proyecto.imagen && proyecto.flujo) {
    // Integraciones: no hay pantalla que capturar, se dibuja qué sistemas conecta
    const { sistemas, bidireccional } = proyecto.flujo;
    return (
      <div
        className={`flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-slate-950 px-4 ${compacto ? 'py-8' : 'aspect-16/10'}`}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {sistemas.map((sistema, i) => (
            <Fragment key={sistema}>
              {i > 0 && (
                <span aria-hidden="true" className="text-2xl text-zinc-400">
                  {bidireccional ? '⇄' : '→'}
                </span>
              )}
              <span className="rounded-3xl bg-zinc-200 px-3 py-2 text-xs whitespace-nowrap text-slate-950 shadow-[0px_0px_12px_rgba(252,252,252,0.35)] sm:px-4 sm:text-sm">
                {sistema}
              </span>
            </Fragment>
          ))}
        </div>
        <span className="text-sm text-zinc-400">{proyecto.tipo}</span>
      </div>
    );
  }

  if (!proyecto.imagen) {
    // Proyectos sin captura (por ejemplo, los que solo tienen código en GitHub)
    return (
      <div className="flex aspect-16/10 w-full flex-col items-center justify-center gap-2 rounded-xl bg-slate-950">
        <span className="font-mono text-4xl text-zinc-200">{'</>'}</span>
        <span className="text-sm text-zinc-400">{proyecto.tipo}</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl">
      <Image
        src={proyecto.imagen}
        alt={`Captura de ${proyecto.titulo}`}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}
