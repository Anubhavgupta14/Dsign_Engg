import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';


const PaypalCheckoutButton = (props) => {
  

  
//   <script
//   src="https://www.paypal.com/sdk/js?client-id=AaFKKLd_MGqMO-QLbbDO6grwnyXzmxn4w6t0Mm5T58Zy7vWhu6D1yJX9aNNzq0aV3SnliVViVrc9sWK5">
// </script>
  const { product } = props;

  const email = product.email

  const [error, setError] = useState(null);
  const [paidFor, setPaidFor] = useState(false);

  const handleApprove = async(orderId) => {
    // Simulating the backend function call
    setTimeout(() => {
      // if response is success
      setPaidFor(true);
      
      // Refresh user's account or subscription status
    }, 1000);
    const token = localStorage.getItem('JWT');
    if(token==null) return;
    try{
      await fetch('/api/updateticketpaypal', {
        method: 'POST',
        body: JSON.stringify(product.email),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response JSON
      }).then(() => {
        toast.success("Payment Done")
        // You can use the token for further actions, such as storing it in local storage or cookies.
      }).catch((error) => {
        toast.error("Server Error")
        // toast.success(product.email)
      });
      
    }catch{

      toast.error("Server Error")
    }
  };

  const handleCancel = () => {
    console.log("Payment has been canceled.");
    // Display cancel message, modal, or redirect the user to the cancel page or back to the cart
  };

  const handleError = (err) => {
    setError(err);
    console.error("PayPal Checkout onError", err);
  };

  const handleCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: product.description,
          amount: {
            currency_code: "USD",
            value: product.price,
          },
        },
      ],
    });
  };

  const handleOnApprove = async (data, actions) => {
    try {
      const order = await actions.order.capture();
      console.log("order", order);
      handleApprove(data.orderID);
    } catch (err) {
      setError(err);
      console.error("Error capturing order", err);
    }
  };

  return (
    <div className="paypal">
      {/* <p>{email}</p> */}
      {/* {error && <div>Error: {error}</div>} */}
      {/* {paidFor && <div>Thank you for your purchase!{email}</div>} */}
      <PayPalButtons
        style={{
          color: "blue",
          layout: "horizontal",
          height: 30,
          tagline: false,
          shape: "rect",
        }}
        createOrder={handleCreateOrder}
        onApprove={handleOnApprove}
        onError={handleError}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default PaypalCheckoutButton;
