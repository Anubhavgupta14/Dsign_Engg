import dbConnect from "../dbConfig/dbConfig";
import Member from "../../userModel/userModel";
import bcrypt from "bcryptjs";
// import { checkPageAuthentication } from "libs/checkRole";
const handler = async (req, res) => {
  if (req.method === "PATCH") {
    try {
      let { id, oldPassword, newPassword } = req.body;
      console.log(req.body, "body request");
      const hashedPassword = await bcrypt.hash(newPassword, 10);
    //   const token = req.cookies.JWT;

      let user = await Member.findById(id);
      let passwordMatch = await bcrypt.compare(oldPassword, user.password);
      if (passwordMatch) {
        await Member.findByIdAndUpdate(id, { password: hashedPassword });
        return res
          .status(200)
          .json({ message: "Password changed successfully" });
      } else {
        return res.status(401).json({ error: "Invalid password" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(400).json({ message: "Bad Request" });
};

export default dbConnect(handler);
