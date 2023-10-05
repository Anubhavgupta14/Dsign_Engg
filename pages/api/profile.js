import dbConnect from "../dbConfig/dbConfig";
import Member from "../../userModel/userModel";
// import Volunteer from "models/Volunteer";
import jwt from "jsonwebtoken";
// import Admin from "models/Admin";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { token } = req.body;

    if(token==null) return res.status(200).json({});

    try {

      // console.log('yeh hai token',token)

      const decodedToken = jwt.verify(token, 'your_secret_key');
      // Email milega
      console.log(decodedToken);


      const email = decodedToken.email;
      let user;
      user = await Member.findOne({ email });

      if (user) {
        return res.status(200).json({ user });
      } else {
        return res.status(404).json({ error: "User not found." });
      }
    } catch (error) {
      console.log("yaha problem")
      return res.status(401).json({ error: "Invalid token." });
    }
  }
  else if (req.method === 'PUT') {
    let user = req.body;
    try {
      await Member.findByIdAndUpdate(user._id, user);
      return res.status(200).json({ message: 'success' })
    }
    catch (err) {
      return res.status(500).json({ error: err.message });

    }
  }
  
  else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default dbConnect(handler);