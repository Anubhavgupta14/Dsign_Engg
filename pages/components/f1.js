import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import { Padding } from "@mui/icons-material";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
  
    const handleChange = (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      setIsEmailValid(validateEmail(newEmail));
    };
  
    const handleSubmit = () => {
      if (isEmailValid) {
        // Add your submission logic here, e.g., send email to server
        console.log('Submitted email:', email);
      } else {
        // Handle invalid email case, e.g., show an error message
        console.log('Invalid email:', email);
      }
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    return (
      <footer className="footer">
        <div className="footer-outer">
          <div className="newsletter">
            <label className="label-head">JOIN THE CONVERSATION</label>
            <TextField
              id="standard-basic"
              type="email"
              label="EMAIL ADDRESS"
              variant="standard"
              size="small"
              value={email}
              onChange={handleChange}
              error={!isEmailValid}
              helperText={!isEmailValid ? 'Invalid email format' : ''}
            />
            <IconButton onClick={handleSubmit}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
          <div style={{paddingTop:'32px'}}>
            <ul className="nav-footer">
                <li className="nav-items">
                    <a>HOME</a>
                </li>
                <li className="nav-items">
                    <a>ABOUT</a>
                </li>
                <li className="nav-items">
                    <a>SERVICES</a>
                </li>
                <li className="nav-items">
                    <a>CONTACT</a>
                </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
