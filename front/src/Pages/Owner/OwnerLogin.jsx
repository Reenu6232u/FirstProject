import React, { useEffect } from "react";
import OwnerLoginSchema from "../../Schema/OwnerLoginSchema";
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

const OwnerLogin = () => {

  let navigate = useNavigate();
  let [errmsg, setErrMsg] = useState("");


  let loginFrm = useFormik({
    validationSchema: OwnerLoginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (formData) => {
      console.log(formData);
      // return;

      axios
        .post(`${import.meta.env.VITE_API_URL}/ownerauth`, formData)
        .then((response) => {
          console.log(response.data);
          if (response.data.success == true) {
            localStorage.setItem("owner-name", response.data.name);
            localStorage.setItem("owner-access-token", response.data.token);
             navigate("/owner/my-account");

          } else {
            if (response.data.errType == 1) {
              setErrMsg("This Username and password is incorrect!");
            }
            if (response.data.errType == 2) {
              setErrMsg("This password is incorrect!");
            }
          }
        });
    },
  });

  return (
    <>
    <Slider />
    <div className="container" style={{ minHeight: "700px" }}>
      <form onSubmit={loginFrm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3 my-4">
            <div className="card">
              <div className="card-header bg-success">
                <h4 className="text-light text-center">Sign in</h4>
              </div>
              <div className="card-body">
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">
                    Email/UserName
                  </label>
                  <input
                    name="email"
                    onChange={loginFrm.handleChange}
                    type="text"
                    className={`form-control ${
                      loginFrm.errors.email && loginFrm.touched.email
                        ? "is-invalid"
                        : ""
                    }`}
                    id="email"
                    placeholder="Email/UserName"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    name="password"
                    onChange={loginFrm.handleChange}
                    type="password"
                    className={`form-control ${
                      loginFrm.errors.password && loginFrm.touched.password
                        ? "is-invalid"
                        : ""
                    }`}
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>

                <p className="text-danger text-center">{errmsg}</p>
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

export default OwnerLogin;
