export const createUserqury = "INSERT INTO users (firstName,lastName,email,password) VALUES ($1, $2, $3, $4) RETURNING *";
export const getAllUsersQuery = "SELECT * FROM users";
export const getUserByIdQuery = "SELECT * FROM users  WHERE id = $1";
export const deleteUserQuery = "DELETE FROM users WHERE id = $1 RETURNING *"
export const createUpdateQuery = (setClause, index) => {
    return `UPDATE users SET ${setClause.join(', ')} WHERE id = $${index} RETURNING *`;
};


