import axios from "axios"

export const getReservationsByUser = async (id: string) => {
    const reservations = await axios.get(`https://reservation-service-ukoi.onrender.com/reservations/user/${id}`);

    return reservations.data;
}