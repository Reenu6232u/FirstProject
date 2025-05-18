import express from "express"
import { SaveProperty } from "../controller/PropertyController.js";

let routes =  express.Router();

routes.post("/",SaveProperty)

export default routes;