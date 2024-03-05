const User = require('../models/user');


exports.Signup = async (req, res) => {
    const {name, email, mobile, password } = req.body;
    const newUser = new User({name, email, mobile, password})
    await newUser.save()
    res.json({user : newUser})
}

