import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Meu Perfil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased bg-[#121212]`}
      >
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
