const express = require("express");

const usersController = require("../controllers/usersCtrl");

const userRouter = express.Router();

userRouter.post("/api/v1/register", usersController.register);
// userRouter.post("/api/v1/login", usersController.login);

module.exports = userRouter;
