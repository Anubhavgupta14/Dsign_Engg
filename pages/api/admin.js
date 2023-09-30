import dbConnect from "../dbConfig/dbConfig";
import Member from "../../userModel/userModel";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {

      // Fetch all user data from the database and convert to an array
      const users = await Member.find().lean().exec();
        // console.log("api pe data",users)
      // Return the user data as an array of objects
      return res.status(200).json(users);
    } catch (error) {
      // Handle any errors that occur during database operations
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default dbConnect(handler);
