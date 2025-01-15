import nodemailer from "nodemailer";
/*
import { SMTP, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD } from "$env/static/private";

let transporter = nodemailer.createTransport({
    host: SMTP,
    port: SMTP_PORT,
    secure: true,
    auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.error(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

export default transporter;
*/