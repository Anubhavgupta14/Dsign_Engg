import nodemailer from "nodemailer";

export default async (req, res) => {
    const { email, firstname,lastname, phone, comments,countryCode } = req.body;
 
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "anubhavgu2002@gmail.com",
            pass: process.env.NODEMAILER,
        }
    });

    try {

        await transporter.sendMail({
            from: email,
            to: ["thedesignengg1@gmail.com","anubhavgu2002@gmail.com","venusenggbrc@gmail.com"],
            subject: `Contact form submitted by ${firstname}`,
            html: `<!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Otp Email</title>
        <style>
        
        </style>
      </head>
      <body>
      <h2>Contact form submitted by ${firstname} </h2>
      <br />
      <h3>Here are the details:</h3>
      <br />
      <p>First Name : ${firstname}</p>
      <p>Last Name : ${lastname}</p>
      <p>Email : ${email}</p>
      <p>Country Code : ${countryCode}</p>
      <p>Phone : ${phone}</p>
      <p> Message : ${comments}</p> 
      </body>
      </html>
      `
        });

    } catch (error) {
        return res.status(500).json({ error: error.message || error});
    }
    return res.status(200).json({ error: "" });
};