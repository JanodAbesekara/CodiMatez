import express from "express"
import {registercontroller,LoginController } from "../Controllers/AuthocinationController.js"

const router = express.Router();

router.post("/register", registercontroller);
router.get("/Login",LoginController);

export default router;