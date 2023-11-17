import {Link} from "react-router-dom";
export default function AboutUs(){
    return(
        <section className="about_section ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="img-box">
                <img src="images/about-img.jpg" alt=""/>
              </div>
            </div>
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <hr/>
                  <h2> About Our Fruit Shop </h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                </p>
                <Link to="/shop">  Shop Now </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    )
}