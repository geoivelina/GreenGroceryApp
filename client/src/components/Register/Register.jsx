import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Path from "../../path";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";


const RegisterFormKeys = {
  Email: "email",
  FullName:'fullName',
  Address:'address',
  PhoneNumber:"phoneNumber",
  UserPhoto:'userPhoto',
  Password: "password",
  ConfirmPassword: 'confirmPassword'
};

export default function Register() {
    const {registerSubmitHandler} = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
      [RegisterFormKeys.Email]:"",
      [RegisterFormKeys.FullName]:"",
      [RegisterFormKeys.Address]:"",
      [RegisterFormKeys.PhoneNumber]:"",
      [RegisterFormKeys.UserPhoto]:"",
      [RegisterFormKeys.Password]:'',
      [RegisterFormKeys.ConfirmPassword]:'',
    });
    

    return (
        <section className="form_section layout_padding-bottom mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-lg-2 col-md-12 offset-md-1">
                        <div className="heading_container">
                            <hr />
                            <h2>Join Us Now</h2>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="layout_padding2-top">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 col-md-5 offset-md-1">
                            <form method="POST" onSubmit={onSubmit}>
                                <div className="register_form-container">
                                    <div>
                                        <div>
                                            <input
                                                type="email"
                                                id="email"
                                                name={RegisterFormKeys.Email}
                                                placeholder="email@mail.com"
                                                onChange={onChange}
                                                value={values[RegisterFormKeys.Email]}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name={RegisterFormKeys.FullName}
                                                placeholder="Full Name"
                                                onChange={onChange}
                                                value={values[RegisterFormKeys.FullName]}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                id="address"
                                                name={RegisterFormKeys.Address}
                                                placeholder="City, Street, Street number"
                                                onChange={onChange}
                                                value={values[RegisterFormKeys.Address]}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                id="phoneNumber"
                                                name={RegisterFormKeys.PhoneNumber}
                                                placeholder="+123 123 456 789"
                                                onChange={onChange}
                                                value={values[RegisterFormKeys.PhoneNumber]}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                id="userPhoto"
                                                name={RegisterFormKeys.UserPhoto}
                                                placeholder="Image URL"
                                                onChange={onChange}
                                                value={values[RegisterFormKeys.UserPhoto]}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="password"
                                                id="password"
                                                name={RegisterFormKeys.Password}
                                                placeholder="Password"
                                                onChange={onChange}
                                                value= {values[RegisterFormKeys.Password]}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                name={RegisterFormKeys.ConfirmPassword}
                                                placeholder="Repeat Password"
                                                onChange={onChange}
                                                value={values[RegisterFormKeys.ConfirmPassword]}
                                            />
                                        </div>
                                        <div>
                                            <button type="submit">Register</button>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    <span>
                                        You have account already? Click{" "}
                                        <Link to={Path.Login}>here</Link>
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
