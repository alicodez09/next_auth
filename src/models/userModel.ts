import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please Provide a Username"]
    },
    email:{
        type:String,
        required:[true,"Please Provide a Email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please Provide a Password"]
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
})

const User=mongoose.models.users || mongoose.model("user",userSchema);

export default User;