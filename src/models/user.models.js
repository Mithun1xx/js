import mongoose,{Schema} from "mongoose";

const userSchema=new Schema({
    userName:{
        type:String,
        requried:true,
        unique:true
    },
    email:{
        type:String,
        requried:true,
        unique:true
    },
    password:{
        type:String,
        requried:true,
       
    },
    fullName:{
        type:String,
        requried:true,
       
    },
    avatar:{
        type:String,
       
    },
    coverImage:{
        type:String
    },
    refreshToken:{
        type:String
    }
 

},{timestamps:true})


export const User=mongoose.model("User",userSchema)