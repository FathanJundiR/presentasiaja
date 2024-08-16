const express = require("express");
const router = express.Router();

const errorHandler = require("../middlewares/errorHandler");
const AuthController = require("../controllers/authController");

router.post("/login", AuthController.login);
router.post("/register", AuthController.addUser);
router.use(errorHandler);

module.exports = router;
