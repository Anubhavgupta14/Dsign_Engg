import dbConnect from "../dbConfig/dbConfig";
import Member from "../../userModel/userModel";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;
    console.log(req.body)

    try {
      // Correctly query the database using an object for filtering by email
      const user = await Member.findOne({ email: 'virat@gmail.com' });

      if (user) {
        if (user.ladle_ticket === 0) {
          return res.status(404).json({ message: "You don't have tickets" });
        }

        user.ladle_ticket -= 1;

        await user.save();
        return res.status(201).json({ message: "Thank You for downloading" });
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default dbConnect(handler);
