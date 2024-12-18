"use client";

import { redirect } from "next/navigation";
import { CardInfoPersonal } from "../cardInfoPersonal";
import { CardMyReservation } from "../cardMyReservation";
import { Footer } from "../footer";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getReservationsByUser } from "@/actions/getReservationsByUserAction";

type User = {
  name: string;
  email: string;
  userId: string;
};

type Reservation = {
  reservationId: string;
  userId: string;
  siteId: string;
  dataReservation: string;
  dataCheckout: string;
  total: number;
  status: string;
  siteName: string;
}

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("authToken");
      const userCookie = Cookies.get("user");
      const reservation = Cookies.get("reservation");

      if (reservation) {
        toast("Reserva criada com sucesso!", { type: "success" });
      }

      if (!token && !userCookie) {
        redirect("/login");
        return;
      }

      if (token) {
        setIsAuthenticated(true);
      }

      if (userCookie) {
        try {
          const parsedUser: User = JSON.parse(userCookie);
          setUser(parsedUser);
          const res = await getReservationsByUser(parsedUser.userId);
          setReservations(res);
        } catch (error) {
          console.error("Failed to parse user cookie:", error);
          setUser(null);
        }
      }
    };

    fetchData();
  }, []);

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-t-white border-gray-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-black h-full pb-96">
      <main className="max-w-7xl mx-auto pb-96 p-5">
        <h1 className="text-white text-4xl font-bold pt-3 pb-3">Meu Perfil</h1>

        <CardInfoPersonal
          name={user.name}
          email={user.email}
          phone="Telefone"
        />

        <h1 className="text-white text-3xl font-bold my-7">Minhas Reservas</h1>

        {reservations &&
          reservations.map((reservation: Reservation, index) => (
            <CardMyReservation
              key={index}
              siteName={reservation.siteName}
              dataReservation={reservation.dataReservation}
              dataCheckout={reservation.dataCheckout}
              status={reservation.status}
              total={reservation.total}
            />
          ))}
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md">
        <Footer />
      </div>
    </div>
  );
}
