import { encrypt } from '../../components/ccavutil'; // Import your encryption function
import crypto from 'crypto';

export default async function handler(req, res) {
  try{

  
  const paymentDetails = req.body; // Assuming the payment details object is passed in the request body
  console.log(paymentDetails, " payment details received in server");
  const workingKey = "BF175DDE59AF4B0988BF025F94F3DCB2"; // Replace with your actual working key
  const accessCode = "AVVL05KH14CC75LVCC"; // Replace with your actual access code

  const md5 = crypto.createHash('md5').update(workingKey).digest();
  const keyBase64 = Buffer.from(md5).toString('base64');

  const ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f]).toString('base64');

  let str = `merchant_id=2751408`;
  for (const key in paymentDetails) {
    str+=`&${key}=${paymentDetails[key]}`;
  }
console.log(str,"String returned");
  const encRequest = encrypt(str, keyBase64, ivBase64);
  console.log(encRequest, "encoded payment");

  // Create the form HTML
  const formbody = `
    <form id="nonseamless" method="post" name="redirect" action="https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction">
      <input type="hidden" id="encRequest" name="encRequest" value="${encRequest}">
      <input type="hidden" name="access_code" id="access_code" value="${accessCode}">
    </form>`;

  res.status(200).send(formbody);
}
catch (e) {
  res.status(500).json({error:e.message});
}
}