export const createUserqury = "INSERT INTO users (firstName,lastName,email,password) VALUES ($1, $2, $3, $4) RETURNING *";
export const getAllUsersQuery = "SELECT * FROM users";
export const getUserByIdQuery = "SELECT * FROM users  WHERE id = $1";