import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div className="hero_area">
        <div className="contact_nav_container">
        <div className="container">
          <div className="contact_nav">
              <a className="fa fa-map-marker" aria-hidden="true" href="/">
                <span> GreenGrocery </span></a>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span> Address : wisigaton lpusm loram </span>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>  Email : demo@gmail.com  </span>
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span> Phone Call : +01 123455678990  </span>
          </div>
        </div>
      </div>
        <section className=" slider_section position-relative">
          <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="img-box">
                  <img src="images/slider-img.jpg" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
    )
}