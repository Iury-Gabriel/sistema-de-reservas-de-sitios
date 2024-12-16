import { getSitio } from "@/actions/getSitio";
import { Footer } from "../../footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page({ params }: any) {
  const id = params.id;

  const baseURL = "https://site-service-jbcm.onrender.com/";

  const site = await getSitio(id);

  // Verifica se "site.images" é um array antes de tentar manipulá-lo
  if (site && Array.isArray(site.images)) {
    site.images = site.images.map(
      (imagePath: string) => baseURL + imagePath.replace(/\\/g, "/") // Substituir '\' por '/'
    );
  }

  console.log(site);

  return (
    <div>
      <main className="max-w-7xl mx-auto mt-10 px-4 mb-28">
        <h1 className="text-black text-4xl font-bold mb-5">{site.name}</h1>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {site.images.map((image: string, index: number) => (
              <CarouselItem
                key={index}
                className="basis-[80%] sm:basis-1/2 lg:basis-1/3" // Reduz mais no celular
              >
                <div className="p-1">
                  <Card className="relative aspect-[5/3] sm:aspect-[4/3] lg:aspect-square"> {/* Proporção reduzida */}
                    <CardContent className="relative w-full h-full overflow-hidden">
                      <Image
                        src={image}
                        alt={`Foto ${index + 1} do sítio`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Adiciona ainda mais margem para as setas */}
          <CarouselPrevious className="absolute -left-4 sm:-left-6 lg:-left-8" />
          <CarouselNext className="absolute -right-4 sm:-right-6 lg:-right-8" />
        </Carousel>

        <div className="flex justify-between mt-4">
          <div>
            <p className="text-stone-500 mt-4">R$ {site.pricePerDay}/dia</p>
            <p className="text-stone-500">Avaliação: {site.rating}/5</p>
          </div>

          <Button className="bg-stone-900 py-2 px-6 rounded-lg font-bold text-white mt-6">
            <Link href={`/reservar/${site.id}`}>Reservar</Link>
          </Button>
        </div>

        <h3 className="text-black text-2xl font-bold my-5">Descrição</h3>
        <p className="text-stone-500">{site.description}</p>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md">
        <Footer />
      </div>
    </div>
  );
}
