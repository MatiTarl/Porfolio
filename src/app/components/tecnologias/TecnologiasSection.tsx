import type { ReactNode } from 'react';
import {
  siBootstrap,
  siClickup,
  siExpress,
  siGit,
  siGithubactions,
  siGooglesheets,
  siHubspot,
  siMercadopago,
  siNextdotjs,
  siOdoo,
  siShadcnui,
  siTypescript,
  siVercel,
  siVite,
  siWhatsapp,
  type SimpleIcon,
} from 'simple-icons';
import Css from '../../../ui/tecnologias/Css';
import Html from '../../../ui/tecnologias/Html';
import JavaScript from '../../../ui/tecnologias/JavaScript';
import NodeJs from '../../../ui/tecnologias/NodeJs';
import Postgress from '../../../ui/tecnologias/Postgress';
import ReactIcon from '../../../ui/tecnologias/React';
import Redux from '../../../ui/tecnologias/Redux';
import Sequelize from '../../../ui/tecnologias/Sequelize';
import Tailwind from '../../../ui/tecnologias/Tailwind';

type Tecnologia = { nombre: string; icono: ReactNode };

// Logos de Simple Icons (CC0). Los muy oscuros se pintan claros para que se vean sobre el fondo negro.
// `claro`: fuerza la versión clara para logos de color oscuro que no contrastan (ej. Odoo)
function Marca({
  icono,
  claro = false,
}: {
  icono: SimpleIcon;
  claro?: boolean;
}) {
  const r = parseInt(icono.hex.slice(0, 2), 16);
  const g = parseInt(icono.hex.slice(2, 4), 16);
  const b = parseInt(icono.hex.slice(4, 6), 16);
  const esOscuro = 0.2126 * r + 0.7152 * g + 0.0722 * b < 60;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill={esOscuro || claro ? '#e4e4e7' : `#${icono.hex}`}
      className="h-full w-full"
    >
      <path d={icono.path} />
    </svg>
  );
}

// Para marcas que pidieron salir de Simple Icons (Pipedrive, Twilio, Azure) no se
// copia el logo: se muestra la inicial con el color de la marca.
function Monograma({ letra, color }: { letra: string; color: string }) {
  return (
    <span
      className="flex h-full w-full items-center justify-center rounded-xl text-2xl font-semibold text-white"
      style={{ backgroundColor: color }}
    >
      {letra}
    </span>
  );
}

// `ancho`: ocupa las dos columnas (los grupos con muchos íconos)
const grupos: {
  titulo: string;
  ancho?: boolean;
  tecnologias: Tecnologia[];
}[] = [
  {
    titulo: 'Frontend',
    ancho: true,
    tecnologias: [
      { nombre: 'HTML', icono: <Html /> },
      { nombre: 'CSS', icono: <Css /> },
      { nombre: 'JavaScript', icono: <JavaScript /> },
      { nombre: 'TypeScript', icono: <Marca icono={siTypescript} /> },
      { nombre: 'React', icono: <ReactIcon /> },
      { nombre: 'Next.js', icono: <Marca icono={siNextdotjs} /> },
      { nombre: 'Tailwind', icono: <Tailwind /> },
      { nombre: 'Vite', icono: <Marca icono={siVite} /> },
      { nombre: 'Bootstrap', icono: <Marca icono={siBootstrap} /> },
      { nombre: 'shadcn/ui', icono: <Marca icono={siShadcnui} /> },
      { nombre: 'Redux', icono: <Redux /> },
    ],
  },
  {
    titulo: 'Integraciones y APIs',
    ancho: true,
    tecnologias: [
      { nombre: 'HubSpot', icono: <Marca icono={siHubspot} /> },
      { nombre: 'Pipedrive', icono: <Monograma letra="P" color="#017737" /> },
      { nombre: 'Twilio', icono: <Monograma letra="T" color="#F22F46" /> },
      { nombre: 'WhatsApp', icono: <Marca icono={siWhatsapp} /> },
      { nombre: 'Odoo', icono: <Marca icono={siOdoo} claro /> },
      { nombre: 'Mercado Pago', icono: <Marca icono={siMercadopago} /> },
      { nombre: 'Google Sheets', icono: <Marca icono={siGooglesheets} /> },
      { nombre: 'ClickUp', icono: <Marca icono={siClickup} /> },
    ],
  },
  {
    titulo: 'Backend y datos',
    tecnologias: [
      { nombre: 'Node.js', icono: <NodeJs /> },
      { nombre: 'Express', icono: <Marca icono={siExpress} /> },
      { nombre: 'PostgreSQL', icono: <Postgress /> },
      { nombre: 'Sequelize', icono: <Sequelize /> },
    ],
  },
  {
    titulo: 'Cloud y herramientas',
    tecnologias: [
      { nombre: 'Azure', icono: <Monograma letra="A" color="#0078D4" /> },
      { nombre: 'Vercel', icono: <Marca icono={siVercel} /> },
      { nombre: 'GitHub Actions', icono: <Marca icono={siGithubactions} /> },
      { nombre: 'Git', icono: <Marca icono={siGit} /> },
    ],
  },
];

export default function TecnologiasSection() {
  return (
    <div className="flex w-full max-w-6xl flex-col items-center px-4">
      <h2 className="py-3 pb-10 text-2xl md:text-4xl">Tecnologías</h2>
      <div className="grid w-full gap-6 md:grid-cols-2">
        {grupos.map((grupo) => (
          <div
            key={grupo.titulo}
            className={`rounded-3xl border border-zinc-800 bg-black/60 p-6 ${grupo.ancho ? 'md:col-span-2' : ''}`}
          >
            <h3 className="pb-5 text-center text-xl">{grupo.titulo}</h3>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-5">
              {grupo.tecnologias.map((tecnologia) => (
                <li
                  key={tecnologia.nombre}
                  className="flex w-20 flex-col items-center gap-2"
                >
                  {/* Mismo brillo blanco que tenían los íconos antes */}
                  <div className="h-12 w-12 drop-shadow-[0px_0px_5px_rgba(252,252,252,0.5)] md:h-14 md:w-14">
                    {tecnologia.icono}
                  </div>
                  <span className="text-center text-xs text-zinc-300">
                    {tecnologia.nombre}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
