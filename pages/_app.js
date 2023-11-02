import '@/styles/globals.css'
import '@/styles/navbar.css'
import '@/styles/signup.css'
import '@/styles/plainbtn.css'
import '@/styles/home.css'
import '@/styles/about.css'
import '@/styles/card.css'
import '@/styles/Cards.css'
import '@/styles/cc_machine.css'
 import '@/styles/contact.css'
import '@/styles/Footer.css'
import '@/styles/faq.css'
import '@/styles/faq2.css'
import '@/styles/ladle.css'
import '@/styles/login.css'
import '@/styles/pricing_new.css'
import '@/styles/dashboard.css'
import '@/styles/payment.css'
import '@/styles/failure.css'
import '@/styles/profile.css'
import '@/styles/admin.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PayPalScriptProvider options={{ "client-id": "AaFKKLd_MGqMO-QLbbDO6grwnyXzmxn4w6t0Mm5T58Zy7vWhu6D1yJX9aNNzq0aV3SnliVViVrc9sWK5" }}>
      <ToastContainer />
      <Component {...pageProps} />
      </PayPalScriptProvider>
    </>
  );
}
