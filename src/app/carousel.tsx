import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselImage({ site }: any) {
    return (
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
                  <Card className="relative aspect-[5/3] sm:aspect-[4/3] lg:aspect-square">
                    {" "}
                    {/* Proporção reduzida */}
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
          <CarouselPrevious className="absolute -left-4 sm:-left-6 lg:-left-8" />
          <CarouselNext className="absolute -right-4 sm:-right-6 lg:-right-8" />
        </Carousel>
    )
}