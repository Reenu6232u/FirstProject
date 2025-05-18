import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import AdminSchema from "../Schema/AdminSchema";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  let [errMsg, setErrMsg] = useState("");
  let navigate = useNavigate();
  let loginFrm = useFormik({
    validationSchema: AdminSchema,
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (formData) => {
      console.log("form submitted", formData);
      axios
        .post("http://localhost:3000/api/v1/adminauth", formData)

        .then((response) => {
          console.log(response.data)
          if (response.data.success == true) {
            localStorage.setItem("access-token", response.data.token);
            localStorage.setItem("name", response.data.name);
            navigate("/dashboard");
          } else {
            if (response.data.errType == 1) {
              setErrMsg("This Username and Password is Incorrect");
            }
            if (response.data.errType == 2) {
              setErrMsg("This Password is Incorrect");
            }
          }
        });
    },
  });

  return (
    <div className="container">
      <form onSubmit={loginFrm.handleSubmit}>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-4 mt-5">
            <div className="card bg-light">
              <div className="card-header">
                <h4 className="text-dark text-center">Administrator Login</h4>
              </div>

              <div className="card-body">
                <div className="my-2">
                  <input
                    name="username"
                    onChange={loginFrm.handleChange}
                    type="text"
                    className={`form-control ${
                      loginFrm.errors.username && loginFrm.touched.username
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Username"
                  />
                  {loginFrm.errors.username && loginFrm.touched.username && (
                    <small className="text-danger">
                      {loginFrm.errors.username}
                    </small>
                  )}
                </div>
                <div className="my-2">
                  <input
                    name="password"
                    onChange={loginFrm.handleChange}
                    type="password"
                    className={`form-control ${
                      loginFrm.errors.password && loginFrm.touched.password
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Password"
                  />
                  {loginFrm.errors.password && loginFrm.touched.password && (
                    <small className="text-danger">
                      {loginFrm.errors.password}
                    </small>
                  )}
                </div>
                <p className="text-danger">{errMsg}</p>
              </div>

              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
