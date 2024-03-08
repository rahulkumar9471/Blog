const User = require("../models/user");
const jwt =  require("jsonwebtoken");
const EmailVarificationToken = require("../models/emailVarificationToken");
const { isValidObjectId } = require("mongoose");
const { generateMailTransport, generateOTP } = require("../utils/mail");
const { sendError, generateRandomByte } = require("../utils/helper");
const passwordResetToken = require("../models/passwordResetToken");

exports.Signup = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    const oldemail = await User.findOne({ email: email });

    if (oldemail) {
      return sendError(res, "Email Id already exists !");
    }
    const oldmobile = await User.findOne({ mobile: mobile });

    if (oldmobile) {
      return sendError(res, "Mobile No. already exists !");
    }

    const newUser = new User({ name, email, mobile, password });
    const response = await newUser.save();

    //generate 6 digits otp

    let otp = generateOTP();

    // store otp inside our db

    const newEmailVarificationToken = new EmailVarificationToken({
      owner: newUser._id,
      token: otp,
    });

    await newEmailVarificationToken.save();

    // send that otp to our user

    var transport = generateMailTransport();

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
    console.error("Error in Signup", err.message);
    return sendError(res, "Internal server error", 500);
  }
};

exports.verifyEmail = async (req, res) => {
  const { userId, OTP } = req.body;

  try {
    if (!isValidObjectId(userId)) return sendError(res, "Invalid user !");

    const user = await User.findById(userId);

    if (!user) return sendError(res, "User not Found !", 404);

    if (user.isVerified) return sendError(res, "User already verified");

    const token = await EmailVarificationToken.findOne({ owner: userId });

    if (!token) return sendError(res, "Token not found");

    const isMatched = await token.compareToken(OTP);

    if (!isMatched) return sendError(res, "Please Submit a valid OTP !");

    user.isVerified = true;
    await user.save();

    await EmailVarificationToken.findByIdAndDelete(token._id);

    var transport = generateMailTransport();

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
    return sendError(res, "Internal server error", 500);
  }
};

exports.resendEmailVerificationToken = async (req, res) => {
  const { userId } = req.body;

  try {
    if (!isValidObjectId(userId)) return sendError(res, "Invalid user !");

    const user = await User.findById(userId);
    if (!user) {
      return sendError(res, "User not found", 404);
    }

    if (user.isVerified)
      return sendError(res, "This email Id is already verified !");

    const alreadyHasToken = await EmailVarificationToken.findOne({
      owner: userId,
    });

    if (alreadyHasToken)
      return sendError(
        res,
        "Only after one hour you can request for another token!"
      );

    //generate 6 digits otp

    let otp = generateOTP();

    // store otp inside our db

    const newEmailVarificationToken = new EmailVarificationToken({
      owner: user._id,
      token: otp,
    });

    await newEmailVarificationToken.save();

    // send that otp to our user

    var transport = generateMailTransport();

    transport.sendMail({
      from: "webkledges.com",
      to: user.email,
      subject: "Email Verification",
      html: `
        <p>Your Verification OTP</p>
        <h1>${otp}</h1>
        `,
    });

    res.status(201).json({
      message: "New OTP has been sent to your registered email account.",
    });
  } catch (error) {
    console.error("Error in resendEmailVerificationToken:", error);
    return sendError(res, "Internal server error", 500);
  }
};

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) return sendError(res, "Email is Missing");

    const user = await User.findOne({ email: email });

    if (!user) return sendError(res, "User not found", 404);

    const alreadyHasToken = await EmailVarificationToken.findOne({
      owner: user._id,
    });

    if (alreadyHasToken)
      return sendError(
        res,
        "Only after one hour you can request for another token"
      );

    const token = await generateRandomByte();
    const newPasswordResetToken = await passwordResetToken({
      owner: user._id,
      token,
    });

    await newPasswordResetToken.save();

    const resetPasswordUrl = `https://localhost:3000/reset-password?token=${token}&id=${user._id}`;

    const transport = generateMailTransport();

    transport.sendMail({
      from: "security@webkledges.com",
      to: user.email,
      subject: "Reset Password Link",
      html: `
        <p>Click here to reset password</p>
        <a href='${resetPasswordUrl}'>change password</a>
        `,
    });

    res.json({ message: "Link sent to your email !" });
  } catch (error) {
    console.error("Error in forgetPassword:", error);
    return sendError(res, "Internal server error", 500);
  }
};

exports.sendResetPasswordTokenStatus = (req, res) => {
  res.json({ valid: true });
};

exports.resetPassword = async (req, res) => {
  const { newPassword, userId } = req.body;

  try {
    const user = await User.findById(userId);

    const matched = await user.comparePassword(newPassword);

    if (matched)
      return sendError(
        res,
        "This new password must be different from the old one."
      );

    user.password = newPassword;
    await user.save();

    await passwordResetToken.findByIdAndDelete(req.resetToken._id);

    const transport = generateMailTransport();

    transport.sendMail({
      from: "security@webkledges.com",
      to: user.email,
      subject: "Password Reset Successfully",
      html: `
      <p>Password Reset Successfully</p>
      <p>Now you can use new Password.</p>
      `,
    });

    res.json({
      message: "Password Reset Successfully, Now you can use new Password.",
    });
  } catch (error) {
    // Handle errors
    console.error("Error resetting password:", error);
    sendError(res, "An error occurred while resetting the password.", 500);
  }
};


exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  const user =  await User.findOne({email});
  if(!user) return sendError(res, "User not found", 404);

  const marched = await user.comparePassword(password);
  if(!marched) return sendError(res, "EmailId/Password Mismatch", 404);

  const {_id, name} = user;

  const jwtToken = jwt.sign({userId: user._id}, 'hgfvusgd354dg8n54dx54bx5fx5b4ssn5h');

  res.json({user: {id : user._id, name, email, token: jwtToken}})

}