import { useEffect, useState } from "react";
import TestimonialItem from "./TestimonialItem";

import * as testimonialService from "../../services/testimonialService";

export default function Testimonial() {
    
const [testimonials, setTestimonials] = useState([]);

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
                    <h2>What Customers Says About Us</h2>
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
            </div>
        </section>
    );
}
