import axios from "axios"
import Cookies from "js-cookie";

type userLogin = {
    email: string,
    password: string
}

export const loginAction = async ({ email, password }: userLogin) => {
    const res = await axios.post('https://user-services-q0r8.onrender.com/login', {
        email,
        password
    });

    const token = res.data.token;
    const user = res.data.user;

    if (token) {
        Cookies.set("authToken", token, { expires: 1 / 24, secure: true });
    }

    if (user) {
        const userString = JSON.stringify({
            email: user.email,
            name: user.name,
            userId: user.id
        });
        Cookies.set("user", userString, { expires: 1 / 24 });
    }

    return res
}