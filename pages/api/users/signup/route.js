import dbConnect from "../../../dbConfig/dbConfig";
import User from "../../../../userModel/userModel";
import bcryptjs from "bcryptjs";
// import generateToken from "../../../../middlewares/generatesToken";

const handler = async (req, res) => {
  console.log("Function running")
  if (req.method === "POST") {

    try {
      const reqBody = req.body;
      const { name, email, password } = reqBody;

      console.log(reqBody);

      // Check if user already exists
      const user = await User.findOne({ email });

      if (user) {
        return res.status(409).json({ Error: "User already exists" });
      }

      // Hash password
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      if (!hashedPassword) {
        // Handle password hashing error
        return res.status(500).json({ Error: "Password hashing failed" });
      }

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();
      console.log(savedUser);

      // Send verification email (you can uncomment this once you have the sendEmail function implemented)

      // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
      return res.status(201).json(savedUser);
    } catch (error) {
      console.error(error); // Log the error for debugging
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const reqBody = req.body;
      const { email, password } = reqBody;
      console.log('Email:', email);
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

      

      if (user && user.password) {
        const passwordMatch = await bcryptjs.compare(password, user.password);
        console.log(passwordMatch, "matching password");
        if (passwordMatch) {
          const token = jwt.sign({ email }, "your_secret_key");
          await User.findByIdAndUpdate(user._id, { token });

          return res
            .status(200)
            .json({ token });
        } else {
          return res.status(401).json({ error: "Invalid Credentials" });
        }
      }
    } catch (err) {
      res.status(404).json({ err: "internal catch error" });
    }
  }
};

// Export the handle function for the POST method
export default dbConnect(handler);
