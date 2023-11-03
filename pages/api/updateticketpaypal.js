import dbConnect from "../dbConfig/dbConfig";
import Member from "../../userModel/userModel";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // const { email } = req.body;
    // const { email, amount } = req.body;
    // console.log("From API", email);
    // console.log("From API amount", amount);
    const { token } = req.body;

    if(token==null) return res.status(200).json({});

    try {
    //   const decodedToken = jwt.verify(token, 'your_secret_key');
      // Email milega
    //    console.log(decodedToken);
    //    const email = decodedToken.email;
        //    Correctly query the database using an object for filtering by email
        const decodedToken = jwt.verify(token, 'your_secret_key');
        // Email milega
        console.log("paypal se token",decodedToken);
  
  
        const email = decodedToken.email;
        let user;
        user = await Member.findOne({ email });

      if (user) {
        console.log("User Name", user.name);
        
        
            user.ladle_ticket += 2;
            console.log("updated ladle ticket", user.ladle_ticket);
        
        // else if(amount==2400){
        //     user.ladle_ticket += 2;
        //     user.aod_ticket += 2;
        //     console.log("updated ladle ticket", user.ladle_ticket);
        //     console.log("updated aod ticket", user.ladle_ticket);
        // }
        

        await user.save();
        return res.status(201).json({ message: "Thank You for Purchasing" });
      } else {
        console.log("User not found")
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
