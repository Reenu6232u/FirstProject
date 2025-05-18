import express from "express"

import {AdminAuth, getData} from "../controller/AdminAuthController.js";

let routes = express.Router();

routes.post("/", AdminAuth);
routes.get("/", getData)

export default routes;