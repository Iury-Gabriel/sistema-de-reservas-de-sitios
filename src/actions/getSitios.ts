import axios from "axios"

export const getSitios = async () => {
    const sitios = await axios.get('https://site-service-production.up.railway.app/sites');

    const ping = await axios.get('https://reservation-service-ukoi.onrender.com/ping');

    const ping2 = await axios.get('https://user-services-q0r8.onrender.com/ping');

    return sitios.data;
}