import axios from "axios"

export const getSitio = async (id: string) => {
    const sitio = await axios.get(`https://site-service-production.up.railway.app/sites/${id}`)

    return sitio.data
}