const express = require('express')
const router = express.Router();
const UserController = require('../controller/user.controller')

router.get('/', UserController.getAllStaff)

module.exports = router