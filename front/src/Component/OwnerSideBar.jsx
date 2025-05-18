import React from "react";
import { NavLink } from "react-router-dom";

const OwnerSideBar = () => {
  return (
    <div className="col-md-3">
      <div className="alert alert-success">
        <p>Hello</p>
        <h5>{localStorage.getItem("owner-name")}</h5>
      </div>
      <div className="alert alert-success">
        <h5>
          <i class="fa fa-building" style={{ marginRight: "5px" }}></i>MY
          PROPERTIES
        </h5>

        <hr></hr>
        <ul className="nav flex-column">
          <li className="nav-item ">
            <NavLink to="/owner/add-new-property" className="nav-link">
              Add New
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/owner/history" className="nav-link">
              History
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/owner/current-properties" className="nav-link">
              Current Properties
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/owner/rented" className="nav-link">
              Rented
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/owner/avaiable-for-rent" className="nav-link">
              Avaiable for Rent
            </NavLink>
          </li>
          <hr />
          <li className="nav-item">
            <NavLink to="" className="nav-link">
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OwnerSideBar;
