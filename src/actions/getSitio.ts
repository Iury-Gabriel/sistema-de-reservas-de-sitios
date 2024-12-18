import axios from "axios"

export const getSitio = async (id: string) => {
    const sitio = await axios.get(`https://site-service-jbcm.onrender.com/sites/${id}`)

    return sitio.data
}