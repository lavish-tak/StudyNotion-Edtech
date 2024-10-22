const jwt = require("jsonwebtoken")
require("dotenv").config();
const User = require("../models/User")

//auth
exports.auth = async (req,res,next)=>{
    try{
        const token=req.cookie.token || req.body.token || req.header("Authorisation").replace("Bearer");

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token missing",
            })
        }
        try{
            //verify the token
          const decode = jwt.verify(token,process.env.JWT_SECRET)
          console.log(decode)
          req.user = decode
        }catch(err){
          return res.status(401).json({
            success:false,
            message:"Token is invalid",
          })
        }
        next();

    }catch(err){
       return res.status(500).json({
        success:false,
        message:"Something went wrong while validating token"
       })
    }
}

//isStudent
exports.isStudent = async (req,res,next)=>{
    try{
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Students"
            })
        }
        next();
    }catch(err){
       return res.status(500).json({
            success:false,
            message:"User role cannot be verified, Try again"
       })
    }
}

//isInstructor
exports.isInstructor = async (req,res,next)=>{
    try{
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Instructor"
            })
        }
        next();
    }catch(err){
       return res.status(500).json({
            success:false,
            message:"User role cannot be verified, Try again"
       })
    }
}
//isAdmin
exports.isAdmin = async (req,res,next)=>{
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Admin"
            })
        }
        next();
    }catch(err){
       return res.status(500).json({
            success:false,
            message:"User role cannot be verified, Try again"
       })
    }
}
