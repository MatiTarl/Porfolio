import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../ui/global.css';
const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-black min-h-screen pb-32 w-auto flex flex-col items-center `}
      >
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
