import { createUserModel } from "../models/user.js"

export const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    try {
        const response = await createUserModel(req.body)
        res.send({ message: "User Created Sucessfully", data: response })
    } catch (error) {
        res.send({ message: "Server Error", error: error.message })
    }
}