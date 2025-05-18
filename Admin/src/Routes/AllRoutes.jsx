import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/DashBoard";
import OwnerList from "../Pages/Owner/List";
import OwnerAdd from "../Pages/Owner/Add";
import SeekerAdd from "../Pages/Seeker/Add";
import SeekerList from "../Pages/Seeker/List";
import Login from "../Pages/Login";
import ProtactedRoutes from "./ProtactedRoutes";
import Logout from "../Pages/Logout";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path ="" element = {<Login/>} />

      <Route path ="" element = {<ProtactedRoutes/>}>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path ="/owner/List" element= {<OwnerList />} />
      <Route path = "/owner/Add" element ={<OwnerAdd/>} />
      <Route path = "/seeker/List" element ={<SeekerList/>} />
      <Route  path= "/seeker/Add" element = {<SeekerAdd/>} />
      <Route path = "/logout" element = {<Logout/>} />

      </Route>
    </Routes>
  );
};

export default AllRoutes;
