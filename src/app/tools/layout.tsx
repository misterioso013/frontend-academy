import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ferramentas - Front-end Academy",
  description: "Ferramentas para desenvolvedores front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-zinc-500 text-white py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Front-end Academy</h1>
                <nav>
                <ul className="flex space-x-4">
                    <li>
                    <a href="/" className="hover:underline">Início</a>
                    </li>
                    <li>
                    <a href="/tools" className="hover:underline">Ferramentas</a>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
        {children}
        <footer className="bg-zinc-500 text-white py-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <p className="text-center text-sm">
                &copy; {new Date().getFullYear()} Front-end Academy. Todos os direitos reservados.
                </p>
            </div>
        </footer>
      </body>
    </html>
  );
}
