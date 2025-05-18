import mongoose from "../config/conn.js"

let SeekerSchema = mongoose.Schema(
    {
    fullname : String,
    email : String,
    contact : Number,
    password : String,
    address : String,
    gender : String,
    
} , {timestamp:true})

let Seeker = mongoose.model("seeker",SeekerSchema);

export default Seeker;