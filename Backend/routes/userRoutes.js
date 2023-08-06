import express from "express"
import { registerUser, login, logout, followUser, updatePassword, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// http://localhost:6000/ap1/v1/route

// example: http://localhost:6000/ap1/v1/login

router.post("/register", registerUser)
router.post("/login",login);
router.get("/logout", logout)
router.get("/follow/:id", isAuthenticated, followUser)
router.put("/update/password", isAuthenticated, updatePassword)
router.put("/update/profile",isAuthenticated,updateProfile)
router.delete("/delete/me", isAuthenticated, deleteMyProfile)
router.get("/me", isAuthenticated, myProfile)
router.get("/user/:id", isAuthenticated, getUserProfile)
router.get("/users",isAuthenticated,getAllUsers)

export default router