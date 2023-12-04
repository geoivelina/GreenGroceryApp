import { useContext, useEffect, useState } from "react";
import {Link} from 'react-router-dom';

import TestimonialItem from "./TestimonialItem";

import * as testimonialService from "../../services/testimonialService";
import Path from "../../path";
import AuthContext from "../../contexts/AuthContext";

export default function Testimonial() {
    
const [testimonials, setTestimonials] = useState([]);
const {
    isAuthenticated, 
} = useContext(AuthContext);


useEffect(() => {
     testimonialService.getAllTestimonial().then(x => {
        setTestimonials(x);
    });
}, []);
    return (
        <section className="client_section layout_padding-bottom mt-5">
            <div className="container ">
                <div className="heading_container">
                    <hr />
                    <h2>What Ous Customers Think About Us</h2>
                    <hr />
                </div>
                <div
                    id="carouselExample2Controls"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        {testimonials.map((x) => (
                            <TestimonialItem key={x._id} {...x} />
                        ))}
                    </div>
                </div>
                <hr />
                <p className="text-center">
                    {isAuthenticated &&(
                    <span >
                        You want to share your oppinion about us? Click{" "}
                        <Link to={Path.AddTestimonial}>here</Link>
                    </span>
                    )}
                </p>
                <hr />
            </div>
        </section>
    );
}
