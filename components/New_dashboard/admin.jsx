// import ProfileLayout from "../../components/user_data/User_security";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";
import { fetchCurrentUser } from '../../libs/fetchUser';
import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Expand from './expand'

const general = () => {
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
      const convertedUser = {
        ...user,
        dob: user.dob ? user.dob.split('T')[0] : '',
      };
      setUserData(convertedUser);
    } catch (error) {
      toast.error(error.message + 'op' || 'Some error occurred while fetching data');
    }
    
  };


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/admin");
      const data = await response.json();
      console.log("front-end se data", data)
      setData(data);
    };

    const check = () => {
      if (userData.role !== 'admin') {
        alert("hello")
        console.log("wapas")
        router.push('/dashboard')
      } else {
        fetchData();
      }
    };

    // useEffect specifically for userData.role changes
    const handleRoleChange = () => {
      if (userData.role === 'admin') {
        check();
      }
      else{
        // alert('ok')
        // router.push('/dashboard')
      }
    };

    // Watch for changes in userData.role
    handleRoleChange();

  }, [userData.role]); // Add userData.role as a dependency here

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
      <Navbar />
      {userData.role === 'admin' ? (
        <div className="main_admin">
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
      ) : (
        <div className="notfound">
        <h2 className="notfound_h notfound_p">404 Not Found</h2>
        </div>
      )}
      <Footer />
    </>
  );
};

export default general;
