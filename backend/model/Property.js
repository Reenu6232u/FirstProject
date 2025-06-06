import mongoose from "../config/conn.js"

let PropSchema = mongoose.Schema({
    owner_id : {ref  : "owner", type : mongoose.Schema.Types.ObjectId},
    title: String,
    address:String,
    property_type :String,
    rent:Number,
    // image:String,
    deposite: {type : Number , default : 0},
    amenity:[]
}
, {timestamps :true})

let prop = mongoose.model("property",PropSchema)

export default prop
