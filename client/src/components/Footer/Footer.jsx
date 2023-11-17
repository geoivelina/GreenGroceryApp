import {Link} from 'react-router-dom';
export default function Footer(){
    return(
        <section className="container-fluid footer_section ">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved. Design by
          <Link to="https://html.design/">Free Html Templates</Link>
        </p>
      </section>
    )
}