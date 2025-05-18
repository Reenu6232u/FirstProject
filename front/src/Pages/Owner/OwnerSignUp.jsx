import React from 'react';
import OwnerSignUpSchema from '../../Schema/OwnerSignUpSchema';
import { useFormik } from "formik";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Slider from '../../Component/Slider';

const OwnerSignUp = () => {
  const navigate = useNavigate();

  const signupFrm = useFormik({
    validationSchema: OwnerSignUpSchema,
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      repassword: "",
      address: "",
      contact: "",
    },
    onSubmit: (formData) => {
      axios.post(`${import.meta.env.VITE_API_URL}/owner`, formData)
        .then((response) => {
          toast("Registered Successfully", {
            onClose: () => {
              navigate("/owner/login");
            }
          });
        })
        .catch((error) => {
          toast.error("Registration failed");
          console.error("Signup error:", error);
        });
    },
  });

  return (
    <>
    <Slider />
    <div className="container" style={{ minHeight: "700px" }}>
       <ToastContainer />
      <form onSubmit={signupFrm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3 my-4">
            <div className="card">
              <div className="card-header bg-success">
                <h4 className="text-light text-center">Register</h4>
              </div>
              <div className="card-body">
                {/* Full Name */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="FullName">Full Name</label>
                  <input
                    type="text"
                    name="fullname"
                    className={`form-control ${signupFrm.errors.fullname && signupFrm.touched.fullname ? "is-invalid" : ""}`}
                    placeholder="Full Name"
                    onChange={signupFrm.handleChange}
              
                  />
                  {signupFrm.errors.fullname && signupFrm.touched.fullname && (
                    <small className="text-danger">{signupFrm.errors.fullname}</small>
                  )}
                </div>

                {/* Email Address */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${signupFrm.errors.email && signupFrm.touched.email ? "is-invalid" : ""}`}
                    placeholder="Enter your email"
                    onChange={signupFrm.handleChange} />
                    {signupFrm.errors.email && signupFrm.touched.email && (
                      <small className="text-danger">{signupFrm.errors.email}</small>
                    )}
                </div>

                {/* Password */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${signupFrm.errors.password && signupFrm.touched.password ? "is-invalid" : ""}`}
                    placeholder="Enter your password"
                    onChange={signupFrm.handleChange}
                  
                  />
                  {signupFrm.errors.password && signupFrm.touched.password && (
                      <small className="text-danger">{signupFrm.errors.password}</small>
                    )}
                </div>

                {/* Re-Password */}
                <div className="form-outline mb-4"> 
                  <label className="form-label" htmlFor="Repassword">Re-Password</label>
                  <input
                    type="password"
                    name="repassword"
                    
                    className={`form-control ${signupFrm.errors.repassword && signupFrm.touched.repassword ? "is-invalid" : ""}`}  
                    placeholder="Re-Password"
                    onChange={signupFrm.handleChange}
                  />
                   {signupFrm.errors.repassword && signupFrm.touched.repassword && (
                      <small className="text-danger">{signupFrm.errors.repassword}</small>
                    )}
                </div>

                {/* Contact Number */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="ContactNumber">Contact Number</label>
                  <input
                    type="tel"
                    name="contact"
                    className={`form-control ${signupFrm.errors.contact && signupFrm.touched.contact ? "is-invalid" : ""}`} 
                    placeholder="Contact Number"
                    onChange={signupFrm.handleChange}
                  />
                  {signupFrm.errors.contact && signupFrm.touched.contact && (
                    <small className='text-danger'>{signupFrm.errors.contact}</small>
                  )}
                </div>

                {/* Address */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="address">Address</label>
                  <textarea
                    name="address"
                    className={`form-control ${signupFrm.errors.address && signupFrm.touched.address ? "is-invalid" : ""}`} 
                    placeholder="Enter your Address"
                    rows="3"
                    onChange={signupFrm.handleChange}
                  >
                  </textarea>
                  {signupFrm.errors.address && signupFrm.touched.address && (
                    <small className='text-danger'>{signupFrm.errors.address}</small>
                  )}
                </div>


                <hr />
                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
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

export default OwnerSignUp;
