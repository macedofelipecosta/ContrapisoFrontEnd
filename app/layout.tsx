import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from './components/navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Contrapiso',
  description: 'Página oficial de Contrapiso',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
         <NavBar></NavBar>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer>
          <p>© 2024 Contrapiso. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>

  );
}
