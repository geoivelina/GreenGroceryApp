import AboutUs from "./components/AboutUs/AboutUs";
import Catalog from "./components/Catalog/Catalog";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import StoreInfo from "./components/StoreInfo";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Shop />
            <AboutUs />
            <Catalog/>
            <Testimonial/>
            <ContactUs/>
            <StoreInfo/>
            <Footer/>
        </div>
    );
}

export default App;
