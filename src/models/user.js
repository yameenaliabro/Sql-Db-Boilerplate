import pool from "../db/index.js";
import { createUserqury } from "../queries/user.js";

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