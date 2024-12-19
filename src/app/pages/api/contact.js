import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        try {
            // Create transporter
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL, // Use environment variable
                    pass: process.env.EMAIL_PASSWORD, // Use environment variable
                },
            });

            // Send email
            await transporter.sendMail({
                from: process.env.EMAIL,
                to: process.env.RECEIVER_EMAIL,
                subject: `New message from ${name}`,
                text: `From: ${email}\n\n${message}`,
            });

            res.status(200).json({ message: "Email sent successfully." });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: "Failed to send email." });
        }
    } else {
        res.status(405).json({ error: "Method not allowed." });
    }
}
