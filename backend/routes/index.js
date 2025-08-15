//backend/routes/index.js
const express = require('express');
const router = express.Router();

const testController = require('../controllers/testController');
//const chatRoute = require('./chat'); // 👈 Important

router.get('/', testController.testMessage);
//router.use('/chat', chatRoute); // 👈 Important

module.exports = router;


