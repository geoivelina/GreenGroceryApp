import { Routes, Route } from "react-router-dom";

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
import { useEffect, useState } from "react";
import * as fruitService from "./services/fruitService";
import * as testimonialService from './services/testimonialService';
import FruitDetails from "./components/FruitDetails/FruitDetails";

function App() {
    const [fruits, setFruits] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fruitService.getAllFruits().then((result) => {
            setFruits(result);
        });
        testimonialService.getAllTestimonial().then((x) => {
           setTestimonials(x);
        });
    }, []);

    return (
        <div>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/catalog" element={<Catalog fruits={fruits} />} />
                <Route path="/fruits/:fruitId" element={<FruitDetails />} />
                <Route path="/testimonial" element={<Testimonial testimonials={testimonials}/>} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <StoreInfo />
            <Footer />
        </div>
    );
}

export default App;
