import express from "express";
import {SaveSeeker ,DeleteSeeker , UpdateSeeker, FetchSeeker,FetchSeekerByID} from "../controller/SeekerController.js";

const routes = express.Router();

routes.get("/",FetchSeeker)
routes.get("/",FetchSeekerByID);
routes.post("/",SaveSeeker);
routes.put("/",UpdateSeeker);
routes.delete("/",DeleteSeeker);



export default routes;