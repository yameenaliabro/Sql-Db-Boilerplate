import express from "express";
import dotenv from "dotenv";
import userroutes from "./routes/user.js";
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use("/user", userroutes);

app.listen(PORT, () => {
    console.log(`Server Started ${PORT}`);
});
