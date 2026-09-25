'use client';

import { useState } from 'react';
import { proyectos, type Proyecto } from '@/data/proyectos';
import ProyectoCard from './ProyectoCard';
import ProyectoDetalle from './ProyectoDetalle';

export default function ProyectosSection() {
  const [seleccionado, setSeleccionado] = useState<Proyecto | null>(null);

  return (
    <div className="w-full max-w-6xl px-4">
      <div className="items-center flex flex-col text-center pb-10">
        <h2 className="text-2xl md:text-4xl text-white p-3">Mis proyectos</h2>
      </div>
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto) => (
          <ProyectoCard
            key={proyecto.id}
            proyecto={proyecto}
            onAbrir={() => setSeleccionado(proyecto)}
          />
        ))}
      </div>
      <ProyectoDetalle
        proyecto={seleccionado}
        onCerrar={() => setSeleccionado(null)}
      />
    </div>
  );
}
