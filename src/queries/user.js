export const createUserqury = "INSERT INTO users (firstName,lastName,email,password) VALUES ($1, $2, $3, $4) RETURNING *";
export const getAllUsersQuery = "SELECT * FROM users";
export const getUserByIdQuery = "SELECT * FROM users  WHERE id = $1";
export const deleteUserQuery = "DELETE FROM users WHERE id = $1 RETURNING *"
export const updateQuery = "UPDATE users SET firstName = $1, lastName = $2, email = $3, password = $4 WHERE id = $5  RETURNING *"