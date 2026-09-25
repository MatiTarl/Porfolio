import Image from 'next/image';
import type { Proyecto } from '@/data/proyectos';

export default function ProyectoImagen({
  proyecto,
  sizes,
}: {
  proyecto: Proyecto;
  sizes: string;
}) {
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
