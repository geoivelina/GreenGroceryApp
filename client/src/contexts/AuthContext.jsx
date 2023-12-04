import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Path from "../path";

import * as authService from "../services/authService";
import usePersistedSTate from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedSTate("auth", {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate(Path.Home);
    };

    const registerSubmitHandler =  (values) => {
        //TODO confirm  passwords match
        console.log(values);
        const result =  authService.register(values.email, values.password);
        setAuth(result);

        localStorage.setItem("accessToken", result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        localStorage.removeItem("accessToken");
        setAuth({});
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        fullName: auth.fullName,
        email:  auth.email,
        logoutHandler,
        isAuthenticated: !!auth.accessToken,
    };
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
