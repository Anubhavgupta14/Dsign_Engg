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
  const [size1_t, Setsize1_t] = useState(null);
  const [size1_s, Setsize1_s] = useState(null);
  const [size1_l, Setsize1_l] = useState(null);
  const [size2_t, Setsize2_t] = useState(null);
  const [size2_s, Setsize2_s] = useState(null);
  const [size2_l, Setsize2_l] = useState(null);
  const [size3_t, Setsize3_t] = useState(null);
  const [size3_s, Setsize3_s] = useState(null);
  const [size3_l, Setsize3_l] = useState(null);
  const [size4_t, Setsize4_t] = useState(null);
  const [size4_s, Setsize4_s] = useState(null);
  const [size4_l, Setsize4_l] = useState(null);
  const [safety_lining_length_t, Setsafety_lining_length_t] = useState(null);
  const [safety_lining_length_s, Setsafety_lining_length_s] = useState(null);
  const [degree_lining_for_trapping_t, Setdegree_lining_for_trapping_t] =
    useState(null);
  const [degree_lining_for_trapping_s, Setdegree_lining_for_trapping_s] =
    useState(null);
  const [top_cone_lining, Settop_cone_lining] = useState(null);
  const [
    bottom_cone_side_lining_brick_length,
    Setbottom_cone_side_lining_brick_length,
  ] = useState(null);
  const [
    bottom_cone_bottom_lining_brick_length,
    Setbottom_cone_bottom_lining_brick_length,
  ] = useState(null);
  const [
    bottom_cone_safety_lining_brick_length,
    Setbottom_cone_safety_lining_brick_length,
  ] = useState(null);
  const [bricks_std_width, Setbricks_std_width] = useState(null);
  const [bricks_std_height, Setbricks_std_height] = useState(null);
  const [density_of_bricks, Setdensity_of_bricks] = useState(null);
  const [safety_bricks_width, Setsafety_bricks_width] = useState(null);
  const [safety_bricks_height, Setsafety_bricks_height] = useState(null);
  const [safety_bricks_length, Setsafety_bricks_length] = useState(null);
  const [safety_cyl1, Setsafety_cyl1] = useState(0);
  const [safety_cyl2, Setsafety_cyl2] = useState(0);
  const [safety_cyl3, Setsafety_cyl3] = useState(0);
  const [safety_top_cone1, Setsafety_top_cone1] = useState(0);
  const [safety_top_cone2, Setsafety_top_cone2] = useState(0);
  const [safety_top_cone3, Setsafety_top_cone3] = useState(0);
  const [safety_bot_cone1, Setsafety_bot_cone1] = useState(0);
  const [safety_bot_cone2, Setsafety_bot_cone2] = useState(0);
  const [safety_bot_cone3, Setsafety_bot_cone3] = useState(0);
  const [safety_bottom1, Setsafety_bottom1] = useState(0);
  const [safety_bottom2, Setsafety_bottom2] = useState(0);
  const [safety_bottom3, Setsafety_bottom3] = useState(0);
  const [safety_bottom4, Setsafety_bottom4] = useState(0);
  const [safety_bottom5, Setsafety_bottom5] = useState(0);
  const [safety_bottom6, Setsafety_bottom6] = useState(0);
  const [safety_bottom7, Setsafety_bottom7] = useState(0);
  const [safety_bottom8, Setsafety_bottom8] = useState(0);
  const [safety_bottom9, Setsafety_bottom9] = useState(0);
  const [table1_4_4, Settable1_4_4] = useState(0);
  const [table1_5_4, Settable1_5_4] = useState(0);
  const [table1_6_4, Settable1_6_4] = useState(0);
  const [table1_7_4, Settable1_7_4] = useState(0);
  const [table1_6_5, Settable1_6_5] = useState(0);
  const [table1_7_5, Settable1_7_5] = useState(0);
  const [Diaon1,setDiaon1] = useState(0);
  const [Diaon2,setDiaon2] = useState(0);
  const [Diaon3,setDiaon3] = useState(0);
  const [Diaon4,setDiaon4] = useState(0);
  const [AreaB1,setAreaB1] = useState(0);
  const [AreaB2,setAreaB2] = useState(0);
  const [AreaB3,setAreaB3] = useState(0);
  const [AreaB4,setAreaB4] = useState(0);
  const [AreaL1,setAreaL1] = useState(0);
  const [AreaL2,setAreaL2] = useState(0);
  const [AreaL3,setAreaL3] = useState(0);
  const [AreaL4,setAreaL4] = useState(0);
  const [no_of_layer1,setno_of_layer1] = useState(0);
  const [no_of_layer2,setno_of_layer2] = useState(0);
  const [no_of_layer3,setno_of_layer3] = useState(0);
  const [no_of_layer4,setno_of_layer4] = useState(0);
  const [weight_of_bricks1,Setweight_of_bricks1] = useState(0);
  const [weight_of_bricks2,Setweight_of_bricks2] = useState(0);
  const [weight_of_bricks3,Setweight_of_bricks3] = useState(0);
  const [weight_of_bricks4,Setweight_of_bricks4] = useState(0);
  const [weight_of_bricks5,Setweight_of_bricks5] = useState(0);
  const [sum_weight_bricks,Setsum_weight_bricks] = useState(0)
  const [safety_table_sampling,Setsafety_table_sampling] = useState(0)
  const [safety_table_dia,Setsafety_table_dia] = useState(0)
  const [safety_table_areaB,Setsafety_table_areaB] = useState(0)
  const [safety_table_areaL,Setsafety_table_areaL] = useState(0)
  const [safety_table_nooflayer,Setsafety_table_nooflayer] = useState(0)
  const [safety_table_weight_bricks,Setsafety_table_weight_bricks] = useState(0)
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
  const K13 = degree_lining_for_trapping_t / 360;
  const result = async (event) => {
    // const result_ticket = await validate_ticket();
    // if (result_ticket === -1) {
    //   toast.error("You don't have tickets");
    //   setOpen(false);
    //   getUserData();
    //   return;
    // }

    const F14 = Math.ceil((0.52 * vessel_cylindrical_height) / 100) * 100;
    const F15 = Math.ceil((0.14 * vessel_cylindrical_height) / 100) * 100;
    const F16 = Math.ceil((0.23 * vessel_cylindrical_height) / 100) * 100;
    const F17 = vessel_cylindrical_height - (F14 + F15 + F16);
    const P19 = F14 / 100 + F15 / 100 + F16 / 100 + F17 / 100;
    const O19 = vessel_cylindrical_id * 3.1416 * P19 * 100;
    const N19 = safety_bricks_width * safety_bricks_length;
    const safety_cyl = Math.ceil(O19 / N19);
    Setsafety_cyl1(safety_cyl);
    Setsafety_cyl2(size4_s);

    const M17 =
      vessel_cylindrical_id -
      (parseFloat(size4_t) + parseFloat(safety_lining_length_t)) -
      (parseFloat(size4_s) + parseFloat(safety_lining_length_t));
    const O17 = 3.1416 * M17;
    const P17 = F17 / 100;
    const L12 = 360 - degree_lining_for_trapping_t;
    const L13 = L12 / 360;
    const K13 = degree_lining_for_trapping_t / 360;
    const K17 =
      Math.ceil(
        (O17 / bricks_std_width) * (degree_lining_for_trapping_t / 360)
      ) * P17;
    const L17 = (K17 / K13) * L13;
    const safety_cyl3 = K17 + L17;
    Setsafety_cyl3(safety_cyl3);

    const N67 = safety_bricks_width * safety_bricks_length;
    const D20 =
      vessel_cylindrical_id -
      Math.tan((3.1416 * top_cone_angle) / 180) * 2 * top_cone_height;
    const safety_top_cone1 =
      (3.1416 *
        (parseFloat(vessel_cylindrical_id) + parseFloat(D20)) *
        top_cone_height) /
      2 /
      N67;
    Setsafety_top_cone1(Math.round(safety_top_cone1));

    const safety_top_cone2 = size3_s;
    Setsafety_top_cone2(safety_top_cone2);

    const M14 =
      vessel_cylindrical_id -
      (parseFloat(size1_t) + parseFloat(safety_lining_length_t)) -
      (parseFloat(size1_s) + parseFloat(safety_lining_length_s));
    const K14 =
      Math.ceil(((3.1416 * M14) / bricks_std_width) * K13) * (F14 / 100);
    const M16 =
      vessel_cylindrical_id -
      (parseFloat(size3_t) + parseFloat(safety_lining_length_t)) -
      (parseFloat(size3_s) + parseFloat(safety_lining_length_s));
    const K16 =
      Math.ceil(((3.1416 * M16) / bricks_std_width) * K13) * (F16 / 100);

    const M15 =
      vessel_cylindrical_id -
      (parseFloat(size2_t) + parseFloat(safety_lining_length_t)) -
      (parseFloat(size2_s) + parseFloat(safety_lining_length_t));
    const K15 =
      Math.ceil(((3.1416 * M15) / bricks_std_width) * K13) * (F15 / 100);
    const L16 = ((K14 + K15 + K16) / K13) * L13;
    const safety_top_cone3 = K16 + L16;
    Setsafety_top_cone3(safety_top_cone3);

    const M68 =
      (3.1416 *
        (parseFloat(vessel_cylindrical_id) +
          parseFloat(
            parseFloat(vessel_cylindrical_id) -
              parseFloat(
                Math.tan((3.1416 * bottom_cone_angle) / 180) *
                  2 *
                  bottom_cone_height
              )
          )) *
        (parseFloat(bottom_cone_height) -
          parseFloat(
            parseFloat(bottom_cone_bottom_lining_brick_length) +
              parseFloat(bottom_cone_safety_lining_brick_length)
          ))) /
      2;
    const N68 = safety_bricks_width * safety_bricks_length;
    const safety_bot_cone1 = M68 / N68;
    Setsafety_bot_cone1(Math.round(safety_bot_cone1));

    const safety_bot_cone2 = size2_s;
    Setsafety_bot_cone2(safety_bot_cone2);
    Setsafety_bot_cone3(K15);

    const E27 =
      parseFloat(
        parseFloat(vessel_cylindrical_id) -
          parseFloat(
            Math.tan((3.1416 * bottom_cone_angle) / 180) *
              2 *
              bottom_cone_height
          )
      ) -
      2 * bottom_cone_safety_lining_brick_length;
    const M69 =
      (3.1416 / 4) *
      (parseFloat(E27) + parseFloat(bottom_cone_bottom_lining_brick_length)) *
      (parseFloat(E27) + parseFloat(bottom_cone_bottom_lining_brick_length));
    const N69 = safety_bricks_width * safety_bricks_length;
    const K69 = M69 / N69;
    Setsafety_bottom1(Math.round(K69));

    Setsafety_bottom2(size1_s);
    Setsafety_bottom3(K14);

    Setsafety_bottom4(top_cone_lining);
    Setsafety_bottom6(bottom_cone_bottom_lining_brick_length);

    const L64 = (3.1416 / 4) * E27 * E27;
    const M64 = bricks_std_width * bricks_std_height;
    const safety_bottom7 = L64 / M64;
    Setsafety_bottom7(Math.round(safety_bottom7));

    Setsafety_bottom8(bottom_cone_side_lining_brick_length);

    Settable1_4_4(K14);

    const X6 = parseFloat(vessel_cylindrical_id)-parseFloat(parseFloat(size1_t)+parseFloat(safety_lining_length_t))-parseFloat(parseFloat(size1_s)+parseFloat(safety_lining_length_s))
    setDiaon1(Math.round(X6))

    const areaB1 = bricks_std_width*bricks_std_height
    setAreaB1(areaB1)

    setAreaL1(3.1416*M14)
    setno_of_layer1(F14/100)

    const L14=0
    const weight_of_bricks2 =size1_s*bricks_std_width*bricks_std_height*(parseFloat(K14)+parseFloat(L14))*density_of_bricks/1000000000
    Setweight_of_bricks2(weight_of_bricks2.toFixed(1))

    Settable1_5_4(K15)
    setDiaon2(M15)
    setAreaB2(areaB1)
    setAreaL2(3.1416*M15)
    setno_of_layer2(F15/100)

    const weight_of_bricks3 = size2_s*bricks_std_width*bricks_std_height*(parseFloat(K15)+parseFloat(L14))*density_of_bricks/1000000000
    Setweight_of_bricks3((weight_of_bricks3).toFixed(3))

    Settable1_6_4(K16)
    Settable1_6_5(L16)
    setDiaon3(M16)
    setAreaB3(areaB1)
    setAreaL3((3.1416*M16).toFixed(2))
    setno_of_layer3(F16/100)

    const weight_of_bricks4 = size3_s*bricks_std_width*bricks_std_height*(parseFloat(K16)+parseFloat(L16))*density_of_bricks/1000000000
    Setweight_of_bricks4((weight_of_bricks4).toFixed(3))

    Settable1_7_4(K17)
    Settable1_7_5(L17)
    setDiaon4(M17)
    setAreaB4(areaB1)
    setAreaL4((3.1416*M17).toFixed(2))
    setno_of_layer4(F17/100)
    const weight_of_bricks5 = size4_s*bricks_std_width*bricks_std_height*(parseFloat(K17)+parseFloat(L17))*density_of_bricks/1000000000
    Setweight_of_bricks5((weight_of_bricks5).toFixed(3))

    Setsum_weight_bricks((parseFloat(weight_of_bricks1)+parseFloat(weight_of_bricks2)+parseFloat(weight_of_bricks3)+parseFloat(weight_of_bricks4)).toFixed(3))

    Setsafety_table_sampling(Math.ceil(O19/N19))
    Setsafety_table_dia(vessel_cylindrical_id)
    Setsafety_table_areaB(N19)
    Setsafety_table_areaL(O19)
    Setsafety_table_nooflayer(parseFloat(F17/100)+parseFloat(F16/100)+parseFloat(F15/100)+parseFloat(F14/100))
    const safety_table_sum =safety_lining_length_t*safety_bricks_width*safety_bricks_length*(Math.ceil(O19/N19))*density_of_bricks/1000000000
    Setsafety_table_weight_bricks((safety_table_sum).toFixed(3))
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

                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                            label="Width of Vessel Flange"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setwidth_of_vessel_flange(e.target.value)
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
                            sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                            label="Width of Cone Flange"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setwidth_of_cone_flange(e.target.value)
                            }
                          />
                        </div>
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

                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                            label="Width of Trunion Flange"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setwidth_of_trunion_flange(e.target.value)
                            }
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

        <h2 className="head_ladle" style={{ marginTop: "4vh" }}>
          Lining Bricks Details
        </h2>
        <div
          className="containerfab_ladle flex-all"
          style={{ marginTop: "4vh" }}
        >
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer
              sx={{ maxHeight: 1200 }}
              style={{ backgroundColor: "#f9fbfc" }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell
                      sx={{ textAlign: "center" }}
                      style={{ backgroundColor: "#c8c8c8" }}
                    >
                      <p>Vessel Cylindrical Bricks Length</p>
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: "center" }}
                      style={{ backgroundColor: "#c8c8c8" }}
                    >
                      <p>Tapping Side</p>
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: "center" }}
                      style={{ backgroundColor: "#c8c8c8" }}
                    >
                      <p>Sampling Side</p>
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: "center" }}
                      style={{ backgroundColor: "#c8c8c8" }}
                    >
                      <p>Nos. of Layers</p>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <p>Size1</p>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size1"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize1_t(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size1"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize1_s(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size1"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize1_l(e.target.value)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <p>Size2</p>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size2"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize2_t(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size2"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize2_s(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size2"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize2_l(e.target.value)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <p>Size3</p>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size3"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize3_t(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size3"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize3_s(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size3"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize3_l(e.target.value)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <p>Size4</p>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size4"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize4_t(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size4"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize4_s(e.target.value)}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Size4"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) => Setsize4_l(e.target.value)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <p>Safety Lining Length</p>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Safety Lining Length"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) =>
                            Setsafety_lining_length_t(e.target.value)
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
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Safety Lining Length"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) =>
                            Setsafety_lining_length_s(e.target.value)
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
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Safety Lining Length"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) =>
                            Setsafety_lining_length_l(e.target.value)
                          }
                        />
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <p>Degree Lining for Tapping/Sampling</p>
                    </TableCell>
                    <TableCell>
                      <div className="row_ladle flex-all">
                        <TextField
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Degree Lining for Tapping/Sampling"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) =>
                            Setdegree_lining_for_trapping_t(e.target.value)
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
                          sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                          label="Degree Lining for Tapping/Sampling"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          // error={error_show.topdiameter && !topdiameter}
                          size="small"
                          onChange={(e) =>
                            Setdegree_lining_for_trapping_s(e.target.value)
                          }
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          {/* yaha hu */}
        </div>

        <div className="main-box_ladle" style={{ marginBottom: "5vh" }}>
          <div className="ladle_first">
            {/* <h2 className="head_ladle">Vessel Dimensions</h2> */}
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
                            label="Top Cone Lining"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) => Settop_cone_lining(e.target.value)}
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
                            label="Bottom Cone Side Lining Brick Length"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setbottom_cone_side_lining_brick_length(
                                e.target.value
                              )
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
                            label="Bottom Code Bottom Lining Brick Length"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setbottom_cone_bottom_lining_brick_length(
                                e.target.value
                              )
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
                            label="Bottom Cone Safety Lining Brick Length"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setbottom_cone_safety_lining_brick_length(
                                e.target.value
                              )
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
                            label="Bricks Std. Width"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setbricks_std_width(e.target.value)
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
                            label="Bricks Std. Height"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setbricks_std_height(e.target.value)
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
                            label="Density of Bricks"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setdensity_of_bricks(e.target.value)
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
                            label="Safety Bricks Width"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setsafety_bricks_width(e.target.value)
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
                            label="Safety Bricks Height"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setsafety_bricks_height(e.target.value)
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
                            label="Safety Bricks Length"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setsafety_bricks_length(e.target.value)
                            }
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
      </div>

      {/* outputs */}
      <div ref={div2Ref}>
        <div className="main-box_ladle" style={{ marginBottom: "5vh" }}>
          <div className="ladle_first">
            <h2 className="head_ladle">Output</h2>
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
                          <p>Safety Cyl.</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_cyl1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_cyl2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_cyl3}</p>
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
                          <p>Safety Top Cone</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_top_cone1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_top_cone2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_top_cone3}</p>
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
                          <p>Safety Bot. Cone</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bot_cone1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bot_cone2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bot_cone3}</p>
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
                          <p>Safety Bottom</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bottom1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bottom2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bottom3}</p>
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
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bottom4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bottom5}</p>
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
                          <p>{safety_bottom6}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bottom7}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bottom8}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bottom9}</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>
        <p className="aod_para">Bricks Quantity Total Weight of Bricks MT</p>
      </div>

      <div ref={div3Ref}>
        <div className="main-box_ladle" style={{ marginBottom: "5vh" }}>
          <div className="ladle_first">
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
                          <p>Bricks</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Std.W</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Std. Ht</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Tapping side (degree)</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Sampling Side</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Dia on</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Area/Brick</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Area/Layer</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Nos. of Layer</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Weight of Bricks</p>
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
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{bricks_std_width}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{bricks_std_height}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{degree_lining_for_trapping_t}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{360 - degree_lining_for_trapping_t}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
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
                          <p>Length</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Width</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Height</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{K13}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{(360 - degree_lining_for_trapping_t) / 360}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{density_of_bricks}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sum_weight_bricks}</p>
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
                          <p>{size1_s}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{bricks_std_width}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{bricks_std_height}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{table1_4_4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{Diaon1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{AreaB1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{AreaL1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{no_of_layer1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight_of_bricks2}</p>
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
                          <p>{size2_s}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{bricks_std_width}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{bricks_std_height}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{table1_5_4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{Diaon2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{AreaB2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{AreaL2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{no_of_layer2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight_of_bricks3}</p>
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
                          <p>{size3_s}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{bricks_std_width}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{bricks_std_height}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{table1_6_4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{table1_6_5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{Diaon3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{AreaB3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{AreaL3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{no_of_layer3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight_of_bricks4}</p>
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
                          <p>{size4_s}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{bricks_std_width}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{bricks_std_height}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{table1_7_4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{table1_7_5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{Diaon4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{AreaB4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{AreaL4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{no_of_layer4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight_of_bricks5}</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>
        <p className="aod_para">Safety Lining for Cylindrical portion of Vessel</p>
        <div className="main-box_ladle" style={{ marginBottom: "5vh" }}>
          <div className="ladle_first">
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
                          <p>{safety_lining_length_t}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bricks_width}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_bricks_length}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_table_sampling}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_table_dia}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_table_areaB}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_table_areaL}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_table_nooflayer}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{safety_table_weight_bricks}</p>
                        </div>
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
