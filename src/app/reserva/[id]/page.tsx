import { getReservation } from "@/actions/getReservation";
import { Footer } from "@/app/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowLeft, Calendar, DollarSign, MapPin } from "lucide-react";
import Link from "next/link";

export default async function Page({ params }: any) {
  const id = params.id;

  const baseURL = "https://site-service-jbcm.onrender.com/";

  const reservation = await getReservation(id);

  return (
    <div className="bg-black h-full pb-96">
      <main className="max-w-7xl pb-96 p-5 mx-auto flex flex-col items-center">
        <div className="w-full mb-5">
          <p className="text-white text-md flex gap-2 items-center font-bold hover:underline cursor-pointer">
            <ArrowLeft className="h-4 w-4" />
            <Link href="/perfil">
                Voltar para minhas reservas
            </Link>
          </p>
        </div>

        <div className="mx-auto max-w-2xl border-[#27272A] h-full w-full rounded border-2 p-5">
          <div className="flex justify-between items-center">
            <p className="text-white text-xl font-bold text-center mb-4">
              {reservation.siteName}
            </p>
            <Badge className="self-center bg-yellow-500 hover:bg-yellow-600">
              {reservation.status === "pending" && "Pendente"}
              {reservation.status === "confirmed" && "Confirmada"}
            </Badge>
          </div>

          <div className="w-full bg-[#FEFCE8] p-3 rounded-sm mt-3">
            <p className="text-sm text-[#B36207]">
              Sua reserva está aguardando confirmação de pagamento. Clique no
              botão abaixo para combinar o pagamento com o proprietário.
            </p>
          </div>

          <div className="grid gap-4 mt-5">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-white" />
              <div>
                <p className="font-medium text-white">Período</p>
                <p className="text-white">
                  {format(reservation.dataReservation, "dd/MM/yyyy", {
                    locale: ptBR,
                  })}{" "}
                  a{" "}
                  {format(reservation.dataCheckout, "dd/MM/yyyy", {
                    locale: ptBR,
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-white" />
              <div>
                <p className="font-medium text-white">Valor Total</p>
                <p className="text-lg font-semibold text-white">
                  R$ {reservation.total.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-white" />
              <div>
                <p className="font-medium text-white">Endereço</p>
                <p className="text-white">Estrada das Flores, 123 - Zona Rural, Cidade - Estado</p>
              </div>
            </div>
          </div>

          <Button className="bg-green-500 w-full text-black mt-4 hover:bg-green-600">
            Combinar pagamento via whatsapp
          </Button>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md">
        <Footer />
      </div>
    </div>
  );
}
