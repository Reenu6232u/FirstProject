import React from 'react'
import {Outlet,useNavigate} from "react-router-dom"
import { useEffect } from 'react'

const OwnerProtactedRoute = () => {
    let navigate = useNavigate();

    useEffect(()=>{
        if(! localStorage.getItem("owner-access-token")){

            navigate("/owner/login");

        }
    },[])
  return (
    <Outlet/>
  )
}

export default OwnerProtactedRoute