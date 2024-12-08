import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./header";

export const metadata: Metadata = {
  title: "Reserva de Sitios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased bg-slate-50`}
      >
        <main className="">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
