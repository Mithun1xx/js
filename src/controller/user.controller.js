import { User } from "../models/user.models.js"
import { apiError } from "../utils/apiError.js"
import { apiResponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const registerUser= asyncHandler(async (req,res) =>{
 

   


    const {userName,fullName,email,password}=req.body
   

    const user=await User.create(
        {
            fullName,
            password,
            userName:userName.toLowerCase(),
            email

        }
    )
    const createdUser=await User.findOne(user._id)

    if(!createdUser){
        throw new apiError(500,"user not created")
    }
    return res.status(200).json(
        new apiResponse("201","user register sucessfilly",createdUser)
    )


})
export{registerUser}