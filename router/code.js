const express = require('express');
const router = express.Router();
const { runCode } = require('../controller/code.js')


router.route('/').post(runCode)

module.exports = router