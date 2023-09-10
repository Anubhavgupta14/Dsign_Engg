"use client";
import { useState } from "react";

import Navbar from "../navbar/Navbar";

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
    <div>
      <Navbar />

      <div className="contact_body">
        <div className="container">
          <div>
            <h2 className="heading">Contact Us</h2>
            <div className="details">
              <div className="contact_data">
                <span className="detail_head">Street:</span> 39/42, Modi Street,
                Fort
              </div>
              <div className="contact_data">
                <span className="detail_head">City:</span> Mumbai
              </div>
              <div className="contact_data">
                <span className="detail_head">State/province/area:</span>{" "}
                Maharastra
              </div>
              <div className="contact_data">
                <span className="detail_head">Country calling code:</span> +91
              </div>
              <div className="contact_data">
                <span className="detail_head">Country:</span> India
              </div>
            </div>
          </div>

          {/* <div className="form">
        <div className="row">
          <TextField
            sx={{ m: 1, minWidth: isMobile ? 700 : 135 }}
            className="textfield"
            id="outlined-number"
            label="Name"
            variant="outlined"
            type="string"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            sx={{ m: 1, minWidth: isMobile ? 700 : 135 }}
            className="textfield"
            id="outlined-number"
            label="Email"
            variant="outlined"
            type="string"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="row">
          <TextField
            sx={{ m: 1, minWidth: isMobile ? 1420 : 390 }}
            className="textfield"
            id="outlined-number"
            label="Phone No."
            variant="outlined"
            type="string"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="row">
          <TextField
            sx={{ m: 1, minWidth: isMobile ? 1420 : 390 }}
            id="outlined-multiline-static"
            label="Comment"
            className="textfield"
            multiline
            rows={4}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="row">
            <button className="btn">
                Send
            </button>
        </div>
      </div> */}

          <form onSubmit={handleSubmit} className="form">
            <div>
              <label htmlFor="name">Name:</label>
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
    </div>
  );
};

export default page;
