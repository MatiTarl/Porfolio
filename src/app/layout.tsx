import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../ui/global.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matías Tari | Full Stack Web Developer',
  description:
    'Portfolio de Matías Tari, desarrollador web Full Stack. Proyectos, tecnologías y contacto.',
  openGraph: {
    title: 'Matías Tari | Full Stack Web Developer',
    description:
      'Portfolio de Matías Tari, desarrollador web Full Stack. Proyectos, tecnologías y contacto.',
    type: 'website',
    locale: 'es_AR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className='scroll-smooth'>
      <body suppressHydrationWarning={true}
        className={`${inter.className} antialiased bg-black min-h-screen pb-32 w-auto flex flex-col items-center `}
      >
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
