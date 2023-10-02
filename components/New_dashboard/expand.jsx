import React, { useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Expand = ({ open, handleClose,email }) => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        state: "",
        city: "",
        pincode: "",
        dob: '',
        gender: "",
        addressLine1: '',
        addressLine2: '',
        basicProfile: '',
      });
      console.log("hehe",email)

    const fetchData = async () => {
        try {
          const response = await fetch("/api/particular_data", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          });
  
          if (response.ok) {
            const data = await response.json();
            setUserData(data.user);
          } else {
            // Handle the case where the user is not found or an error occurs
            console.error("Error fetching user data:", data.error);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      useEffect(() => {
        fetchData();
       }, []);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          onClick: handleClose, // Close when clicking outside
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, {userData.name} non luctus, {email}nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Expand;
