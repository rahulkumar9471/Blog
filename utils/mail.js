const nodemailer = require('nodemailer');

exports.generateOTP = (otp_length = 6) => {

    let otp = "";
    for (let i = 0; i <= otp_length; i++) {
        const randomval = Math.round(Math.random() * 9);
        otp += randomval;
    }

    return otp;

}

exports.generateMailTransport = () => 
nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "84f5c719daa30c",
        pass: "608dd6a2ae96f3",
    },
});