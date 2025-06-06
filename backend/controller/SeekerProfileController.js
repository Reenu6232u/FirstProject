import Seeker from "../model/SeekerModel.js";
import jwt from "jsonwebtoken";
 
let SeekerProfile = async (req, res)=>{
    if(req.headers.authorization){
        let token =  req.headers.authorization;
        let obj= jwt.decode(token,process.env.ENC_KEY);
        // console.log(obj);

        if(obj){
            let result = await Seeker.find({_id: obj.id});
            res.send(result);

        }else{
            res.send({success: false});

        }

}else{
    res.send({success: false});
}
 } 
 

 export {SeekerProfile};