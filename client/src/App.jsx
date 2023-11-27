import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import * as fruitService from "./services/fruitService";
import * as authService from "./services/authService";
import * as testimonialService from "./services/testimonialService";
import { AuthContext } from "./contexts/AuthContext";
import Path from "./path";

import AboutUs from "./components/AboutUs/AboutUs";
import Catalog from "./components/Catalog/Catalog";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import StoreInfo from "./components/StoreInfo/StoreInfo";
import Testimonial from "./components/Testimonial/Testimonial";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import FruitDetails from "./components/FruitDetails/FruitDetails";

function App() {
    const [auth, setAuth] = useState({});
    const [fruits, setFruits] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        //TODO confirm  passwords match
       const result = await authService.register(values.email, values.password);
        setAuth(result);
        navigate(Path.Home);
    };

    useEffect(() => {
        fruitService.getAllFruits().then((result) => {
            setFruits(result);
        });
        testimonialService.getAllTestimonial().then((x) => {
            setTestimonials(x);
        });
    }, []);

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        email: auth.email,
        isAuthenticated: !!auth.email,
    };
    return (
        <AuthContext.Provider value={ values }>
            <div>
                <Header />
                <Navbar />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Shop} element={<Shop />} />
                    <Route path={Path.AboutUs} element={<AboutUs />} />
                    <Route
                        path={Path.Catalog}
                        element={<Catalog fruits={fruits} />}
                    />
                    <Route
                        path={Path.FruitDetails}
                        element={<FruitDetails />}
                    />
                    <Route
                        path={Path.Testimonial}
                        element={<Testimonial testimonials={testimonials} />}
                    />
                    <Route path={Path.ContactUs} element={<ContactUs />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    {/* <Route path={Path.Logout} element={<Logout/>}/> */}
                </Routes>
                <StoreInfo />
                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
