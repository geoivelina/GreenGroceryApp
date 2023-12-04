import { Routes, Route, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import {AuthProvider}  from "./contexts/AuthContext";
import Path from "./path";

import AboutUs from "./components/AboutUs/AboutUs";
import Catalog from "./components/Catalog/Catalog";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import FruitDetails from "./components/FruitDetails/FruitDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Shop from "./components/Shop/Shop";
import StoreInfo from "./components/StoreInfo/StoreInfo";
import Testimonial from "./components/Testimonial/Testimonial";
import CreateTestimonial from "./components/Testimonial/CreateTestimonial";

function App() {
    return (
        <AuthProvider>
            <div>
                <Header />
                <Navbar />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Shop} element={<Shop />} />
                    <Route path={Path.AboutUs} element={<AboutUs />} />
                    <Route  path={Path.Catalog} element={<Catalog />}  />
                    <Route path={Path.FruitDetails} element={<FruitDetails />}  />
                    <Route path={Path.Testimonial} element={<Testimonial />} />
                    <Route path={Path.AddTestimonial} element={<CreateTestimonial />} />
                    <Route path={Path.ContactUs} element={<ContactUs />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.Logout} element={<Logout/>}/>
                </Routes>
                <StoreInfo />
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
