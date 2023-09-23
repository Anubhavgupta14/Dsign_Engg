
import { useState } from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";
import DoneIcon from '@mui/icons-material/Done';

const page = ({authtoken}) => {
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    comments: "",
  });

  const [countryCode, setCountryCode] = useState(""); // Set the default country code

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Allow only numbers in phone input
      const numericValue = value.replace(/\D/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else if (name === "email") {
      // Basic email validation
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setIsEmailValid(isValidEmail || value === ""); // Update email validity
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (name === "firstname" || name === "lastname") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission or data handling here
    console.log("Form data submitted:", formData);
  };
  return (
    <div style={{ backgroundColor: "#f9fbfc" }}>
      <Navbar authtoken={authtoken} />

      <div className="contact_body">
        <div className="container">
          <div>
            <h2 className="head_contact">Questions?</h2>
            <h2 className="head_contact2">We’ll put you on the right path.</h2>
            <p className="contact_p">Ask about our range of products, customization or bulk orders.

              We are at stand by, ready to help.</p>
            <div className="details_contact">
              <div className="contact_data">
                <div><DoneIcon /></div>
                <div>One flexible tool for your entire company to share knowledge, ship projects, and collaborate.</div>
              </div>
              <hr style={{
                color: '#c6c5c5',
                backgroundColor: '#c6c5c5',
                height: .5,
                borderColor: '#c6c5c5'
              }} />
              <div className="contact_data">
                <div><DoneIcon /></div>
                <div>Enterprise features to securely manage user access and security.</div>
              </div>
              <hr style={{
                color: '#c6c5c5',
                backgroundColor: '#c6c5c5',
                height: .5,
                borderColor: '#c6c5c5'
              }} />
              <div className="contact_data">
                <div><DoneIcon /></div>
                <div>Dedicated support to work with you on your setup and help you build the best plan for your company.</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="div_name">
              <div>
                <label htmlFor="name">First Name:</label>
                <input
                  className="first_name"
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>
              <div style={{marginLeft:'33px'}}>
                <label htmlFor="name">Last Name:</label>
                <input
                  className="last_name"
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className={isEmailValid ? "" : "error-label"}
              >
                Email: {isEmailValid ? "" : "Invalid Email"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone_code">Phone's Country Code</label>
              <div><select
                id="countryCode"
                type="phone_code"
                name="countryCode"
                value={countryCode}
                required
                onChange={handleCountryCodeChange}
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+33">+33 (France)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+86">+86 (China)</option>
                <option value="+7">+7 (Russia)</option>
                <option value="+39">+39 (Italy)</option>
                <option value="+34">+34 (Spain)</option>
                <option value="+31">+31 (Netherlands)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+65">+65 (Singapore)</option>
                <option value="+82">+82 (South Korea)</option>
                {/* Add more country code options as needed */}
              </select></div>
            </div>
            <div>
              <label htmlFor="phone">Phone No.:</label>
              {/* Country code dropdown */}
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="comments">Comments:</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
