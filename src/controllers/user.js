import { createUserModel, deleteUserModel, getUserByIdModel, getUsersModel } from "../models/user.js"

export const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const response = await createUserModel(req.body)
        res.send({ message: "User Created Sucessfully", data: response })
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