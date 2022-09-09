import express from "express";
import authController from "../controller/authController.js";
import middlewareController from "../middleware/middleware.js";

const router = express.Router();

// Register
router.post("/register", authController.registerUser);


// Login
router.post("/login", authController.loginUser);


// refresh token 
router.post("/refresh", authController.requestRefreshToken);

// logged out
router.post("/logout" ,authController.userLogout);
export default router;
