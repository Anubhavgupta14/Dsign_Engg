import crypto from 'crypto';
import ccavutil from 'components/ccavutil'; // Adjust the path to ccavutil.js
import mongoose from 'mongoose';
import payment from "../../userModel/Payment"
import User from "../../userModel/userModel"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  let ccavResponse = '';
  const workingKey = process.env.CCAVENUEWORKINGID // Replace with your actual working key

  // Generate MD5 hash for the key and convert it to a base64 string
  const md5 = crypto.createHash('md5').update(workingKey).digest();
  const keyBase64 = Buffer.from(md5).toString('base64');

  // Initialize Vector and convert it to a base64 string
  const ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f]).toString('base64');
  const { encResp } = req.body;
  console.log(encResp, "encrpyted response");
  ccavResponse = ccavutil.decrypt(encResp, keyBase64, ivBase64);

  console.log(ccavResponse, "pi repsonse");
  let jsonresponse = await ccavutil.stringToJson(ccavResponse);
  console.log(jsonresponse, "jsonresponse");
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect('mongodb+srv://anubhavgu2002:anubhav14@mernauth.egcwxzx.mongodb.net/mernauth?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  await payment.create(jsonresponse);

  // const paymentDocument = await payment.findOne({ order_id: jsonresponse.order_id });
  

  if (jsonresponse.order_status == "Success") {
    
    const userEmail = jsonresponse.merchant_param2

    // Assuming you have access to the logged-in user's email
     // Replace with the way you access the email in your authentication system
    const user = await User.findOne({ email: userEmail });

    if (user) {
      console.log("user ke ander hai")

      if(jsonresponse.amount==900){
        user.ladle_ticket += 2;  
      }
      else if(jsonresponse.amount==2400){
        // Update ladle_ticket and aod_ticket by 2
        user.ladle_ticket += 2;
        user.aod_ticket += 2;
      }

      // Save the updated user document
      await user.save();
    }
    else{
      console.log("else pe aagaya")
    }

    return res.redirect('/payment/' + jsonresponse.order_id);
  }
  return res.redirect('/payment/failure');
}