import dbConnect from "../dbConfig/dbConfig";
import Payment from "../../userModel/Payment";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { token } = req.body;
    console.log("payment details token", token)

    if (token == null) return res.status(200).json({});

    try {
      const decodedToken = jwt.verify(token, 'your_secret_key');
      const billing_email = decodedToken.email;

      // Find all payments with the matching billing_email
      const payments = await Payment.find({ billing_email });

      if (payments.length > 0) {
        // console.log("details",payments)
        return res.status(200).json({ payments });
      } else {
        return res.status(404).json({ error: "No payments found for the user." });
      }
    } catch (error) {
      console.log("Error verifying token:", error);
      return res.status(401).json({ error: "Invalid token." });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default dbConnect(handler);
