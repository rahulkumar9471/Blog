const nodemailer = require("nodemailer");
const User = require("../models/user");
const EmailVarificationToken = require("../models/emailVarificationToken");
const { isValidObjectId } = require("mongoose");

exports.Signup = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const olduser = await User.findOne({
      $or: [{ email: email }, { mobile: mobile }],
    });

    if (olduser) {
      return res
        .status(401)
        .json({ error: "Email or Phone number already exists !" });
    }
    const newUser = new User({ name, email, mobile, password });
    const response = await newUser.save();

    //generate 6 digits otp

    let otp = "";
    for (let i = 0; i <= 5; i++) {
      const randomval = Math.round(Math.random() * 9);
      otp += randomval;
    }

    // store otp inside our db

    const newEmailVarificationToken = new EmailVarificationToken({
      owner: newUser._id,
      token: otp,
    });

    await newEmailVarificationToken.save();

    // send that otp to our user

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "84f5c719daa30c",
        pass: "608dd6a2ae96f3",
      },
    });

    transport.sendMail({
      from: "webkledges.com",
      to: newUser.email,
      subject: "Email Verification",
      html: `
        <p>Your Verification OTP</p>
        <h1>${otp}</h1>
        `,
    });

    res.status(201).json({
      success: true,
      data: response,
      message:
        "Please Verify Your email. Otp has been send to your email account.",
    });
  } catch (err) {
    console.error("Error", err.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.verifyEmail = async (req, res) => {
  
  const { userId, OTP } = req.body;

  try {
    if (!isValidObjectId(userId)) return res.json({ error: "Invalid user !" });

    const user = await User.findById(userId);

    if (!user) return res.json({ error: "User not Found" });

    if (user.isVerified) return res.json({ error: "User already verified" });

    const token = await EmailVarificationToken.findOne({ owner: userId });

    if (!token) return res.json({ error: "Token not found" });

    const isMatched = await token.compaireToken(OTP);

    if (!isMatched) return res.json({ error: "Please Submit a valid OTP !" });

    user.isVerified = true;
    await user.save();

    await EmailVarificationToken.findByIdAndDelete(token._id);

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "84f5c719daa30c",
        pass: "608dd6a2ae96f3",
      },
    });

    transport.sendMail({
      from: "webkledges.com",
      to: user.email,
      subject: "Welcome Email",
      html: ` 
          <h1>Welcome to our App and Thanks for choosing us. </h1>
          `,
    });

    res.status(201).json({
      message: "Your email is verified.",
    });
  } catch (error) {
    console.error("Error in verifyEmail:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
