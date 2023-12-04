import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import * as testimonialService from '../../services/testimonialService';

const TestimonialFormKeys = {
    UserName:'userName',
    UserImage:'userImage',
    Text: "text",
};

export default function CreateTestimonial() {
    const testimonialSubmitHandler  = async( values)=>{
        const newTestimonial = await testimonialService.create(values);
    }

    const { values, onChange, onSubmit } = useForm(testimonialSubmitHandler, {
        [TestimonialFormKeys.UserName]: "",
        [TestimonialFormKeys.UserImage]: "",
        [TestimonialFormKeys.Text]: "",
    });



    return (
        <section className="form_section layout_padding-bottom mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-lg-2 col-md-12 offset-md-1">
                        <div className="heading_container">
                            <hr />
                            <h2>Share Your Oppinion About Us</h2>
                            <hr />
                        </div>
                        <h4>CHECK IF THIS USER IS ALSO A CUSTOMER</h4>
                    </div>
                </div>
                <div className="layout_padding2-top">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 col-md-5 offset-md-1">
                            <form method="POST" onSubmit={onSubmit}>
                                <div className="testimonial_form-container">
                                    <div>
                                        <div>
                                            <textarea>
                                                name={TestimonialFormKeys.Text}
                                                placeholder="Add you text here..."
                                                onChange={onChange}
                                                value={values[TestimonialFormKeys.Text ] }
                                           /</textarea>
                                        </div>
                                        <div>
                                            <button type="submit">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
