import express from "express"
import allRoutes from "./routes/allRoutes.js";
// import cors from "cors"
import cors from "cors"

const app = express();

app.use(express.json())


app.use(cors());

app.use(express.urlencoded({extended :true}));

app.use(allRoutes);


const port = process.env.PORT;

app.listen(port, ()=>{
    console.log("Server running on port ", port);
})

