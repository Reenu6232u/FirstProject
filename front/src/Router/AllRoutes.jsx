import React from "react";

import { Routes, Route } from "react-router-dom";

import {Home,
  OwnerLogin,
  OwnerSignUp,
  SeekerLogin,
  SeekerSignUp,
  DetailsPage, 
  SeekerLogout ,
  OwnerLogout} 
  from "../Pages";

import MyProfile from "../Pages/Seekers/MyProfile";
import SeekerProtactedRoute from "./SeekerProtactedRoute";
import OwnerProtactedRoute from "./OwnerProtactedRoute";
import MyAccount from "../Pages/Owner/MyAccount";
import AddNew from "../Pages/Owner/AddNew";


const AllRoutes = () => {
  return (

    <Routes>
      <Route path ="/" element = {<Home/>} />
      <Route path = "/DetailsPage" element = {<DetailsPage/>} />
      <Route path ="/Seeker/login" element = {<SeekerLogin/>} />
      <Route path = "/Seeker/Signup" element = {<SeekerSignUp/>} />

      <Route path = "" element = {<SeekerProtactedRoute />}>

      <Route path = "/seeker/my-profile" element = {<MyProfile/>} />
      <Route path  = "/seeker/logout" element = {<SeekerLogout />} />

      </Route>

      <Route path = "/owner/Login" element = {<OwnerLogin/>} />
      <Route path = "/Owner/SignUp" element = {<OwnerSignUp/>}/>
      <Route path  = "/owner/logout" element = {<OwnerLogout/>} />

      <Route path = "" element = {<OwnerProtactedRoute/>}>
      <Route path = "/owner/add-new-property" element = {<AddNew/>} />
      <Route path ="/owner/my-account" element = {<MyAccount/>}/>
      <Route path  = "/owner/logout" element = {<OwnerLogout/>} />


      </Route>
    
    </Routes>

  );
};

export default AllRoutes;
