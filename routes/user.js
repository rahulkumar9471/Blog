const express = require("express");
const {
  Signup,
  verifyEmail,
  resendEmailVerificationToken,
  forgetPassword,
  sendResetPasswordTokenStatus,
  resetPassword,
  signIn,
} = require("../controllers/user");
const {
  userValidator,
  validate,
  validatePassword,
  signInValidator,
} = require("../middlewares/validator");
const { isValidPasswordResetToken } = require("../middlewares/user");
//user express router
const router = express.Router();

router.post("/user/Sign-up", userValidator, validate, Signup);
router.post("/user/Sign-In", signInValidator, validate, signIn);
router.post("/user/verify-email", verifyEmail);
router.post(
  "/user/resend-email-verification-token",
  resendEmailVerificationToken
);
router.post("/user/forget-password", forgetPassword);
router.post(
  "/user/verify-password-reset-token",
  isValidPasswordResetToken,
  sendResetPasswordTokenStatus
);
router.post(
  "/user/reset-password",
  validatePassword,
  validate,
  isValidPasswordResetToken,
  resetPassword
);

module.exports = router;
