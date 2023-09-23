import crypto from 'crypto';
import ccavutil from 'components/ccavutil'; // Adjust the path to ccavutil.js
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  let ccavResponse = '';
  const workingKey = "BF175DDE59AF4B0988BF025F94F3DCB2"; // Replace with your actual working key

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

  await Donation.create(jsonresponse);
  if(jsonresponse.order_status == "Success"){
    return res.redirect('/payment/' + jsonresponse.order_id);
  }
  return res.redirect('/payment/failure');
}