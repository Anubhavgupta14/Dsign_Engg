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

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'order_id',
      headerName: 'Order ID',
      width: 300,
      sortable: true,
    },
    {
        field: 'currency',
        headerName: 'Currency',
        width: 80,
        sortable: false,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 80,
      sortable: false,
    },  
    {
      field: 'order_status',
      headerName: 'Status',
      width: 80,
      sortable: false,
    },  
    {
      field: 'createdAt',
      headerName: 'Date & Time',
      width: 220,
      sortable: false,
    },  
  ];
  
  const rows = Array.isArray(data)
  ? 
  data.map((user, index) => ({
      id: index + 1,
      order_id: user.order_id,
      currency: user.currency,
      amount: user.amount,
      order_status: user.order_status,
      createdAt: user.trans_date || user.createdAt
    }))
  : [];

 

  const getUserData = async () => {
    const token = localStorage.getItem('JWT');
    if(token==null) return;
    try {
      const data = await fetchCurrentUser(token);
      console.log(data, 'data fetched');
      const { error } = data;
      console.log(error, 'error getting user data');
      if (error) {
        toast.error(error);
        return;
      }
      let user = data;
    //   setUserData(user);
      setData(user)
      console.log("ookoko",user)
    } catch (error) {
      toast.error(error.message + 'op' || 'Some error occurred while fetching data');
    }
    
  };


//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("/api/payment_details");
//       const data = await response.json();
//       console.log("front-end se data", data)
//       setData(data);
//     };
//     fetchData();
//   }, []);

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
          <p className="profile-t">My Documents</p>
          <div className="my-2"></div>
          <div>
          {/* <Box sx={{ height: 400, width: '110%' }}>
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
            </Box> */}
          </div>

        </div>
      </ProfileLayout>
    </>
  );
};

export default general;
