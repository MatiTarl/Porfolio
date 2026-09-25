import type { Proyecto } from '@/data/proyectos';
import ProyectoImagen from './ProyectoImagen';

const MAX_TECNOLOGIAS = 3;

export default function ProyectoCard({
  proyecto,
  onAbrir,
}: {
  proyecto: Proyecto;
  onAbrir: () => void;
}) {
  const visibles = proyecto.tecnologias.slice(0, MAX_TECNOLOGIAS);
  const restantes = proyecto.tecnologias.length - visibles.length;

  return (
    <button
      type="button"
      onClick={onAbrir}
      aria-haspopup="dialog"
      className="group flex w-full cursor-pointer flex-col text-left"
    >
      <div className="relative w-full rounded-xl transition duration-200 group-hover:-translate-y-2 group-hover:shadow-[0px_0px_12px_rgba(252,252,252,0.35)]">
        <ProyectoImagen
          proyecto={proyecto}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute top-3 left-3">
          <EstadoBadge online={Boolean(proyecto.demo)} />
        </div>
      </div>
      <h3 className="pt-4 text-xl">{proyecto.titulo}</h3>
      <p className="pt-1 text-sm text-zinc-300">{proyecto.resumen}</p>
      <ul className="flex flex-wrap gap-2 pt-3">
        {visibles.map((tecnologia) => (
          <li
            key={tecnologia}
            className="rounded-3xl bg-zinc-200 px-2.5 py-0.5 text-xs text-slate-950"
          >
            {tecnologia}
          </li>
        ))}
        {restantes > 0 && (
          <li className="rounded-3xl px-1 py-0.5 text-xs text-zinc-400">
            +{restantes}
          </li>
        )}
      </ul>
    </button>
  );
}

export function EstadoBadge({ online }: { online: boolean }) {
  return (
    <span className="flex w-fit items-center gap-1.5 rounded-3xl bg-black/75 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
      <span
        className={`h-2 w-2 rounded-full ${online ? 'bg-green-500' : 'bg-zinc-500'}`}
      />
      {online ? 'Online' : 'Sin demo'}
    </span>
  );
}
