import sha1 from "sha1"
import jwt from "jsonwebtoken"
import Admin from "../model/Admin.js"

let getData = async(req, res)=>{
    let result = await Admin.find({});
    res.send(result)
}

let AdminAuth = async(req, res)=>{
    console.log ("login request", req.body)
    let {username, password} = req.body;
    let result = await Admin.find({username:username});
    console.log(result)
    if(result.length==1)
    {
        if(result[0].password == sha1(password)){
            let obj = {id : result[0]._id};
            let token = jwt.sign(obj, process.env.ENC_KEY);
            res.send({success:true, token:token, name:result[0].name});
        }
        else{

            res.send({success:false, errType: 2});
        }
    }
    else{
        res.send({success:false, errType: 1});
    }
}


export {AdminAuth, getData};