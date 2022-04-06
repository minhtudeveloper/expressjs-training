import express from "express";
const router = express.Router();

import usersRouter from "./users.router";

router.use("/user", usersRouter);

export default router;
