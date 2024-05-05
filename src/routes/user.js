import express from "express";
const userroutes = express.Router();

import {
    createUser
} from "../controllers/user.js";

userroutes.post("/create", createUser);

export default userroutes;
