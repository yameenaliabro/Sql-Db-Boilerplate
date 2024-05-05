import pool from "../db/index.js";
import { createUserqury, deleteUserQuery, getAllUsersQuery, getUserByIdQuery } from "../queries/user.js";

export const createUserModel = async (user) => {
    const { firstName, lastName, password, email } = user;
    try {
        const response = await pool.query(createUserqury, [
            firstName,
            lastName,
            password,
            email
        ])
        return response.rows[0];
    } catch (error) {
        throw error
    }
}

export const getUsersModel = async () => {
    try {
        const response = await pool.query(getAllUsersQuery)
        return response.rows;
    } catch (error) {
        throw error
    }
}

export const getUserByIdModel = async (id) => {
    try {
        const response = await pool.query(getUserByIdQuery, [id])
        return response.rows[0]
    } catch (error) {
        throw error
    }
}

export const deleteUserModel = async (id) => {
    try {
        const response = await pool.query(deleteUserQuery, [id])
        return response.rows[0]
    } catch (error) {
        throw error
    }
}