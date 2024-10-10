import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../ui/global.css';
const inter = Inter({ subsets: ['latin'] });
require('dotenv').config();

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body suppressHydrationWarning={true}
        className={`${inter.className} antialiased bg-black min-h-screen pb-32 w-auto flex flex-col items-center `}
      >
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
