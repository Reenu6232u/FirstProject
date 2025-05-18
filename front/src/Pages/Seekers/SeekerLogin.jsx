import React, { useEffect } from "react";
import SeekerLoginSchema from "../../Schema/SeekerLoginSchema";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Slider from "../../Component/Slider";

const login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

const SeekerLogin = () => {
  
  let navigate = useNavigate();

  let [errMsg, setErrMsg] = useState("");

  let signFrm = useFormik({
    validationSchema: SeekerLoginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (formData) => {
      // console.log(import.meta.env.VITE_API_URL);
      axios
        .post(`${import.meta.env.VITE_API_URL}/seekerauth`, formData)
        .then((response) => {
          console.log(response.data);

          if (response.data.success == true) {
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("access-token", response.data.token);
            navigate("/seeker/my-profile");
          } else {
            if (response.data.errType == 1) {
              setErrMsg("This Email ID and Password is Incorrect !");
            }
            if (response.data.errType == 2) {
              setErrMsg("This Password is Incorrect !");
            }
          }
        });
    },
  });

  return (
    <>
    <Slider />
   
    <div className="container" style={{ minHeight: "700px" }}>
      <form onSubmit={signFrm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3 my-4">
            <div className="card">
              <div className="card-header bg-success">
                <h4 className="text-light text-center">Sign in</h4>
              </div>
              <div className="card-body">
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      signFrm.errors.email && signFrm.touched.email
                        ? "is-invalid"
                        : ""
                    }`}
                    id="email"
                    placeholder="Enter your email"
                    onChange={signFrm.handleChange}
                  />
                  {signFrm.errors.email && signFrm.touched.email && (
                    <small className="text-danger">
                      {signFrm.errors.email}
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
                      signFrm.errors.password && signFrm.touched.password
                        ? "is-invalid"
                        : ""
                    }`}
                    id="password"
                    placeholder="Enter your password"
                    onChange={signFrm.handleChange}
                  />
                  {signFrm.errors.password && signFrm.touched.password && (
                    <small className="text-danger">
                      {signFrm.errors.password}
                    </small>
                  )}
                </div>

                <p className="text-danger text-center">{errMsg}</p>

                <div className="text-center">
                  <button type="submit" className="btn btn-success w-100">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default SeekerLogin;
