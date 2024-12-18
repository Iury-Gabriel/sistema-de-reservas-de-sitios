"use client";

import { useState, useEffect } from "react";
import { Header } from "./header";
import { CardSitio } from "./cardSitio";
import { Footer } from "./footer";
import { getSitios } from "@/actions/getSitios";

export default function Page() {
    const [sitios, setSitios] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const baseURL = "https://site-service-jbcm.onrender.com/";

    useEffect(() => {
        const fetchSitios = async () => {
            try {
                // Aqui você pode verificar se os dados estão no cache
                const sitiosData = await getSitios();

                // Processar as imagens
                sitiosData.forEach((sitio: any) => {
                    sitio.images = sitio.images.map((imagePath: string) =>
                        baseURL + imagePath.replace(/\\/g, "/") // Substituir '\' por '/'
                    );
                });

                setSitios(sitiosData);
            } catch (error) {
                console.error("Erro ao buscar os sítios", error);
            } finally {
                // Garantir que o carregamento seja concluído
                setIsLoading(false);
            }
        };

        fetchSitios();
    }, []);

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