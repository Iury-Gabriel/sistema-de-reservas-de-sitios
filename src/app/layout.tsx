import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./header";
import { ToastContainer } from "react-toastify";
import { Badge } from "@/components/ui/badge";
import { VersionBadge } from "./version-badge";

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
      <body className={`antialiased bg-slate-50`}>
        <main className="">
          <Header />
          <ToastContainer />
          {children}
          <VersionBadge />
        </main>
      </body>
    </html>
  );
}
