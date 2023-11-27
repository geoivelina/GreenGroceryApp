import { Link } from "react-router-dom";
import Path from "../../path";

export default function Header() {
    
    return (
        <div className="hero_area">
            <div className="contact_nav_container">
                <div className="container">
                    <div className="contact_nav">
                        <Link
                            className="fa fa-map-marker"
                            aria-hidden="true"
                            to={Path.Home}
                        >
                            <span> GreenGrocery </span>
                        </Link>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span> Address : Some Address </span>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span> Email: greengrocer@mail.com </span>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span> Phone Call : +123 123455678990 </span>
                    </div>
                </div>
            </div>
            <section className=" slider_section position-relative">
                <div
                    id="carouselExampleControls"
                    className="carousel slide "
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="img-box">
                                <img src="images/slider-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
