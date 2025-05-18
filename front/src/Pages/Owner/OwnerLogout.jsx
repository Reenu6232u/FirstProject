import React from 'react'
import { Navigate } from 'react-router-dom'

const OwnerLogout = () => {
    localStorage.removeItem("owner-access-token")
    localStorage.removeItem("owner-name")
  return (
    <Navigate to ="/owner/login" />
  )
}

export default OwnerLogout