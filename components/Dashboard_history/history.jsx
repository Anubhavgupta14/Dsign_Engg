import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/footer'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";


const dashboard = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const handlelogout = async () => {
    const ok = await fetch('/api/users/signout/route');
    console.log(ok)
    toast.success("Successfully Logged Out")
    router.push("/signin")
    window.location.reload();
  }


  return (
    <div>
      <Navbar />
      <div className='body_dash'>
        <div className='side_nav'>
          <Link href='/dashboard'><div className='nav_items'>Profile</div></Link>
          
          <Link href='/dashboard'><div className='nav_items'>Orders</div></Link>
          
          <Link href='/dashboard_history'><div className='nav_items'>Payment History</div></Link>

          <Link href='/dashboard'><div className='nav_items'>Reset Password</div></Link>
        </div>
        <div>
          <div className='heading_dash'>
            <h2 className='head_dash2'>Payment History</h2>
          </div>
          
          <div className="tab_container_main">
        <TableContainer component={Paper} style={{ backgroundColor: "#f9fbfc" }}>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                hover
              >
                <TableCell component="th" scope="row">
                  Order Id
                </TableCell>

                <TableCell align="left">
                    Product Name
                </TableCell>

                <TableCell align="left">
                  Date of Purchase
                </TableCell>

                <TableCell align="left">
                  Time of Purchase
                </TableCell>

                <TableCell align="left">
                  Amount
                </TableCell>
                
              </TableRow>

              <TableRow>
                <TableCell>
                    1
                </TableCell>
                <TableCell>
                    Ladle
                </TableCell>
                <TableCell>
                    15/02/2023
                </TableCell>
                <TableCell>
                    24:22
                </TableCell>
                <TableCell>
                    Rs.2100
                </TableCell>
              </TableRow>
              
            </TableBody>
          </Table>
        </TableContainer>
      </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default dashboard
