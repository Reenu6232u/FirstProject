import Owner from "../model/OwnerModel.js";
import sha1 from "sha1";

let FetchOwner = async(req, res) =>{
let result= await Owner.find();
res.send(result);
}

let FetchOwnerByID = async(req, res) =>{
let result = await Owner.find({_id: req.params.id});
res.send(result);
}

let UpdateOwner = async(req, res) =>{
let result = await Owner.updateMany({_id:req.params.id},req.body);
res.send({success:true,result});
}

let SaveOwner = async(req, res) =>{
delete req.body.Repassword;
req.body.password = sha1 (req.body.password)

let result = await Owner.create(req.body);
res.send({success:true, result});
}

let DeleteOwner = async(req, res) =>{

    let result = await Owner.deletMany({_id: req.params.id});
    res.send(result);

}

export {SaveOwner ,DeleteOwner , UpdateOwner, FetchOwner,FetchOwnerByID}