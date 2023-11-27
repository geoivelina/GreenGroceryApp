import TestimonialItem from "./TestimonialItem";

export default function Testimonial({ testimonials }) {
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
                        {/* <div className="carousel-item active">
                            <div className="client_container layout_padding-top">
                                <div className="img-box">
                                    <img src="images/client-img.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Jone Mark</h5>
                                    <p>
                                        <img
                                            src="images/left-quote.png"
                                            alt=""
                                        />
                                        <span>Lorem ipsum dolor sit amet,</span>
                                        <img
                                            src="images/right-quote.png"
                                            alt=""
                                        />{" "}
                                        <br />
                                        consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation
                                        ullamco laboris ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="client_container layout_padding-top">
                                <div className="img-box">
                                    <img src="images/client-img.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Jone Mark</h5>
                                    <p>
                                        <img
                                            src="images/left-quote.png"
                                            alt=""
                                        />
                                        <span>Lorem ipsum dolor sit amet,</span>
                                        <img
                                            src="images/right-quote.png"
                                            alt=""
                                        />{" "}
                                        <br />
                                        consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation
                                        ullamco laboris ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="client_container layout_padding-top">
                                <div className="img-box">
                                    <img src="images/client-img.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>Jone Mark</h5>
                                    <p>
                                        <img
                                            src="images/left-quote.png"
                                            alt=""
                                        />
                                        <span>Lorem ipsum dolor sit amet,</span>
                                        <img
                                            src="images/right-quote.png"
                                            alt=""
                                        />{" "}
                                        <br />
                                        consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation
                                        ullamco laboris ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <a
                        className="carousel-control-prev"
                        href="#carouselExample2Controls"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExample2Controls"
                        role="button"
                        data-slide="next"
                    >
                        <span className="sr-only">Next</span>
                    </a> */}
                </div>
            </div>
        </section>
    );
}
