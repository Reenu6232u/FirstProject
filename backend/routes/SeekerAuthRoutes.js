import express from "express";
import { SeekerAuth } from "../controller/SeekerAuthController.js";

let routes = express.Router();

routes.post("/", SeekerAuth);

export default routes;