import axios from "axios"
import Cookies from "js-cookie";

type reservation = {
    userId: string,
    siteId: string,
    dataReservation: Date,
    dataCheckout: Date,
    total: string
}

export const createReservation = async ({ userId, siteId, dataReservation, dataCheckout, total }: reservation) => {
    const res = await axios.post('http://localhost:3004/reservations', {
        userId,
        siteId,
        dataReservation,
        dataCheckout,
        status: "pending",
        total
    });

    return res
}