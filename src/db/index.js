import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"


const dbConnection=async() =>{
    try {
        await mongoose.connect(`mongodb+srv://mithun:mithun123@cluster0.7f8s9so.mongodb.net/${DB_NAME}`) 
        
        console.log("mongo db connected")
    }
     catch (error) {
        console.log("monogodb connection error ",error)
        
    }

}
export{dbConnection}