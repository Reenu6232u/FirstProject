import express from "express"
import {OwnerAuth} from "../controller/OwnerAuthController.js";

let routes = express.Router();

routes.post("/", OwnerAuth)

export default routes;