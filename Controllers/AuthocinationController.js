import userAuth from "../Models/userAuth.js";
import generateToken from "../Config/Tokengenerater.js";

const registercontroller = async (req, res) => {
  const { firstName, LastName, Email, Role, password } = req.body;

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
    .json({ Success: true, msg: "Successfully Registered" });
};

const LoginController = async (req, res) => {
  const { Email, password } = req.body;

  const older = await userAuth.findOne({ Email: Email });

  const token = generateToken({
    Email: older.Email,
    firstName: older.firstName,
    LastName: older.LastName,
  });
  return res
    .status(200)
    .json({ success: true, token, msg: "Successfully Login" });
};

export { registercontroller, LoginController };
