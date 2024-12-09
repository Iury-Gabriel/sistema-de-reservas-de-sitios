import axios from "axios"

export const getSitios = async () => {
    const sitios = await axios.get('https://site-service-jbcm.onrender.com/sites', {
        headers: {
            "Cache-Control": "no-cache",
        },
    })

    return sitios.data
}