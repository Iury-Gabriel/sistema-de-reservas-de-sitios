import axios from "axios"
import Cookies from "js-cookie";

type userRegister = {
    name: string,
    email: string,
    password: string,
    roleId: string
}

export const registerAction = async ({ email, password, name, roleId }: userRegister) => {
    const res = await axios.post('https://user-services-q0r8.onrender.com/users', {
        name,
        email,
        password,
        roleId
    });

    return res
}