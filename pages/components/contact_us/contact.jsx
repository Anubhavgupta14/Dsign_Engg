
import { useState } from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";

const page = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

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
      <Navbar />

      <div className="contact_body">
        <div className="container">
          <div>
            <h2 className="head_contact">Contact Us</h2>
            <p className="contact_p">Let’s explore how "The Design Engg" can work for you.</p>
            <div className="details_contact">
              <div className="contact_data">
                One flexible tool for your entire company to share knowledge, ship projects, and collaborate.
              </div>
              <hr style={{
                color: '#e5e4e3',
                backgroundColor: '#e5e4e3',
                height: .5,
                borderColor: '#e5e4e3'
              }} />
              <div className="contact_data">
                Enterprise features to securely manage user access and security.
              </div>
              <hr style={{
                color: '#e5e4e3',
                backgroundColor: '#e5e4e3',
                height: .5,
                borderColor: '#e5e4e3'
              }} />
              <div className="contact_data">
                Dedicated support to work with you on your setup and help you build the best plan for your company.
              </div>
            </div>
          </div>


          <form onSubmit={handleSubmit} className="form">
            <div>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
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
              <label htmlFor="phone">Phone No.:</label>
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
