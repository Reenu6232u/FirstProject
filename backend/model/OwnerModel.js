import mongoose from "../config/conn.js"

let OwnerSchema = mongoose.Schema(
    {
    fullname:String,
    email:String,
    contact:Number,
    password:String,
    address:String,
    
} , {timestamp:true})

let Owner = mongoose.model("owner",OwnerSchema);


export default Owner;