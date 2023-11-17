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

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            {/* <Home/> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/storeInfo" element={<StoreInfo />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
