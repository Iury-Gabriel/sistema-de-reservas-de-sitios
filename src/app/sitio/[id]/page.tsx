import { getSitio } from "@/actions/getSitio";
import { Footer } from "../../footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DoReservation } from "@/app/doReservation";
import { CarouselImage } from "@/app/carousel";

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

  return (
    <div>
      <main className="max-w-7xl mx-auto mt-10 px-4 mb-28">
        <h1 className="text-black text-4xl font-bold mb-5">{site.name}</h1>

        <CarouselImage site={site} />

        <div className="flex justify-between mt-4">
          <div>
            <p className="text-stone-500 mt-4">R$ {site.pricePerDay}/dia</p>
            <p className="text-stone-500">Avaliação: {site.rating}/5</p>
          </div>

          <DoReservation />
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
