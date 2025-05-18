import express from "express";
import OwnerRoute from "./OwnerRoute.js";
import SeekerRoute from "./SeekerRoute.js";
import SeekerAuthRoutes from "./SeekerAuthRoutes.js"
import OwnerAuthRoutes from  "./OwnerAuthRoutes.js"
import AdminAuthRoutes from "./AdminAuthRoutes.js"
import OwnerProfileRoute from "./OwnerProfileRoute.js"
import SeekerProfileRoute from "./SeekerProfileRoute.js"
import PropertyRoute from "./PropertyRoute.js"

let routes = express.Router();
    
routes.use("/api/v1/seeker",SeekerRoute)
routes.use("/api/v1/owner",OwnerRoute)
routes.use("/api/v1/seekerauth", SeekerAuthRoutes)
routes.use("/api/v1/ownerauth",OwnerAuthRoutes)
routes.use("/api/v1/adminauth", AdminAuthRoutes)
routes.use("/api/v1/ownerprofile", OwnerProfileRoute)
routes.use("/api/v1/seekerprofile", SeekerProfileRoute)
routes.use("/api/v1/property",PropertyRoute)

export default routes;