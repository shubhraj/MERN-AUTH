import express from "express";
import { authUser } from "../controllers/userController.js";

const routers = express.Router();

routers.post('/auth', authUser);

export default routers;