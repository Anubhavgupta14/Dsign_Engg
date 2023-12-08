import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { fetchCurrentUser } from '../../libs/fetchUser';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import PersonIcon from '@mui/icons-material/Person';

export default function AccountMenu() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handlepro = (event) => {
    setAnchorEl(event.currentTarget);
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
    getUserData();
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dashboard = () => {
    router.push('/dashboard');
  };

  const security = () => {
    router.push('/dashboard_security');
  };
  const admin_page=()=>{
    router.push('/admin_dashboard');
  }
  const ordersgo=()=>{
    router.push('/orders');
  }

  const handlelogout = async () => {
    try {
      const response = await fetch('/api/users/signout/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        // If the response status is not in the range 200-299, it's an error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // The response is successful
      console.log('Logout successful');
      toast.success('Successfully Logged Out');
      router.push('/');
      window.location.reload();
      localStorage.removeItem('JWT');
    } catch (error) {
      console.error('Error during logout:', error);
      toast.error('Server Error');
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handlepro}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 45, height: 45, color: 'inherit' }}>
              <PersonIcon />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock={true}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={dashboard}>
          <Avatar /> My Profile
        </MenuItem>
        <MenuItem onClick={ordersgo}>
          <Avatar /> My Orders
        </MenuItem>
        <Divider />
        <MenuItem onClick={security}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Change Password
        </MenuItem>
        {userData.role === 'admin' && ( // Conditionally show "Admin" menu item
          <MenuItem onClick={admin_page}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Admin
          </MenuItem>
        )}
        <MenuItem onClick={handlelogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
