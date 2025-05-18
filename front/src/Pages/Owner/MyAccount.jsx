import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import OwnerSideBar from "../../Component/OwnerSideBar";

const MyAccount = () => {
  let [owner, setOwner] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/ownerprofile`, {
        headers: { Authorization: localStorage.getItem("owner-access-token") },
      })
      .then((response) => {
        setOwner(response.data[0]);
        console.log(response.data[0]);
      });
  }, []);

  return (
    <div
      className="container my-4"
      style={{ minHeight: "750px", paddingTop: "120px" }}
    >
      <div className="row">
       <OwnerSideBar />
        <div className="col-md-9">
          <h4>My Information</h4>
          <table className='table table-bordered table-hover table-success'>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>{owner.fullname}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{owner.email}</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>{owner.contact}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{owner.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
