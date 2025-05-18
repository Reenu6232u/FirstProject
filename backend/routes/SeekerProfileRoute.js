import express from "express";
import{SeekerProfile} from "../controller/SeekerProfileController.js"
let routes =  express.Router();

routes.get("/",SeekerProfile)

 export default routes;