import express from "express";
import dotenv from "dotenv";
import userroutes from "./routes/user.js";
import bodyParser from "body-parser";
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userroutes);

app.listen(PORT, () => {
    console.log(`Server Started ${PORT}`);
});
