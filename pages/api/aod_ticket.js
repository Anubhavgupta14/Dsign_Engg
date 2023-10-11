import dbConnect from "../dbConfig/dbConfig";
import Member from "../../userModel/userModel";
// import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    console.log("From API", req.body);
    try {
      const user = await Member.findOne({ email: req.body});
      console.log("jj",user)

      if (user) {
        console.log("User Name", user.name);
        if (user.aod_ticket === 0) {
          return res.status(404).json({ message: "You don't have tickets" });
        }

        user.aod_ticket -= 1;
        console.log("updated ticket", user.aod_ticket);

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
