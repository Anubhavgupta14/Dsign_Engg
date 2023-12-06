import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { useRouter } from "next/router";


const PaypalCheckoutButton = (props) => {
  const router = useRouter();

  const { product2 } = props;

  // const email = product2.email

  const [error, setError] = useState(null);
  const [paidFor, setPaidFor] = useState(false);

  const handleApprove = async(orderId) => {
    // Simulating the backend function call
    
    setPaidFor(true);
    const token = localStorage.getItem('JWT');
    // if(token==null){
    //   console.log("yaya")
    // }
    try {
      const response = await fetch('/api/updateticketpaypal2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({token, orderId}),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(data.message); // Success message
        toast.success(data.message)
        setTimeout(() => {
          router.push('/')
        }, 2000);
        // Perform other actions or UI updates here
      } else if (response.status === 404) {
        console.log(data.message); // User not found
        toast.success(data.message)
        // Perform other actions or UI updates here
      } else {
        console.log('Error:', data.error); // Internal server error
        toast.warning(data.error)
        // Perform other actions or UI updates here
      }
    } catch (error) {
      console.error('Error:', error);
      toast.warning(error)
      // Perform other actions or UI updates for error handling here
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
          description: product2.description,
          amount: {
            currency_code: "USD",
            value: product2.price,
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
