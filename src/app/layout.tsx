import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../ui/global.css';
import Footer from './components/footer/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matías Tari | Developer',
  description:
    'Portfolio de Matías Tari, developer especializado en integraciones entre sistemas y desarrollo web. Proyectos, tecnologías y contacto.',
  openGraph: {
    title: 'Matías Tari | Developer',
    description:
      'Portfolio de Matías Tari, developer especializado en integraciones entre sistemas y desarrollo web. Proyectos, tecnologías y contacto.',
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
    <html lang="es" className="scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} antialiased bg-black min-h-screen w-auto flex flex-col items-center `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
