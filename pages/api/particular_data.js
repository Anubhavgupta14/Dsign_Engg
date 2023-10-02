import dbConnect from "../dbConfig/dbConfig";
import Member from "../../userModel/userModel";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body; // Correctly extract email from req.body
    console.log("yeh", email);

    try {
      // Attempt to find the user by email
      let user;
      user = await Member.findOne({ email }); // Correct usage: { email }

      if (user) {
        return res.status(200).json({ user });
      } else {
        return res.status(404).json({ error: "User not found." });
      }
    } catch (error) {
      console.log("yaha problem", error);
      return res.status(401).json({ error: "Invalid token." });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default dbConnect(handler);
