import {Link} from 'react-router-dom';
import Path from '../../path';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';



export default function Navbar(){

    const {
        isAuthenticated, 
        fullName
    } = useContext(AuthContext);
    console.log(fullName);
    return(
        
        <section className="nav_section">
        <div className="container">
          <div className="custom_nav2">
            <nav className="navbar navbar-expand custom_nav-container ">
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex  flex-column flex-lg-row align-items-center">
                  <div className="navbar-nav ">
                      <Link className="nav-link" to={Path.Home}>Home <span className="sr-only">(current)</span></Link>
                      <Link className="nav-link" to={Path.AboutUs}>About </Link>
                      <Link className="nav-link" to={Path.Testimonial}>Testimonial</Link>
                      <Link className="nav-link" to={Path.ContactUs}>Contact Us</Link>
                      <Link className="nav-link" to={Path.Catalog}>Shop Now </Link>
                    {isAuthenticated && (
                      <div className="navbar-nav ">
                    <span className='nav-link'>| Welcome, {fullName} </span>
                    <Link className="nav-link" to={Path.Profile}> Profile  </Link>
                    <Link className="nav-link" to={Path.Logout}>Logout |</Link>
                    </div>
                    )}
                    {!isAuthenticated && ( 
                      <div className="navbar-nav ">
                      <Link className="nav-link" to={Path.Login}>Login</Link>
                      <Link className="nav-link" to={Path.Register}>Register</Link>
                      </div>
                    )}
                  </div>
                  {/* <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form> */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    )
}