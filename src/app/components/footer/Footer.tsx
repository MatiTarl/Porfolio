import type { ReactNode } from 'react';
import Linkedin from '../../../ui/icons/Linkedin';
import Gmail from '../../../ui/icons/Gmail';
import Github from '../../../ui/icons/GitHub';

const MAIL = 'Matiastari@outlook.com.ar';

const secciones = [
  { texto: 'Inicio', href: '#HeadSection' },
  { texto: 'Proyectos', href: '#proyectos' },
  { texto: 'Tecnologías', href: '#tecnologias' },
  { texto: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="mt-32 w-full border-t border-zinc-800 bg-black/60 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 text-center md:grid-cols-3 md:text-left">
        <div>
          <p className="text-xl">Matías Tari</p>
          <p className="pt-1 text-zinc-400">Desarrollador</p>
          <p className="pt-3 text-sm text-zinc-400">
            Integraciones entre sistemas (CRM, ERP, WhatsApp) y desarrollo web.
          </p>
        </div>

        <nav aria-label="Secciones">
          <p className="pb-3 text-sm text-zinc-400">Navegación</p>
          <ul className="space-y-2">
            {secciones.map((seccion) => (
              <li key={seccion.href}>
                <a
                  href={seccion.href}
                  className="text-zinc-200 transition-colors hover:text-sky-600"
                >
                  {seccion.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="pb-3 text-sm text-zinc-400">Contacto</p>
          <div className="flex justify-center gap-3 md:justify-start">
            <IconoRed
              href="https://www.linkedin.com/in/matias-tari-299a10211/"
              label="LinkedIn"
            >
              <Linkedin />
            </IconoRed>
            <IconoRed href={`mailto:${MAIL}`} label="Enviar un mail">
              <Gmail />
            </IconoRed>
            <IconoRed href="https://github.com/MatiTarl" label="GitHub">
              <Github />
            </IconoRed>
          </div>
          <a
            href={`mailto:${MAIL}`}
            className="block pt-4 text-sm break-all text-zinc-200 transition-colors hover:text-sky-600"
          >
            {MAIL}
          </a>
          <a
            href="/CurriculumMatias.pdf"
            download="Curriculum Matias Tari"
            className="inline-block pt-2 text-sm text-zinc-200 transition-colors hover:text-sky-600"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Matías Tari</p>
          <p>Hecho con Next.js y Tailwind CSS</p>
          <a
            href="#HeadSection"
            className="rounded-3xl bg-zinc-200 px-4 py-1.5 text-slate-950 transition-all duration-200 hover:bg-zinc-300"
          >
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

// Mismo tamaño de toque cómodo en mobile (40px) y mismos íconos que la barra de redes
function IconoRed({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const externo = href.startsWith('http');
  return (
    <a
      href={href}
      aria-label={label}
      {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-slate-950 transition-all duration-200 hover:bg-zinc-300"
    >
      {children}
    </a>
  );
}
