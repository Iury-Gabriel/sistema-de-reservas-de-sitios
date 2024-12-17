import { Header } from "../header";
import { Footer } from "../footer";
import { getSitios } from "@/actions/getSitios";
import { CardPlanBasic } from "../cardPlanBasic";
import { Card } from "@/components/ui/card";
import { CardPlanPremium } from "../cardPlanPremium";

export const revalidate = 0; // Sempre buscar dados atualizados

export default async function Page() {

    return (
        <div className="bg-[#121212] h-full">
                    <main className="max-w-7xl mx-auto mb-10 pb-96 p-5 flex flex-col items-center justify-center">
                        <h1 className="text-white text-4xl font-bold py-7 text-center">Planos para Anunciar seu Sítio</h1>

                        <p className="text-white text-center text-lg mb-5">Escolha o plano ideal para você e comece a receber reservas para o seu sítio. <br></br> Aumente sua visibilidade e alcance mais clientes!</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <CardPlanBasic />
                            <CardPlanPremium />
                        </div>
                    </main>
        
                    <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md">
                        <Footer />
                    </div>
                </div>
    );
}
