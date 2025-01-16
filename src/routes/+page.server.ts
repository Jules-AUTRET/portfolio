import { SMTP_USERNAME } from '$env/static/private';
import transporter from '../lib/mailer/emailSetup';

export const prerender = false;

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const name = formData.get("name");
            const email = formData.get("email");
            const body = formData.get("message");

            let html = `<h2>Un nouveau message du site !</h2><pre>De: ${name},<br>Email:${email}<br><br>${body}</pre>`;

            const message = {
                from: SMTP_USERNAME,
                to: "contact@jules-autret.dev",
                subject: "Message du site !",
                text: body,
                html: html,
            };

            const sendEmail = async (message) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail(message);

            return {
                message: "Email envoyé ! Merci !",
            };
        } catch (error) {
            return {
                message: "Il y a eu une erreur lors de l'envoi de votre mail, veuillez réessayer. X",
            };
        }
    }
};