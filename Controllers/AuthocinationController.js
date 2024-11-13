import userAuth from "../Models/userAuth.js"


const registercontroller = async ( req,res) => {
     
    const{firstName,LastName,Email,Role,password} = req.body;

    const newUSer = new userAuth({
        firstName,
        LastName,
        Email,
        Role,
        password,
    });
    await newUSer.save();

    return res
    .status(201)
    .json({Success:true, msg:"Successfully Registered"});
};

export default registercontroller;