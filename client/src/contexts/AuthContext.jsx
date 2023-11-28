import { createContext} from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import * as authService from "../services/authService";
import * as testimonialService from "../services/testimonialService";



const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) =>{
    const [auth, setAuth] = useState(()=>{
        localStorage.removeItem('accessToken');
        return {};
    });
  
    const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        //TODO confirm  passwords match
       const result = await authService.register(values.email, values.password);
        
       setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const  logoutHandler = () =>{
       
        localStorage.removeItem('accessToken');
        setAuth({});
       
}



    

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    };
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
