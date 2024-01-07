// Using the require for express module:
const express = require('express')
// Invoking the Router:
const router = express.Router()

// Importing the Routes:
const {login, register} = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);

module.exports = router;

