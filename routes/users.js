const express = require('express');
const router = express.Router();
// Load User Controller
const userController = require(' ../../../controllers/user.controllers')
const { forwardAuthenticated } = require('../config/auth');;
           //Routes
// Login Page
router.get('/login', forwardAuthenticated, userController.login);
router.post('/login', userController.loginUser);
// Register Page
router.get('/register', forwardAuthenticated, userController.register);

router.post('/register', userController.Register_User);

router.post('/login', userController.loginUser);
// Logout
router.get('/logout', userController.logout);

module.exports = router;