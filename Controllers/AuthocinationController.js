// import userAuth from "../Models/userAuth.js";
import generateToken from "../Config/Tokengenerater.js";
import client from "../Config/PGDatabaseConnect.js";

// const registercontroller = async (req, res) => {
//   const { firstName, LastName, Email, Role, password } = req.body;

//   const newUSer = new userAuth({
//     firstName,
//     LastName,
//     Email,
//     Role,
//     password,
//   });
//   await newUSer.save();

//   return res
//     .status(201)
//     .json({ Success: true, msg: "Successfully Registered" });
// };

// const LoginController = async (req, res) => {
//   const { Email, password } = req.body;

//   const older = await userAuth.findOne({ Email: Email });

//   const token = generateToken({
//     Email: older.Email,
//     firstName: older.firstName,
//     LastName: older.LastName,
//   });
//   return res
//     .status(200)
//     .json({ success: true, token, msg: "Successfully Login" });
// };

// const registercontroller = async (req, res) => {
//   const { firstName, LastName, Email, Role, password } = req.body;

//   client.query(
//     `Insert into unearth (firstName, LastName, Email, Role, password) values ('${firstName}', '${LastName}', '${Email}', '${Role}', '${password}')`,
//     (error, result) => {
//       if (error) {
//         return res
//           .status(400)
//           .json({ success: false, msg: `Error in Registration ${error}` });
//       }
//       return res
//         .status(201)
//         .json({ success: true, msg: "Successfully Registered" });
//     }
//   );
// };

// const LoginController = async (req, res) => {
//   const { Email, password } = req.body;

//   try {
//     const query = `SELECT * FROM unearth WHERE Email = '${Email}' AND password = '${password}'`;
//     const result = await client.query(query);

//     if (result.rowCount === 0) {
//       return res
//         .status(400)
//         .json({ success: false, msg: "Invalid Email or Password" });
//     }

//     const user = result.rows[0];

//     console.log(user);

//     const token = generateToken({
//       Email: user.email,
//       firstName: user.firstname,
//       LastName: user.lastname,
//     });

//     return res
//       .status(200)
//       .json({ success: true,token, msg: "Successfully Login" });

//   } catch (error) {
//     return res
//       .status(400)
//       .json({ success: false, msg: `Error in Login ${error}` });
//   }
// };

import users from "../db/models/user.js";

const registercontroller = async (req, res) => {
  const { firstName, lastName, email, role, password } = req.body;

  try {
    const newUser = await users.create({
      firstName,
      lastName,
      email,
      role,
      password,
    });

    return res.status(201).json({ success: true, users: newUser });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: `Error in Registration ${error}` });
  }
};

const LoginController = async (req, res) => {};

export { registercontroller, LoginController };
