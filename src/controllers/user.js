import { createUserModel, deleteUserModel, getUserByIdModel, getUsersModel, loginUserModel, updateUserModel } from "../models/user.js"
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"

dotenv.config();

export const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const response = await createUserModel(req.body)
        res.send({ message: "User Created Sucessfully", data: response })
    } catch (error) {
        res.send({ message: "Server Error", error: error.message })
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log("🚀 ~ loginUser ~ password:", password)
    console.log("🚀 ~ loginUser ~ email:", email)
    try {
        const response = await loginUserModel(email);
        console.log("🚀 ~ loginUser ~ response:", response)
        if (response.length > 0) {
            const passwordCheck = await bcrypt.compare(password, response[0].password)
            if (passwordCheck) {
                const token = jwt.sign({ id: response[0].id, email: response[0].email }, process.env.JWT_SECRET_KEY)
                res.send({ message: "Login Sucessfully", data: response, token: token })
            } else {
                res.send({ message: "Password is incorrect" })
            }
        } else {
            res.send({ message: "Email is incorrect" })
        }
    } catch (error) {
        res.send({ message: "Server Error", error: error.message })
    }
}

export const getUsers = async (req, res) => {
    try {
        const response = await getUsersModel();
        res.send({ message: "get Users Sucessfully", data: response })
    } catch (error) {
        res.send({ message: "Server Error", error: error.message })
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const response = await getUserByIdModel(id)
        res.send({ message: "get User by Id Sucessfully", data: response })
    } catch (error) {
        res.send({ message: "Server Error", error: error.message })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const response = await deleteUserModel(id);
        res.send({ message: "Delete user by Id Sucessfully", data: response })
    } catch (error) {
        res.send({ message: "Server Error", error: error.message })
    }
}


export const updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const response = await updateUserModel(id, updates)
        res.send({ message: "user updates sucessfully", data: response })
    } catch (error) {
        res.send({ message: "Server Error", error: error.message })
    }
}