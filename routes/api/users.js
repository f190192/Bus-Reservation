const express = require('express');
const router = express.Router();
// Load User Controller
const userController = require('../../controllers/user.controllers')
// Register
const { forwardAuthenticated } = require('../../config/auth');

//Register Routes
// Login Page
router.get('/login', forwardAuthenticated, userController.login);
// Register Page
router.get('/register', forwardAuthenticated, userController.register);

router.post('/register', userController.Register_User);


module.exports = router;