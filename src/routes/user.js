import express from "express";
const userroutes = express.Router();

import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    loginUser,
    updateUser
} from "../controllers/user.js";
import { verifyToken } from "../middleware/jwtToken.js";

userroutes.post("/register", createUser);
userroutes.post("/login", loginUser);
userroutes.get("/getall", verifyToken, getUsers)
userroutes.get("/get/:id", verifyToken, getUserById)
userroutes.delete("/delete/:id", deleteUser)
userroutes.patch("/update/:id", updateUser)

export default userroutes;
