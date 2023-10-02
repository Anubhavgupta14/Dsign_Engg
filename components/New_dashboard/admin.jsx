// import ProfileLayout from "../../components/user_data/User_security";
import { useState, useEffect } from "react";
// import { fetchCurrentUser } from "libs/fetchUser";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";
import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';
import Expand from './expand'

const general = () => {
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
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
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
    // {
    //   field: 'expand',
    //   headerName: 'Expand',
    //   width: 100,
    //   sortable: false,
    //   renderCell: (params) => {
    //     const expanded = params.row.__expanded__;
    //     return (
    //       <button onClick={() => handleExpand(params.row.email)}>Expand</button>
    //     );
    //   },
    // },
  ];
  
  const rows = data.map((user, index) => ({
    id: index + 1,
    name: user.name,
    email: user.email,
    phone: user.phone,
    ladle_ticket: user.ladle_ticket,
    aod_ticket: user.aod_ticket,
    
  }));
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/admin");
      const data = await response.json();
      console.log("front-end se data", data)
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main_admin">
        {/* <Expand open={open} handleClose={handleClose} email={expandEmail}/> */}
        <div className="container_admin">
        <p className="profile-t">Admin Portel</p>
        <div className="my-2"></div>
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
      <Footer />
    </>
  );
};

export default general;
