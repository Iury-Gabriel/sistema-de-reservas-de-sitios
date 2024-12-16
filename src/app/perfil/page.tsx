"use client";

import { redirect } from "next/navigation";
import { CardInfoPersonal } from "../cardInfoPersonal";
import { CardMyReservation } from "../cardMyReservation";
import { Footer } from "../footer";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

type User = {
    name: string;
    email: string;
};

export default function Page() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = Cookies.get("authToken");
        const userCookie = Cookies.get("user");

        if (!token && !userCookie) {
            redirect("/login");
        }

        if (token) {
            setIsAuthenticated(true);
        }

        if (userCookie) {
            try {
                const parsedUser: User = JSON.parse(userCookie);
                setUser(parsedUser);
            } catch (error) {
                console.error("Failed to parse user cookie:", error);
                setUser(null);
            }
        }
    }, []);

    if (!isAuthenticated || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="w-12 h-12 border-4 border-t-white border-gray-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="bg-black">
            <main className="max-w-7xl mx-auto pb-10 p-5">
                <h1 className="text-white text-4xl font-bold pt-3 pb-3">Meu Perfil</h1>

                <CardInfoPersonal name={user.name} email={user.email} phone="Telefone" />

                <h1 className="text-white text-3xl font-bold my-7">Minhas Reservas</h1>

                <CardMyReservation
                    title="Sitio Tijupa"
                    startDate="01/01/2023"
                    endDate="01/01/2023"
                    status="Pendente"
                    price={500}
                />
                <CardMyReservation
                    title="Sitio Tijupa"
                    startDate="01/01/2023"
                    endDate="01/01/2023"
                    status="Pendente"
                    price={500}
                />
            </main>

            <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md">
                <Footer />
            </div>
        </div>
    );
}
