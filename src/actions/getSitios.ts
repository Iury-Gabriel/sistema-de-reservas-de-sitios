import axios from "axios"

export const getSitios = async () => {
    const sitios = await fetch('https://site-service-jbcm.onrender.com/sites', {
        cache: 'force-cache',
        next: {         
            revalidate: 60,
        },
    });

    const ping = await fetch('https://reservation-service-ukoi.onrender.com/ping', {
        cache: 'force-cache',
        next: {         
            revalidate: 60,
        },
    });

    const ping2 = await fetch('https://user-services-q0r8.onrender.com/ping', {
        cache: 'force-cache',
        next: {         
            revalidate: 60,
        },
    });

    return sitios.json();
}