import { Header } from "./header";
import { CardSitio } from "./cardSitio";
import { Footer } from "./footer";
import { getSitios } from "@/actions/getSitios";

export const revalidate = 0; // Sempre buscar dados atualizados

export default async function Page() {
    const baseURL = "https://site-service-jbcm.onrender.com/";

    const sitios = await getSitios();

    sitios.forEach((sitio: any) => {
        sitio.images = sitio.images.map((imagePath: string) =>
            baseURL + imagePath.replace(/\\/g, "/") // Substituir '\' por '/'
        );
    });

    console.log(sitios);

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
