import dbConnect from "../../../dbConfig/dbConfig";
import User from "../../../../userModel/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";
import { serialize } from "cookie";
// import generateToken from "../../../../middlewares/generatesToken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
        const reqBody = req.body;
        const { email, password } = reqBody;
        console.log('Email:', email);
        console.log('password:', password);
        // if (email == "krishnadevassi@gmail.com") {
        //   let admin = await Admin.findOne({ email });
        //   let passwordMatch = await bcrypt.compare(password, admin.password);
        //   if (passwordMatch) {
        //     let token = jwt.sign({ email }, "your_secret_key");
        //     const create_token = await Admin.findByIdAndUpdate(admin._id, {
        //       token,
        //     });
        //     return res.status(200).json({ token, role: "admin" });
        //   } else {
        //     return res.status(401).json({ error: "Invalid Credentials." });
        //   }
        
  
        let findMember = await User.findOne({ email });
  
  
        if (!findMember) {
          return res
            .status(401)
            .json({ error: "Invalid Credentials. No such user found" });
        }
  
        const user = findMember;
  
        
        console.log(password);
        console.log(user.password);
        if (user && user.password) {
          const passwordMatch = await bcryptjs.compare(password, user.password);

          console.log(passwordMatch, "matching password");
          if (passwordMatch) {
            const token = jwt.sign({ email }, "your_secret_key");
            await User.findByIdAndUpdate(user._id, { token });
            // console.log(token)
            // localStorage.setItem('token', response.data.token);
            // Cookies.set('token', token, { expires: 7, path: '/' });
            const serialised = serialize("JWT", token,{
              httpOnly: true,
              secure: process.env.NODE_ENV !== 'development',
              sameSite: "strict",
              maxAge: 60*60*24*30,
              path: "/",
            })
            res.setHeader('Set-Cookie', serialised);

            return res
              .status(200)
              .json({ token });


          } else {
            return res.json({ error: "Invalid Credentials" });
          }
        }
      } catch (err) {
        console.error(err);
        res.status(404).json({ err });
      }
  }
};

// Export the handle function for the POST method
export default dbConnect(handler);
