import nodemailer from 'nodemailer';

async function sendConfirmationEmail(email, token) {

    // Setting up confirmation email sender
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Send the email
    await transporter.sendMail({
        from: `"Neon Insights" <neoninsights@support.com>`,
        to: email,
        subject: `Please confirm your email`,
        html: `<h2>Thank you for registering!</h2>
               <p>Click the link below to confirm your email:</p>
               <a href="http://localhost:3000/api/auth/confirm-email?token=${token}">Confirm Email</a>`
    });

}

export { sendConfirmationEmail };



