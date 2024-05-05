import express from "express";
const userroutes = express.Router();

import {
    createUser,
    getUserById,
    getUsers
} from "../controllers/user.js";

userroutes.post("/create", createUser);
userroutes.get("/getall", getUsers)
userroutes.get("/get/:id", getUserById)

export default userroutes;
