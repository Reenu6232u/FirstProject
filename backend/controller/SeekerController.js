import Seeker from "../model/SeekerModel.js";
import sha1 from "sha1"

let FetchSeeker = async(req, res) =>{
let result= await Seeker.find();
res.send(result);
}

let FetchSeekerByID = async(req, res) =>{
let result = await Seeker.find({_id: req.params.id});
res.send(result);
}

let UpdateSeeker = async(req, res) =>{
let result = await Seeker.updateMany({_id:req.params.id},req.body);
res.send({success:true,result});
}

let SaveSeeker = async(req, res) =>{
    // console.log(req.body)
    // return;
delete req.body.repassword;
req.body.password = sha1 (req.body.password)

let result = await Seeker.create(req.body);
res.send({success:true, result});
}

let DeleteSeeker = async(req, res) =>{

    let result = await Seeker.deletMany({_id: req.params.id});
    res.send(result);

}

export {SaveSeeker ,DeleteSeeker , UpdateSeeker, FetchSeeker,FetchSeekerByID}