import axios from "axios"

export const getReservation = async (id: string) => {
    const reservation = await axios.get(`https://reservation-service-ukoi.onrender.com/reservations/${id}`)

    return reservation.data
}