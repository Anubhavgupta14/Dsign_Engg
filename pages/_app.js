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

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
