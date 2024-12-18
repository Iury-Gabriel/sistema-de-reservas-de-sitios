import { Response } from "@/app/doReservation";
import axios from "axios";

type Reservation = {
  userId: string;
  siteId: string;
  dataReservation: Date;
  dataCheckout: Date;
  total: string;
};

export const createReservation = async ({
  userId,
  siteId,
  dataReservation,
  dataCheckout,
  total,
}: Reservation) => {
  try {
    const res: Response = await axios.post(
      "https://reservation-service-ukoi.onrender.com/reservations",
      {
        userId,
        siteId,
        dataReservation,
        dataCheckout,
        status: "pending",
        total,
      }
    );
    return res;
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.error || "Erro ao criar reserva.",
      status: error.response?.status || 500,
    };
  }
};
