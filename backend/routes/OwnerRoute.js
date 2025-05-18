import express from "express";
import {SaveOwner ,DeleteOwner , UpdateOwner, FetchOwner,FetchOwnerByID} from "../controller/OwnerController.js";

const routes = express.Router();

routes.get("/",FetchOwner)
routes.get("/:id",FetchOwnerByID);
routes.post("/",SaveOwner);
routes.put("/:id",UpdateOwner);
routes.delete("/:id",DeleteOwner);



export default routes;

