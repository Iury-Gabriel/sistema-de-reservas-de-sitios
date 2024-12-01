import { Header } from "./header";
import { CardSitio } from "./cardSitio";
import sitioImage from '../../public/sitio.jpg';
import { Footer } from "./footer";

export default function Page() {
    return (
        <div className="">
            <Header />

            <main className="max-w-7xl mx-auto my-10 px-4">
                <h1 className="text-black text-3xl font-bold">
                    Principais sítios da cidade
                </h1>

                <div className="mt-6 sm:grid-cols-2 md:grid-cols-3 grid grid-cols-1 gap-3">
                    <CardSitio img={sitioImage} title="Sitio Tijupa" avaliation={4.5} price={500} description="Belo sítio com vista para o nascer do sol e diversas atividades." />
                    <CardSitio img={sitioImage} title="Sitio Tijupa" avaliation={4.5} price={500} description="Belo sítio com vista para o nascer do sol e diversas atividades." />
                    <CardSitio img={sitioImage} title="Sitio Tijupa" avaliation={4.5} price={500} description="Belo sítio com vista para o nascer do sol e diversas atividades." />
                    <CardSitio img={sitioImage} title="Sitio Tijupa" avaliation={4.5} price={500} description="Belo sítio com vista para o nascer do sol e diversas atividades." />
                    <CardSitio img={sitioImage} title="Sitio Tijupa" avaliation={4.5} price={500} description="Belo sítio com vista para o nascer do sol e diversas atividades." />
                    <CardSitio img={sitioImage} title="Sitio Tijupa" avaliation={4.5} price={500} description="Belo sítio com vista para o nascer do sol e diversas atividades." />
                </div>
            </main>

            <Footer />
        </div>
    );
}
