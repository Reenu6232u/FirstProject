import sha1 from 'sha1'
import Seeker from "../model/SeekerModel.js"
import jwt from "jsonwebtoken"


let SeekerAuth = async(req, res)=>{
    console.log(req.body);
    let {email, password} = req.body;

    let result = await Seeker.find({email:email});
    // console.log(result);
    if(result.length==1) // that means email id is correct
    {
        if(result[0].password == sha1(password))
        {
            let obj = {id : result[0]._id, email : result[0].email};
            // let a = sha1("reenu")
            let token = jwt.sign(obj,process.env.ENC_KEY);
            res.send({success:true, token : token, name : result[0].fullname});
        }
        else{
            res.send({success:false, errType : 2})
        }
    }
    else{  // that means email id is NOT correct
        res.send({success:false, errType : 1})
    }

}

export {SeekerAuth}