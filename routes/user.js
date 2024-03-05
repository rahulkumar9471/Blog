const express = require('express');
const { Signup } = require('../controllers/user');

const router = express.Router();

router.post('/user/Sign-up',Signup);


module.exports = router;

