import { useContext } from "react";
import { Link } from "react-router-dom";

import useForm from "../../hooks/useForm";
import Path from "../../path";
import AuthContext from "../../contexts/AuthContext";


const LoginFormKeys = {
    Email: "email",
    Password: "password",
};

export default function Login() {
    const {loginSubmitHandler} = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: "",
        [LoginFormKeys.Password]: "",
    });

    return (
        <section className="form_section layout_padding-bottom mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-lg-2 col-md-12 offset-md-1">
                        <div className="heading_container">
                            <hr />
                            <h2>Login in Your Account</h2>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="form_padding2-top">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 col-md-5 offset-md-1">
                            <form method="POST" onSubmit={onSubmit}>
                                <div className="login_form-container">
                                    <div>
                                        <div>
                                            <input
                                                type="email"
                                                id="email"
                                                name={LoginFormKeys.Email}
                                                placeholder="Email"
                                                onChange={onChange}
                                                value={values[LoginFormKeys.Email] }
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="password"
                                                id="password"
                                                name={LoginFormKeys.Password}
                                                placeholder="Password"
                                                onChange={onChange}
                                                value={values[ LoginFormKeys.Password ]}
                                            />
                                        </div>
                                        <div>
                                            <button type="submit">Send </button>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <span>
                                        You don`t have account yet? Click{" "}
                                        <Link to={Path.Register}>here</Link>
                                    </span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
