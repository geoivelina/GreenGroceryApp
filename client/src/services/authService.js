import { requester } from "../lib/requester";

const baseUrl = "http://localhost:3030/users";

export const login = async (email, password) => {
    const result = await requester("POST", `${baseUrl}/login`, {
        email,
        password,
    });
    return result;
};

export const register = (email, password)=> requester("POST", `${baseUrl}/register`, {
    email,
    password,
});

export const logout = async () => {
    requester("GET", `${baseUrl}/logout`);
};
