import axios from "axios"

export const getReservationsByUser = async (id: string) => {
    const reservations = await fetch(`https://reservation-service-ukoi.onrender.com/reservations/user/${id}`, {
        cache: 'force-cache',
        next: {         
            revalidate: 600,
        },
    });

    return reservations.json();
}