import express from "express"
import registercontroller from "../Controllers/AuthocinationController.js"

const router = express.Router();

router.post("/register", registercontroller);

export default router;