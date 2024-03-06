const express = require('express');
const { Signup, verifyEmail } = require('../controllers/user');
const { userValidator, validate } = require('../middlewares/validator');

const router = express.Router();

router.post('/user/Sign-up',userValidator,validate,Signup);
router.post('/user/verify-email',verifyEmail);


module.exports = router;

