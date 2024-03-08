const { isValidObjectId } = require("mongoose");
const passwordResetToken = require("../models/passwordResetToken");
const { sendError } = require("../utils/helper");

exports.isValidPasswordResetToken = async (req, res, next) => {
    const { token, userId } = req.body;

    try {
        if (!token.trim() || !isValidObjectId(userId))
            return sendError(res, "Invalid request");

        const resetToken = await passwordResetToken.findOne({ owner: userId });

        if (!resetToken)
            return sendError(res, "Unauthorized assess, Invalid request !", 401);

        const matched = await resetToken.compareToken(token);

        if (!matched)
            return sendError(res, "Unauthorized assess, Invalid request !", 401);

        req.resetToken = resetToken;

        next();
    } catch (error) {
        console.error("Error validating password reset token:", error);
        sendError(res, "An error occurred while validating the password reset token.", 500);
    }
};
