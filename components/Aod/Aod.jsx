import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Footer from "../Footer/footer";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "../navbar/Navbar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "react-toastify";
import { fetchCurrentUser } from "../../libs/fetchUser";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Ladlecalculator = ({ authtoken }) => {
  const pdfRef = useRef();
  const div1Ref = useRef();
  const div2Ref = useRef();
  const div3Ref = useRef();
  const [vessel_cylindrical_id, setVessel_cylindrical_id] = useState(null);
  const [vessel_cylindrical_height, setVessel_cylindrical_height] =
    useState(null);
  const [top_cone_bottom_id, settop_cone_bottom_id] = useState(null);
  const [top_cone_height, Settop_cone_height] = useState(null);
  const [top_cone_angle, Settop_cone_angle] = useState(null);
  const [density_of_liq_metal, Setdensity_of_liq_metal] = useState(null);
  const [bottom_cone_top_id, Setbottom_cone_top_id] = useState(null);
  const [bottom_cone_height, Setbottom_cone_height] = useState(null);
  const [bottom_cone_angle, Setbottom_cone_angle] = useState(null);
  const [disc_end_dia, Setdisc_end_dia] = useState(null);
  const [disc_end_height, Setdisc_end_height] = useState(null);
  const [vessel_cylindrical_shell, Setvessel_cylindrical_shell] =
    useState(null);
  const [vessel_top_cone, Setvessel_top_cone] = useState(null);
  const [vessel_bottom_cone, Setvessel_bottom_cone] = useState(null);
  const [cylindrical_shell_flange, SetCylindrical_shell_flange] =
    useState(null);
  const [top_cone_flange, Settop_cone_flange] = useState(null);
  const [top_cone_protection_flange, Settop_cone_protection_flange] =
    useState(null);
  const [disc_end, Setdisc_end] = useState(null);
  const [width_of_vessel_flange, Setwidth_of_vessel_flange] = useState(null);
  const [width_of_cone_flange, Setwidth_of_cone_flange] = useState(null);
  const [stiffner_cyl_flange, Setstiffner_cyl_flange] = useState(null);
  const [stiffnertop_cone_flange, Setstiffnertop_cone_flange] = useState(null);
  const [lifting_hook, Setlifting_hook] = useState(null);
  const [legs, Setlegs] = useState(null);
  const [cone_top_rim, Setcone_top_rim] = useState(null);
  const [pin_lifting_hook, Setpin_lifting_hook] = useState(null);
  const [cylinder_to_trunion_flange, Setcylinder_to_trunion_flange] =
    useState(null);
  const [vessel_flanges_distance, Setvessel_flanges_distance] = useState(null);
  const [width_of_trunion_flange, Setwidth_of_trunion_flange] = useState(null);

  const [output_show, setOutput_show] = useState(false);
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const handleOpen = () => {
    seterror("");
    let v = document.querySelector(".error_ccm");
    v.style.visibility = "hidden";
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [download, setdownload] = useState(false);
  const [error, seterror] = useState("");
  // const isdisabled = !()

  const fun = () => {
    toast.error("Error : Enter the required values");
  };

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    pincode: "",
    dob: "",
    gender: "",
    addressLine1: "",
    addressLine2: "",
    basicProfile: "",
    aod_ticket: 0,
  });

  const result = async (event) => {
    const result_ticket = await validate_ticket();
    if (result_ticket === -1) {
      toast.error("You don't have tickets");
      setOpen(false);
      getUserData();
      return;
    }

    // event.preventDefault();
    setOpen(false);
    getUserData();
    setdownload(true);
    setOutput_show(true);
  };

  const getUserData = async () => {
    const token = localStorage.getItem("JWT");
    try {
      const data = await fetchCurrentUser(token);
      console.log(data, "data fetched");
      const { error } = data;
      console.log(error, "error getting user data");
      if (error) {
        toast.error(error);
        return;
      }
      let user = data;
      const convertedUser = {
        ...user,
        dob: user.dob ? user.dob.split("T")[0] : "",
      };
      setUserData(convertedUser);
    } catch (error) {
      toast.error(
        error.message + "op" || "Some error occurred while fetching data"
      );
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleDownloadPDF = async () => {
    if (!download) {
      toast.error("Calculate First");
      return;
    }

    // Capture the first div to an image
    const div1ImageData = await html2canvas(div1Ref.current);

    // Capture the second div to an image
    const div2ImageData = await html2canvas(div2Ref.current);
    const div3ImageData = await html2canvas(div3Ref.current);

    // Create a new PDF document
    const pdf = new jsPDF("p", "mm", "a4", true);

    // Add the first image to the PDF document
    if (!isMobile) {
      setK(80);
      setK2(140);
      setK3(80);
      setK4(150);
      console.log(k, k2, k3, k4);
    } else {
      setK(5);
      setK2(0);
      setK3(0);
      setK4(0);
      console.log(k, k2, k3, k4);
    }
    pdf.addImage(
      div1ImageData,
      "PNG",
      k,
      0,
      pdf.internal.pageSize.getWidth() - k2,
      pdf.internal.pageSize.getHeight()
    );

    // Add a new page to the PDF document
    pdf.addPage();

    // Add the second image to the PDF document
    pdf.addImage(
      div2ImageData,
      "PNG",
      k3,
      0,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()
    );
    pdf.addPage();
    pdf.addImage(
      div3ImageData,
      "PNG",
      k3,
      0,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()
    );

    // Save the PDF document
    pdf.save("ladle.pdf");

    toast.success("Successfully Downloaded");
  };

  const validate_ticket = async () => {
    try {
      const response = await fetch("/api/aod_ticket", {
        method: "POST",
        body: JSON.stringify(userData.email),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.status === 404) {
        return -1;
      } else if (response.status === 201) {
        toast.success("Successfully Calculated");
        return 1;
      } else {
        const data = await response.json();
        toast.success(data.message);
        toast.success("Thank you for download");
        return 1;
      }
    } catch (err) {
      toast.error(err);
      return 0;
    }
  };

  const reset = () => {
    window.location.reload();
  };

  // const [windowWidth, setWindowWidth] = useState(0);

  // Function to update window width
  // const updateWindowWidth = () => {
  //     setWindowWidth(window.innerWidth);
  // };

  // Add an event listener to update the window width when the component mounts
  // useLayoutEffect(() => {
  //     updateWindowWidth();
  //     window.addEventListener('resize', updateWindowWidth);
  //     return () => {
  //         window.removeEventListener('resize', updateWindowWidth);
  //     };
  // }, []);

  // Calculate the image width based on screen size
  // const imageWidth = windowWidth < 900 ? 300 : 1100;
  // const imageWidth2 = windowWidth < 900 ? 100 : 300;
  // const imageWidth3 = windowWidth < 900 ? 100 : 300;
  // const imageheight1 = windowWidth < 900 ? 100 : 400;
  // const imageheight2 = windowWidth < 900 ? 100 : 300;
  // const imageheight3 = windowWidth < 900 ? 100 : 300;

  return (
    <div className="body_ladle" style={{ backgroundColor: "#f9fbfc" }}>
      <Navbar moveIndex={0} authtoken={authtoken} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cal_width">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure ?
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, marginBottom: "17px" }}
          >
            You have {userData.aod_ticket} Tickets left !
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, marginBottom: "17px" }}
          >
            {userData.aod_ticket == 0 ? (
              <div>
                <p>
                  You Can Purchase Plans or Continue with{" "}
                  <Link href="/ccm" className="plan_head">
                    Free Plan
                  </Link>
                </p>
                <div className="btn_div">
                  <Link href="/pricing">
                    <button>Purchase</button>
                  </Link>
                  {/* <button onClick={result3}>Calculate</button> */}
                </div>
              </div>
            ) : (
              ""
            )}
          </Typography>
          <button
            className={userData.aod_ticket == 0 ? "dis" : "btn_cal"}
            onClick={result}
          >
            Calculate
          </button>
        </Box>
      </Modal>

      <div ref={div1Ref}>
        <h2 className="head" style={{ fontSize: "33px" }}>
          AOD Calculator
        </h2>
        <div className="ladle_desc" style={{ marginBottom: "10vh" }}>
          <p className="ccm_para">
            <span style={{ color: "#1081fc" }}>AOD Calculator </span>is an
            indispensable tool for professionals in the field of metallurgy,
            particularly in the realm of metal casting. This specialized
            calculator streamlines the process of determining the precise amount
            of molten metal required for casting operations. With its
            user-friendly interface, metallurgists and foundry workers can input
            essential parameters such as casting dimensions, metal type, and
            desired specifications. The calculator then generates accurate
            measurements, ensuring that the correct amount of molten metal is
            utilized, minimizing waste, and optimizing production efficiency.
          </p>
        </div>
        <div className="main-box_ladle" style={{ marginBottom: "5vh" }}>
          <div className="ladle_first">
            <h2 className="head_ladle">Vessel Dimensions</h2>
            <Paper sx={{ overflow: "hidden" }}>
              <TableContainer
                sx={{ maxHeight: 1000 }}
                style={{ backgroundColor: "#f9fbfc" }}
              >
                <Table stickyHeader aria-label="sticky table">
                  <TableBody>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ maxHeight: "10px" }}
                    >
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Vessel Cylindrical ID"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              setVessel_cylindrical_id(e.target.value)
                            }
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Vessel Cylindrical Height"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              setVessel_cylindrical_height(e.target.value)
                            }
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Top Cone Bottom ID"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              settop_cone_bottom_id(e.target.value)
                            }
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Top Cone Height"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) => Settop_cone_height(e.target.value)}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ maxHeight: "10px" }}
                    >
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Top Cone Angle"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) => Settop_cone_angle(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Density of Liquid Metal"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setdensity_of_liq_metal(e.target.value)
                            }
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Bottom Cone Top ID"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setbottom_cone_top_id(e.target.value)
                            }
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Bottom Cone Height"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setbottom_cone_height(e.target.value)
                            }
                          />
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ maxHeight: "10px" }}
                    >
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Bottom Cone Angle"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setbottom_cone_angle(e.target.value)
                            }
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Disc End Dia"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) => Setdisc_end_dia(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Disc End Height"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) => Setdisc_end_height(e.target.value)}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>

        <div className="main-box_ladle" style={{ marginBottom: "5vh" }}>
          <div className="ladle_first">
            <h2 className="head_ladle">
              Materials/Plates thickness for Fabrication of AOD Vessel
            </h2>
            <Paper sx={{ overflow: "hidden" }}>
              <TableContainer
                sx={{ maxHeight: 1000 }}
                style={{ backgroundColor: "#f9fbfc" }}
              >
                <Table stickyHeader aria-label="sticky table">
                  <TableBody>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ maxHeight: "10px" }}
                    >
                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Vessel Cylindrical Shell
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={vessel_cylindrical_shell}
                            label="Vessel Cylindrical Shell"
                            onChange={(e) =>
                              Setvessel_cylindrical_shell(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Vessel Top Cone
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={vessel_top_cone}
                            label="Vessel Top Cone"
                            onChange={(e) => Setvessel_top_cone(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Vessel Bottom Cone
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={vessel_bottom_cone}
                            label="Vessel Bottom Cone"
                            onChange={(e) =>
                              Setvessel_bottom_cone(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Cylindrical Shell Flange
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={cylindrical_shell_flange}
                            label="Cylindrical Shell Flange"
                            onChange={(e) =>
                              SetCylindrical_shell_flange(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ maxHeight: "10px" }}
                    >
                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Top Cone Flange
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={top_cone_flange}
                            label="Top Cone Flange"
                            onChange={(e) => Settop_cone_flange(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Top Cone Protection Flange
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={top_cone_protection_flange}
                            label="Top Cone Protection Flange"
                            onChange={(e) =>
                              Settop_cone_protection_flange(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Disc End
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={disc_end}
                            label="Disc End"
                            onChange={(e) => Setdisc_end(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Width of Vessel Flange
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={width_of_vessel_flange}
                            label="Width of Vessel Flange"
                            onChange={(e) =>
                              Setwidth_of_vessel_flange(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ maxHeight: "10px" }}
                    >
                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Width of Cone Flange
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={width_of_cone_flange}
                            label="Width of Cone Flange"
                            onChange={(e) =>
                              Setwidth_of_cone_flange(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Stiffner Cyl. Flange
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={stiffner_cyl_flange}
                            label="Stiffner Cyl. Flange"
                            onChange={(e) =>
                              Setstiffner_cyl_flange(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Stiffner Top Cone Flange
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={stiffnertop_cone_flange}
                            label="Stiffner Top Cone Flange"
                            onChange={(e) =>
                              Setstiffnertop_cone_flange(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Lifting Hook
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={lifting_hook}
                            label="Lifting Hook"
                            onChange={(e) => Setlifting_hook(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ maxHeight: "10px" }}
                    >
                      

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Legs
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={legs}
                            label="Legs"
                            onChange={(e) => Setlegs(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Cone Top Rim
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={cone_top_rim}
                            label="Cone Top Rim"
                            onChange={(e) => Setcone_top_rim(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Pin Lifting Hook
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={pin_lifting_hook}
                            label="Pin Lifting Hook"
                            onChange={(e) =>
                              Setpin_lifting_hook(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Cylinder to Trunion Flange
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={cylinder_to_trunion_flange}
                            label="Cylinder to Trunion Flange"
                            onChange={(e) =>
                              Setcylinder_to_trunion_flange(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>

                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      sx={{ maxHeight: "10px" }}
                    >
                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Vessel Flanges Distance
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={vessel_flanges_distance}
                            label="Vessel Flanges Distance"
                            onChange={(e) =>
                              Setvessel_flanges_distance(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                          // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Width of Trunion Flange
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={width_of_trunion_flange}
                            label="Width of Trunion Flange"
                            onChange={(e) =>
                              Setwidth_of_trunion_flange(e.target.value)
                            }
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={60}>60</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>
      </div>

      <div className="btns_ladle">
        <div className="row4_ladle">
          <Stack spacing={2} direction="row">
            <button
              onClick={() => {
                if (0) {
                  fun();
                } else {
                  handleOpen();
                }
              }}
              className="button_ladle"
            >
              Calculate
            </button>
          </Stack>
          <p className="error_ccm">{error}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ladlecalculator;
