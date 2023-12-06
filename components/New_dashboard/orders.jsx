import ProfileLayout from "../user_data/User_security";
import { useState, useEffect } from "react";
import { fetchCurrentUser } from "libs/fetchpayment";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';


const general = () => {
  // const router = useRouter();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [expandEmail, setExpandEmail] = useState('');
  const handleExpand = (email) => {
  setOpen(true);
  setExpandEmail(email);
  };

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    pincode: '',
    dob: '',
    gender: '',
    addressLine1: '',
    addressLine2: '',
    basicProfile: '',
    role: 'user', // Default role
  });


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'order_id',
      headerName: 'Name',
      width: 170,
      sortable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      sortable: false,
    },
    {
      field: 'phone',
      headerName: 'Contact',
      width: 150,
      sortable: false,
    },
    {
      field: 'ladle_ticket',
      headerName: 'Ladle Tickets',
      width: 150,
      sortable: true,
    },
    {
      field: 'aod_ticket',
      headerName: 'AOD Tickets',
      width: 150,
      sortable: true,
    },
  ];
  
  const rows = data.map((user, index) => ({
    id: index + 1,
    name: user.name,
    email: user.email,
    phone: user.phone,
    ladle_ticket: user.ladle_ticket,
    aod_ticket: user.aod_ticket,
    
  }));

 

  const getUserData = async () => {
    const token = localStorage.getItem('JWT');
    if(token==null) return;
    try {
      const data = await fetchCurrentUser(token);
     console.log(data, 'data fetched from orders');
      
      setUserData(data);
    } catch (error) {
      toast.error(error.message + 'op' || 'Some error occurred while fetching data');
    }
    
  };

  useEffect(() => {
    const getUserDataAndCheck = async () => {
      try {
        await getUserData();
      } catch (error) {
        console.log("error")
      }
    };

    getUserDataAndCheck();
  }, []);

  return (
    <>
      <ProfileLayout>
        <div className="shadow general-container">
          <p className="profile-t">My Orders</p>
          <div className="my-2"></div>
          <div>
            
          <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>

        </div>
      </ProfileLayout>
    </>
  );
};

export default general;
