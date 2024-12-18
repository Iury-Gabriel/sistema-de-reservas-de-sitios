import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";

type Props = {
  siteName: string;
  dataReservation: string;
  dataCheckout: string;
  status: string;
  total: number;
};

export function CardMyReservation({
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
        Status: <span className="font-normal">{status}</span>
      </p>

      <button className="bg-stone-900 py-2 px-6 rounded-lg font-bold text-white mt-3">
        Ver Detalhes
      </button>
    </div>
  );
}
