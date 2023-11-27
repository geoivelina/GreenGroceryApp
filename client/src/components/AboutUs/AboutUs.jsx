import {Link} from "react-router-dom";
import Path from "../../path";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";


export default function AboutUs(){
  const {
    isAuthenticated, 
} = useContext(AuthContext);
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
                {isAuthenticated && (
                  <Link to={Path.Shop}>  Shop Now </Link>
                )}
                {!isAuthenticated &&(
                  <Link to={Path.Login}>  Shop Now </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    
    )
}