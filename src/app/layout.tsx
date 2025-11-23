
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['700'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: 'MAFA Impulso Digital Landing Page',
  description: 'Impulsa tu Negocio con una Landing Page Profesional en Días, No Semanas. Tu plataforma de ventas lista para atraer clientes y vender 24/7.',
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${openSans.variable} font-body`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
