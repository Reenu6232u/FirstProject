
import jwt from "jsonwebtoken";
import Owner from "../model/OwnerModel.js";

let OwnerProfile = async(req, res)=>{
if(req.headers.authorization){

    let token =  req.headers.authorization;
    let obj = jwt.decode(token,process.env.ENC_KEY);
    if(obj){
      let id = obj.id;
      let result = await Owner.find({_id :id});
      console.log("-----",result);
      res.send(result);
    }
    else{
        res.send({success: false})
    }


}else{
    res.send({success: false});
}
}
 export {OwnerProfile}