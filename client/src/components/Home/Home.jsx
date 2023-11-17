import AboutUs from "../AboutUs/AboutUs";
import Catalog from "../Catalog/Catalog";
import ContactUs from "../ContactUs/ContactUs";
import Shop from "../Shop/Shop";
import Testimonial from "../Testimonial/Testimonial";

export default function Home(){
    return (
        <section class="shop_section layout_padding">
            <Shop/>
            <AboutUs/>
            <Catalog/>
            <Testimonial/>
            <ContactUs/>
        </section>
    )
}