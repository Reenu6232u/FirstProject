import React from 'react'
import {Outlet , useNavigate} from  "react-router-dom"
import SideBar from '../Components/SideBar'
import Header from "../Components/Header"
import { useEffect } from 'react'

const ProtactedRoutes = () => {
  let navigate  = useNavigate();

useEffect (()=>{

  if( ! localStorage.getItem("access-token")){
  navigate("/");
  }

},[])

  return (
    <div className='wrapper'>
    <SideBar/>
    <div className='main-panel'>
      <Header />
     <Outlet/>
     </div>
     </div>
   
    

  )
}

export default ProtactedRoutes