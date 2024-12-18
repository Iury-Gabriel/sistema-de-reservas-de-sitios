"use client";

import { useState, useEffect } from "react";
import { Header } from "./header";
import { CardSitio } from "./cardSitio";
import { Footer } from "./footer";
import { getSitios } from "@/actions/getSitios";

export default function Page() {
    const [sitios, setSitios] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

    const baseURL = "https://site-service-jbcm.onrender.com/";

    useEffect(() => {
        // Função para buscar os dados
        const fetchSitios = async () => {
            try {
                const sitiosData = await getSitios();

                // Formatar imagens
                sitiosData.forEach((sitio: any) => {
                    sitio.images = sitio.images.map((imagePath: string) =>
                        baseURL + imagePath.replace(/\\/g, "/") // Substituir '\' por '/'
                    );
                });

                setSitios(sitiosData); // Atualizar o estado com os dados
                setIsLoading(false); // Finalizou o carregamento
            } catch (error) {
                console.error("Erro ao buscar os sítios", error);
                setIsLoading(false); // Mesmo em caso de erro, parar o loading
            }
        };

        fetchSitios();
    }, []); // Vai rodar apenas uma vez ao carregar a página

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-200">
                <div className="w-16 h-16 border-4 border-t-white border-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="">
            <main className="max-w-7xl mx-auto mt-10 px-4 mb-24">
                <h1 className="text-black text-3xl font-bold">
                    Principais sítios da cidade
                </h1>

                <div className="mt-6 sm:grid-cols-2 md:grid-cols-3 grid grid-cols-1 gap-3">
                    {sitios.map((sitio: any) => (
                        <CardSitio
                            id={sitio.id}
                            key={sitio.id}
                            img={sitio.images[0]}
                            title={sitio.name}
                            avaliation={sitio.rating}
                            price={sitio.pricePerDay}
                            description={sitio.description}
                        />
                    ))}
                </div>
            </main>

            <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md">
                <Footer />
            </div>
        </div>
    );
}
