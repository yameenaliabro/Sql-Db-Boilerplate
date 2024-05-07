import pool from "../db/index.js";
import { createUpdateQuery, createUserqury, deleteUserQuery, getAllUsersQuery, getUserByIdQuery } from "../queries/user.js";

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


export const updateUserModel = async (id, updates) => {
    const { firstName, lastName, password, email } = updates;
    const setClause = [];
    const values = [];
    let index = 1;

    // Construct the SET clause dynamically based on provided updates
    if (firstName) {
        setClause.push(`firstName = $${index++}`);
        values.push(firstName);
    }
    if (lastName) {
        setClause.push(`lastName = $${index++}`);
        values.push(lastName);
    }
    if (email) {
        setClause.push(`email = $${index++}`);
        values.push(email);
    }
    if (password) {
        setClause.push(`password = $${index++}`);
        values.push(password);
    }
    // Add the ID to the values array
    values.push(id);
    try {
        const updateQuery = createUpdateQuery(setClause,index); 
        const response = await pool.query(updateQuery, values);
        return response.rows[0];
    } catch (error) {
        throw error;
    }
};


