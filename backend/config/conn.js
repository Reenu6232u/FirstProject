import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL)
.then(()=>{
   console.log("Live DB Connected")
}).catch(err=>{
    console.log("Live DB not Connected",err)
})

export default mongoose;


// mongodb+srv://reenuchaurasiya03:<db_password>@rental-data.gwcvkfc.mongodb.net/?retryWrites=true&w=majority&appName=Rental-data


//reenuchaurasiya03   SftRsJ5OAnAwBTPe
//mongodb+srv://<db_username>:<db_password>@rental-data.gwcvkfc.mongodb.net/?retryWrites=true&w=majority&appName=Rental-data
//


// mongodb+srv://reenuchaurasiya03:<SftRsJ5OAnAwBTPe>@rental-data.gwcvkfc.mongodb.net