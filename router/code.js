const express = require('express');
const router = express.Router();
const { runCode } = require('../controller/code.js')


router.route('/').get(runCode)

module.exports = router