import React from "react";
import SeekerSignUpSchema from "../../Schema/SeekerSignUpSchema";
import { useFormik } from "formik";
import{useNavigate} from "react-router-dom"
import axios from "axios";
import {ToastContainer,toast} from "react-toastify"
import Slider from "../../Component/Slider";

const SeekerSignUp = () => {
  let navigate = useNavigate();
  let SeekerSignUp = useFormik({
    validationSchema: SeekerSignUpSchema,
    initialValues: {
      fullname: "",
      email: "",
      password: "", 
      repassword: "",
      address: "",
      contact: "",
      gender: "",
    },
    onSubmit: (formData) => {
      axios.post(`${import.meta.env.VITE_API_URL}/seeker`, formData)
        .then((response) => {
          toast("Registered Successfully", {
            onClose: () => {
              navigate("/seeker/login");
            }
          });
        })
        .catch((error) => {
          toast.error("Registration failed");
          console.error("Signup error:", error);
        });
    }
    
  });

  

  return (
    <>
    <Slider />
    <div className="container" style={{ minHeight: "700px" }}>
      <ToastContainer />
      <form onSubmit={SeekerSignUp.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3 my-4">
            <div className="card">
              <div className="card-header bg-success">
                <h4 className="text-light text-center">Register</h4>
              </div>
              <div className="card-body">
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="fullname">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    className={`form-control ${
                      SeekerSignUp.errors.fullname &&
                      SeekerSignUp.touched.fullname
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Full Name"
                    onChange={SeekerSignUp.handleChange}
                  />
                  {SeekerSignUp.errors.fullname &&
                    SeekerSignUp.touched.fullname && (
                      <small className="text-danger">
                        {SeekerSignUp.errors.fullname}
                      </small>
                    )}
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      SeekerSignUp.errors.email && SeekerSignUp.touched.email
                        ? "is-invalid"
                        : ""
                    }`}
                    id="email"
                    placeholder="Enter your email"
                    onChange={SeekerSignUp.handleChange}
                  />

                  {SeekerSignUp.errors.email && SeekerSignUp.touched.email && (
                    <small className="text-danger">
                      {SeekerSignUp.errors.email}
                    </small>
                  )}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${
                      SeekerSignUp.errors.password &&
                      SeekerSignUp.touched.password
                        ? "is-invalid"
                        : ""
                    }`}
                    id="password"
                    placeholder="Enter your password"
                    onChange={SeekerSignUp.handleChange}
                  />
                  {SeekerSignUp.errors.password &&
                    SeekerSignUp.touched.password && (
                      <small className="text-danger">
                        {SeekerSignUp.errors.password}
                      </small>
                    )}
                </div>
                {/* Re-Password */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="repassword">
                    Re-Password
                  </label>
                  <input
                    type="password"
                    name="repassword"
                    className={`form-control ${
                      SeekerSignUp.errors.repassword &&
                      SeekerSignUp.touched.repassword
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Re-Password"
                    onChange={SeekerSignUp.handleChange}
                  />
                  {SeekerSignUp.errors.repassword &&
                    SeekerSignUp.touched.repassword && (
                      <small className="text-danger">
                        {SeekerSignUp.errors.repassword}
                      </small>
                    )}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="Contact">
                    Contact Number
                  </label>
                  <input
                    type="contact number"
                    name="contact"
                    className={`form-control ${
                      SeekerSignUp.errors.contact &&
                      SeekerSignUp.touched.contact
                        ? "is-invalid"
                        : ""
                    }`}
                    id="contactNumber"
                    placeholder="Contact Number"
                    onChange={SeekerSignUp.handleChange}
                  />

                  {SeekerSignUp.errors.contact &&
                    SeekerSignUp.touched.contact && (
                      <small className="text-danger">
                        {" "}
                        {SeekerSignUp.errors.contact}
                      </small>
                    )}
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">
                    Address
                  </label>
                  <input
                    type="textarea"
                    name="address"
                    className={`form-control ${
                      SeekerSignUp.errors.address &&
                      SeekerSignUp.touched.address
                        ? "is-invalid"
                        : ""
                    }`}
                    id="Address"
                    placeholder="Enter your Address"
                    onChange={SeekerSignUp.handleChange}
                  />
                  {SeekerSignUp.errors.address &&
                    SeekerSignUp.touched.address && (
                      <small className="text-danger">
                        {SeekerSignUp.errors.address}
                      </small>
                    )}
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="gender">
                    Gender
                  </label>

                  <select
                    className={`form-control ${
                      SeekerSignUp.errors.gender && SeekerSignUp.touched.gender
                        ? "is-invalid"
                        : ""
                    }`}
                    id="gender"
                    name="gender"
                    onChange={SeekerSignUp.handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                  {SeekerSignUp.errors.gender &&
                    SeekerSignUp.touched.gender && (
                      <small className="text-danger">
                        {SeekerSignUp.errors.gender}
                      </small>
                    )}
                </div>
                <hr />
                <p>
                  By creating an account you agree to our{" "}
                  <a href="#">Terms & Privacy</a>.
                </p>
                <button type="submit" className="btn btn-success w-100">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default SeekerSignUp;
