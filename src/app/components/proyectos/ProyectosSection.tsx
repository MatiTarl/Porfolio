'use client';

import { useState } from 'react';
import { categorias, proyectos, type Proyecto } from '@/data/proyectos';
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

  return (
    <div className="w-full max-w-6xl px-4">
      <div className="items-center flex flex-col text-center pb-10">
        <h2 className="text-2xl md:text-4xl text-white p-3">Mis proyectos</h2>
      </div>
      <div className="flex flex-col gap-12">
        {filas.map(({ categoria, proyectos }) => (
          <ProyectosCarrusel
            key={categoria.id}
            categoria={categoria}
            proyectos={proyectos}
            onAbrir={setSeleccionado}
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
