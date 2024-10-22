const User = require("../models/User")
const mailSender = require("../utils/mailSender")
const bcrypt = require("bcrypt")
const crypto = require("crypto")

//resetPasswordToken

exports.resetPasswordToken = async(req,res)=>{
    try{
        //get email from request body
        const email = req.body.email;
        //check User for this email
        const user = await User.findOne({email: email})

        if(!user){
            return res.json({
                success:false,
                message:"Your email is not registered with us"
            })
        }
        //generate token
        const token = crypto.randomUUID();
        //update user by adding expiry date
        const updateDetails = await User.findOneAndUpdate(
            {email: email},
            {
                token:token,
                resetPasswordExpires: Date.now() + 5*60*1000,
            },
            {new: true}
        )
        //create Url

        const url = `https://localhost:3000/update-password/${token}`
        //send mail containing the url
        await mailSender(email,"Password Reset link",`Password reset link: ${url}`)
        //send response
        return res.status(200).json({
            success:true,
            message:"Email sent successfully, Please check your email and change password"
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
             success:false,
             message:"Something went wrong while sending the email"
        })
    }
}
//reset password 
exports.resetPassword = async (req,res)=>{
    try{
      //data fetch
      const {password,confirmPassword,token} = req.body;

      //validation
      if(password !== confirmPassword){
        return res.json({
            success:false,
            message:"Password doesn't match, Retry."
        })
      }

      //get user details from db using token
      const userDetails = await User.findOne({token:token})
       //if no-entry, Invalid token
       if(!userDetails){
        return res.json({
            success:false,
            message:"Token is invalid"
        })
       }
       //token time change
       if(userDetails.resetPasswordExpires<Date.now()){
        return res.json({
            success:false,
            message:"Token is expired,Please regenerate your token",
        });
       }
       //hash pwd
       const hashedPassword = await bcrypt.hash(password,10)

       //password update
       await User.findOneAndUpdate(
        {token:token},
        {password:hashedPassword},
        {new:true},
       )
       //return response
       return res.status(200).json({
        success:true,
        message:"Password Updated successfully"
       })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Something went wrong while sending the reset password email"
        })
    }
}