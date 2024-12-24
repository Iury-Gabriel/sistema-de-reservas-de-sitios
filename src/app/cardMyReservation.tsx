import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  reservationId: string;
  siteName: string;
  dataReservation: string;
  dataCheckout: string;
  status: string;
  total: number;
};

export function CardMyReservation({
  reservationId,
  siteName,
  dataReservation,
  dataCheckout,
  status,
  total,
}: Props) {
  return (
    <div className="bg-[#09090B] max-w-7xl lg:max-w-7xl rounded-xl w-full p-7 border border-[#1C1C1E] hover:bg-[#27272A] mb-2">
      <h1 className="text-2xl font-bold text-white mb-1">{siteName}</h1>
      <p className="text-stone-500 text-sm mb-5">
        {format(dataReservation, "dd/MM/yyyy", { locale: ptBR })} a{" "}
        {format(dataCheckout, "dd/MM/yyyy", { locale: ptBR })}
      </p>

      <p className="text-white font-bold">
        Status: <span className="font-normal">{status === "pending" && "Pendente"}{status === "confirmed" && "Confirmada"}</span>
      </p>

      {status === "pending" && (
        <p className="text-white font-bold">
          Total a pagar: <span className="font-normal">R$ {total}</span>
        </p>
      )}

      {status === "pending" && (
        <button className="bg-[#EAB308] text-black py-2 px-6 rounded-lg mt-3">
          <Link href={`/reserva/${reservationId}`} className="flex gap-2 justify-center items-center">
            Clique para pagar
            <ArrowRight />
          </Link>
        </button>
      )}

      {status === "confirmed" && (
        <button className="bg-stone-900 py-2 px-6 rounded-lg font-bold text-white mt-3">
          <Link href={`/reserva/${reservationId}`} className="flex gap-2 justify-center items-center">
            Ver Detalhes
          </Link>
        </button>
      )}
    </div>
  );
}
