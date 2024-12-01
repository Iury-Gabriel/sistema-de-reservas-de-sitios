import Link from "next/link";

export function Header() {
    return (
        <div className="bg-orange-200 h-16">
            <div className="flex justify-between items-center max-w-7xl h-16 w-full mx-auto">
                <h1 className="text-black text-2xl font-bold mx-2">Reserva<span className="text-orange-500 font-bold">Sitio</span></h1>

                <nav className="flex gap-4 text-black">
                    <Link href="/">Inicio</Link>
                    <Link href="/anunciar">Anunciar Sitio</Link>
                    <Link href="/perfil">Meu Perfil</Link>
                </nav>
            </div>
        </div>
    )
}