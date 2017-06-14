const express = require('express')
const router = express.Router()

const passport = require('passport')
const registerUser = require('./handlers/registerUser')
const loginUser = require('./handlers/loginUser')

router.post('/register', registerUser)
router.post('/login', passport.authenticate('local', { session: false }), loginUser)

module.exports = router