import mongoose from "../config/conn.js";

let AdminSchema = mongoose.Schema({
    name:String,
    username:String,
    password:String,
})

let admin = mongoose.model("admin",AdminSchema)

export default admin;