import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema(
    {
        firstName:{
            type:String,
            required:true,
        },
        LastName:{
            type:String,
            required:true,
        },
        Email:{
            type:String,
            required:true,
            unique:true,
        },
        Role:{
            type:String,
            enum:["Admin","User","Consultant"],
            default:"User",
            required:true,
        },
        password:{
            type:String,
            required:true
        },
        verified:{
            type:Boolean,
            default:false
        },
        
    },{
        timestamps:true,
    }
);

export default mongoose.model("userAuth", userSchema);