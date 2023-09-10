import dbConnect from "../../../dbConfig/dbConfig";
import User from "../../../userModel/userModel";
import bcryptjs from "bcryptjs";

const handler = async (req, res) => {
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
};

// Export the handle function for the POST method
export default dbConnect(handler);
