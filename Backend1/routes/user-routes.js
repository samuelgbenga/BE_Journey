import express from "express";
import { getAllUser, signup } from "../controllers/user-controllers";

const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);

export default router;