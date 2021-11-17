const express = require('express');
const router = express.Router();
// Load User Controller
const userController = require('../../controllers/user.controllers')
const { forwardAuthenticated } = require('../config/auth');
//Login
router.get('/login', forwardAuthenticated, userController.login);
router.post('/login', userController.Login_User);
// Register
router.get('/register', forwardAuthenticated, userController.register);
router.post('/register', userController.Register_User);
// Logout
router.get('/logout', userController.logout);

module.exports = router;