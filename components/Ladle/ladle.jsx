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
import { Hidden, useMediaQuery } from "@mui/material";
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
  const div4Ref = useRef();
  const div5Ref = useRef();

  const theme = useTheme();
  const [top_id_error, Settop_id_error] = useState(false)
  const [bottom_id_error, Setbottom_id_error] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const [topdiameter, setTopdiameter] = useState(null);
  const [bottomdiameter, setBottomdiameter] = useState(null);
  const [height, setHeight] = useState(null);
  const [bottomlining, setBottomlining] = useState(null);
  const [sidelining, setSidelining] = useState(null);
  const [freeboard, setFreeboard] = useState(null);
  const [pieHby3, setPieHby3] = useState(null);
  const [freeboardleveldiameter, setFreeboardleveldiameter] = useState(0);
  const [bottomliningleveldiameter, setBottomliningleveldiameter] = useState(0);
  const [inbetweenheight, setInbetweenheight] = useState(0);
  const [density, setDensity] = useState(null);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);
  const [input5, setInput5] = useState(0);
  const [input6, setInput6] = useState(null);
  const [output1, setOutput1] = useState(0);
  const [output2, setOutput2] = useState(0);
  const [output3, setOutput3] = useState(0);
  const [outputlining1, setOutputlining1] = useState(0);
  const [outputlining2, setOutputlining2] = useState(0);
  const [outputlining3, setOutputlining3] = useState(0);
  const [thickness1, setThickness1] = useState(null);
  const [thickness2, setThickness2] = useState(null);
  const [thickness3, setThickness3] = useState(null);
  const [thickness4, setThickness4] = useState(null);
  const [thickness5, setThickness5] = useState(null);
  const [thickness6, setThickness6] = useState(null);
  const [thickness7, setThickness7] = useState(null);
  const [thickness8, setThickness8] = useState(null);
  const [thickness9, setThickness9] = useState(null);
  const [thickness10, setThickness10] = useState(null);
  const [thickness11, setThickness11] = useState(null);
  const [thickness12, setThickness12] = useState(null);
  const [thickness13, setThickness13] = useState(null);
  const [thickness14, setThickness14] = useState(null);
  const [thickness15, setThickness15] = useState(null);
  const [length1, setLength1] = useState(0);
  const [length2, setLength2] = useState(0);
  const [length4, setLength4] = useState(0);
  const [length5, setLength5] = useState(0);
  const [length6, setLength6] = useState(0);
  const [length7, setLength7] = useState(0);
  const [length8, setLength8] = useState(0);
  const [length9, setLength9] = useState(0);
  const [length10, setLength10] = useState(0);
  const [length11, setLength11] = useState(0);
  const [length12, setLength12] = useState(0);
  const [length13, setLength13] = useState(0);
  const [length14, setLength14] = useState(0);
  const [length15, setLength15] = useState(0);
  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);
  const [volumn1, setVolumn1] = useState(0.0);
  const [volumn2, setVolumn2] = useState(0.0);
  const [weight1, setweight1] = useState(0);
  const [weight2, setweight2] = useState(0);
  const [weight3, setweight3] = useState(0);
  const [weight4, setweight4] = useState(0);
  const [weight5, setweight5] = useState(0);
  const [weight6, setweight6] = useState(0);
  const [weight7, setweight7] = useState(0);
  const [weight8, setweight8] = useState(0);
  const [weight9, setweight9] = useState(0);
  const [weight10, setweight10] = useState(0);
  const [weight11, setweight11] = useState(0);
  const [weight12, setweight12] = useState(0);
  const [weight13, setweight13] = useState(0);
  const [weight14, setweight14] = useState(0);
  const [weight15, setweight15] = useState(0);
  const [length3, setLength3] = useState(0);
  const [width3, setwidth3] = useState(0);
  const [width4, setwidth4] = useState(0);
  const [width5, setwidth5] = useState(0);
  const [width6, setwidth6] = useState(0);
  const [width7, setwidth7] = useState(0);
  const [width8, setwidth8] = useState(0);
  const [width9, setwidth9] = useState(0);
  const [width10, setwidth10] = useState(0);
  const [width11, setwidth11] = useState(0);
  const [width12, setwidth12] = useState(0);
  const [width13, setwidth13] = useState(0);
  const [width14, setwidth14] = useState(0);
  const [width15, setwidth15] = useState(0);
  const [total_weight, setTotal_weight] = useState(0);
  const [tru_box_v1, setTru_box_v1] = useState(0);
  const [tru_box_v2, setTru_box_v2] = useState(0);
  const [rest_box_v, setrest_box_v] = useState(0);
  const [rest_box_h, setrest_box_h] = useState(0);
  const [qty1, setqty1] = useState(0);
  const [qty2, setqty2] = useState(0);
  const [qty3, setqty3] = useState(0);
  const [qty4, setqty4] = useState(0);
  const [qty5, setqty5] = useState(0);
  const [qty6, setqty6] = useState(0);
  const [qty7, setqty7] = useState(0);
  const [qty8, setqty8] = useState(0);
  const [qty9, setqty9] = useState(0);
  const [qty10, setqty10] = useState(0);
  const [qty11, setqty11] = useState(0);
  const [qty12, setqty12] = useState(0);
  const [qty13, setqty13] = useState(0);
  const [qty14, setqty14] = useState(0);
  const [qty15, setqty15] = useState(0);
  const [d1, setd1] = useState(null);
  const [d2, setd2] = useState(null);
  const [d3, setd3] = useState(null);
  const [d4, setd4] = useState(null);
  const [d5, setd5] = useState(null);
  const [d6, setd6] = useState(null);
  const [d7, setd7] = useState(null);
  const [d8, setd8] = useState(null);
  const [d9, setd9] = useState(null);
  const [d10, setd10] = useState(null);
  const [d11, setd11] = useState(null);
  const [d12, setd12] = useState(null);
  const [d13, setd13] = useState(null);
  const [d14, setd14] = useState(null);
  const [d15, setd15] = useState(null);
  const [d16, setd16] = useState(null);
  const [k, setK] = useState(25);
  const [k2, setK2] = useState(50);
  const [k3, setK3] = useState(0);
  const [k4, setK4] = useState(0);
  const [A_hori2, SetA_hori2] = useState(0);
  const [A_bottom, SetA_bottom] = useState(0);

  const [B_hori1, SetB_hori1] = useState(0);
  const [B_hori2, SetB_hori2] = useState(0);
  const [B_bottom, SetB_bottom] = useState(0);
  const [B_top, SetB_top] = useState(0);
  const [C_hori1, SetC_hori1] = useState(0);
  const [C_hori2, SetC_hori2] = useState(0);
  const [C_bottom, SetC_bottom] = useState(0);
  const [C_top, SetC_top] = useState(0);
  const [D_hori1, SetD_hori1] = useState(0);
  const [D_hori2, SetD_hori2] = useState(0);
  const [D_bottom, SetD_bottom] = useState(0);
  const [D_top, SetD_top] = useState(0);
  const [E_hori1, SetE_hori1] = useState(0);
  const [E_hori2, SetE_hori2] = useState(0);
  const [E_bottom, SetE_bottom] = useState(0);
  const [E_top, SetE_top] = useState(0);
  const [F_hori1, SetF_hori1] = useState(0);
  const [F_hori2, SetF_hori2] = useState(0);
  const [F_bottom, SetF_bottom] = useState(0);
  const [F_top, SetF_top] = useState(0);
  const [G_hori1, SetG_hori1] = useState(0);
  const [G_hori2, SetG_hori2] = useState(0);
  const [G_bottom, SetG_bottom] = useState(0);
  const [G_top, SetG_top] = useState(0);
  const [H_hori1, SetH_hori1] = useState(0);
  const [H_hori2, SetH_hori2] = useState(0);
  const [H_bottom, SetH_bottom] = useState(0);
  const [H_top, SetH_top] = useState(0);
  const [I_hori1, SetI_hori1] = useState(0);
  const [I_hori2, SetI_hori2] = useState(0);
  const [I_bottom, SetI_bottom] = useState(0);
  const [I_top, SetI_top] = useState(0);
  const [J_hori1, SetJ_hori1] = useState(0);
  const [J_hori2, SetJ_hori2] = useState(0);
  const [J_bottom, SetJ_bottom] = useState(0);
  const [J_top, SetJ_top] = useState(0);
  const [K_hori1, SetK_hori1] = useState(0);
  const [K_hori2, SetK_hori2] = useState(0);
  const [K_bottom, SetK_bottom] = useState(0);
  const [K_top, SetK_top] = useState(0);
  const [L_hori1, SetL_hori1] = useState(0);
  const [L_hori2, SetL_hori2] = useState(0);
  const [L_bottom, SetL_bottom] = useState(0);
  const [L_top, SetL_top] = useState(0);
  const [M_hori1, SetM_hori1] = useState(0);
  const [M_hori2, SetM_hori2] = useState(0);
  const [M_bottom, SetM_bottom] = useState(0);
  const [M_top, SetM_top] = useState(0);
  const [N_hori1, SetN_hori1] = useState(0);
  const [N_hori2, SetN_hori2] = useState(0);
  const [N_bottom, SetN_bottom] = useState(0);
  const [N_top, SetN_top] = useState(0);
  const [O_hori1, SetO_hori1] = useState(0);
  const [O_hori2, SetO_hori2] = useState(0);
  const [O_bottom, SetO_bottom] = useState(0);
  const [O_top, SetO_top] = useState(0);
  const [P_hori1, SetP_hori1] = useState(0);
  const [P_hori2, SetP_hori2] = useState(0);
  const [P_bottom, SetP_bottom] = useState(0);
  const [P_top, SetP_top] = useState(0);
  const [f1_hori1, Setf1_hori1] = useState(0);
  const [f1_hori2, Setf1_hori2] = useState(0);
  const [f1_bottom, Setf1_bottom] = useState(0);
  const [f1_top, Setf1_top] = useState(0);
  const [Q_hori1, SetQ_hori1] = useState(0);
  const [Q_hori2, SetQ_hori2] = useState(0);
  const [Q_bottom, SetQ_bottom] = useState(0);
  const [Q_top, SetQ_top] = useState(0);
  const [Top_Rim_length, SetTop_Rim_length] = useState(0);
  const [Top_Rim_Width, SetTop_Rim_width] = useState(0);
  const [Top_Rim_Thickness, SetTop_Rim_thickness] = useState(0);
  const [Top_Rim_R, SetTop_Rim_R] = useState(0);
  const [Top_Rim_r, SetTop_Rim_r] = useState(0);
  const [Top_Rim_Angle, SetTop_Rim_Angle] = useState(0);
  const [Bottom_width, SetBottom_width] = useState(0);
  const [Bottom_length, SetBottom_length] = useState(0);
  const [Bottom_thickness, SetBottom_thickness] = useState(0);
  const [Trunion_Top_width, SetTrunion_Top_width] = useState(0);
  const [Trunion_Top_length, SetTrunion_Top_length] = useState(0);
  const [Trunion_Top_thickness, SetTrunion_Top_thickness] = useState(0);
  const [Trunion_Top_R, SetTrunion_Top_R] = useState(0);
  const [Trunion_bottom_width, SetTrunion_bottom_width] = useState(0);
  const [Trunion_bottom_length, SetTrunion_bottom_length] = useState(0);
  const [Trunion_bottom_R, SetTrunion_bottom_R] = useState(0);
  const [Resting_bottom_width, SetResting_bottom_width] = useState(0);
  const [Resting_bottom_length, SetResting_bottom_length] = useState(0);
  const [Resting_bottom_R, SetResting_bottom_R] = useState(0);

  const [S_hori1, SetS_hori1] = useState(0);
  const [S_hori2, SetS_hori2] = useState(0);
  const [S_bottom, SetS_bottom] = useState(0);
  const [S_top, SetS_top] = useState(0);
  const [T_hori1, SetT_hori1] = useState(0);
  const [T_hori2, SetT_hori2] = useState(0);
  const [T_bottom, SetT_bottom] = useState(0);
  const [T_top, SetT_top] = useState(0);
  const [U_hori1, SetU_hori1] = useState(0);
  const [U_hori2, SetU_hori2] = useState(0);
  const [U_bottom, SetU_bottom] = useState(0);
  const [U_top, SetU_top] = useState(0);
  const [V_hori1, SetV_hori1] = useState(0);
  const [V_hori2, SetV_hori2] = useState(0);
  const [V_bottom, SetV_bottom] = useState(0);
  const [V_top, SetV_top] = useState(0);
  const [W_hori1, SetW_hori1] = useState(0);
  const [W_hori2, SetW_hori2] = useState(0);
  const [W_bottom, SetW_bottom] = useState(0);
  const [W_top, SetW_top] = useState(0);
  const [X_hori1, SetX_hori1] = useState(0);
  const [X_hori2, SetX_hori2] = useState(0);
  const [X_bottom, SetX_bottom] = useState(0);
  const [X_top, SetX_top] = useState(0);
  const [dia_R, Setdia_R] = useState(0);
  const [dia_r, Setdia_r] = useState(0);

  const [output_show, setOutput_show] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [error_show, seterror_show] = useState({
    topdiameter: false,
    bottomdiameter: false,
    height: false,
    bottomlining: false,
    sidelining: false,
    freeboard: false,
    density: false,
    input1: false,
    input2: false,
    input3: false,
    input4: false,
    input5: false,
    input6: false,
    thickness1: false,
    thickness2: false,
    thickness3: false,
    thickness4: false,
    thickness5: false,
    thickness6: false,
    thickness7: false,
    thickness8: false,
    thickness9: false,
    thickness8: false,
    thickness9: false,
    thickness10: false,
    thickness11: false,
    thickness12: false,
    thickness13: false,
    thickness14: false,
    thickness15: false,
    tru_box_v1: false,
    tru_box_v2: false,
    rest_box_h: false,
    rest_box_v: false,
  });
  const handleOpen = () => {
    seterror("");
    let v = document.querySelector(".error_ccm");
    v.style.visibility = "hidden";
    setOpen(true);
  };
  const [openwar, setOpenwar] = React.useState(false);
  const handleClosewar = () => setOpenwar(false);
  const handleClose = () => setOpen(false);
  const [download, setdownload] = useState(false);
  const [error, seterror] = useState("");
  const isdisabled = !(
    topdiameter &&
    bottomdiameter &&
    height &&
    bottomlining &&
    sidelining &&
    freeboard &&
    density &&
    // input1 &&
    // input2 &&
    // input3 &&
    // input4 &&
    // input5 &&
    // input6 &&
    thickness1 &&
    thickness4 &&
    thickness8 &&
    tru_box_v2 &&
    thickness2 &&
    thickness5 &&
    thickness9 &&
    tru_box_v1 &&
    thickness3 &&
    thickness7 &&
    thickness10 &&
    rest_box_v &&
    thickness15 &&
    thickness11 &&
    thickness12 &&
    rest_box_h &&
    thickness13
  );

  const fun = () => {
    // seterror("Error : Enter the required values")
    // let v = document.querySelector(".error_ccm")
    // v.style.visibility = "initial"
    toast.error("Error : Enter the required values");
    seterror_show({
      ...error_show,
      topdiameter: true,
      bottomdiameter: true,
      height: true,
      bottomlining: true,
      sidelining: true,
      freeboard: true,
      density: true,
      input1: true,
      input2: true,
      input3: true,
      input4: true,
      input5: true,
      input6: true,
      thickness1: true,
      thickness2: true,
      thickness3: true,
      thickness4: true,
      thickness5: true,
      thickness6: true,
      thickness7: true,
      thickness8: true,
      thickness9: true,
      thickness8: true,
      thickness9: true,
      thickness10: true,
      thickness11: true,
      thickness12: true,
      thickness13: true,
      thickness14: true,
      thickness15: true,
      tru_box_v1: true,
      tru_box_v2: true,
      rest_box_h: true,
      rest_box_v: true,
    });
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
    ladle_ticket: 0,
  });

  const top_dia_mean = parseInt(topdiameter) + parseInt(thickness1);
  const degree_tan =
    (parseInt(topdiameter) - parseInt(bottomdiameter)) / (2 * parseInt(height));
  const cos_A =
    Math.cos((3.1416 / 180) * (Math.atan(degree_tan) * (3.1416 / 180))) -
    0.0013821705717152;

  const R2 = top_dia_mean / 2 / degree_tan / cos_A;
  const develop_angle = (top_dia_mean * 3.1416 * 360) / (3.1416 * R2 * 4);
  const dev_sin = Math.sin((Math.PI / 180) * develop_angle);

  const slant_height = height / cos_A;
  const r2 = R2 - slant_height;
  const dev_bottom = r2 * dev_sin * 2;
  const F959 = Math.sqrt(r2 * r2 - (dev_bottom / 2) * (dev_bottom / 2));
  const Radius_R = (top_dia_mean + thickness1 + 100) / 2;
  const top_rim_od = top_dia_mean + thickness1 + 100;
  const Radius_r = (parseFloat(top_rim_od) - parseFloat(2 * sidelining)) / 2;
  const tan_30 = Math.tan((3.1416 / 180) * 30);
  const cos_30 = Math.cos((3.1416 / 180) * 30);
  const I964 = parseFloat(Radius_r) - parseFloat(cos_30 * Radius_r);
  const J964 =
    Radius_R - Math.sqrt(Radius_R * Radius_R - (Radius_r / 2) * (Radius_r / 2));

  const result = async (event) => {
    // event.preventDefault();
    const inbetweenheight = height - bottomlining - freeboard;
    setInbetweenheight(inbetweenheight);
    const pieHby3 = (3.1416 / 3000) * inbetweenheight;
    setPieHby3(pieHby3.toFixed(3));

    const I14 = (0.5 * (topdiameter - bottomdiameter)) / inbetweenheight;
    const freeboardleveldiameter =
      topdiameter - 2 * sidelining - I14 * 2 * freeboard;
    setFreeboardleveldiameter(Math.round(freeboardleveldiameter));
    const bottomliningleveldiameter =
      I14 * 2 * bottomlining + (bottomdiameter - 2 * sidelining);
    setBottomliningleveldiameter(Math.round(bottomliningleveldiameter));
  };

  const r = Math.floor(bottomliningleveldiameter / 2);
  const R = Math.floor(freeboardleveldiameter / 2);
  const temp = ((R * R + R * r + r * r) / 1000000).toFixed(3);

  const result2 = async (event) => {
    // event.preventDefault();
    const s13 = parseInt(input1) + parseInt(input5) + parseInt(input5);
    const s14 = parseInt(input2) + parseInt(input5) + parseInt(input5);
    const s16 = 0.5 * ((s13 - s14) / parseInt(input3));
    const output1 = s16 * 2 * input6 + s13;
    const output2 = s14 - s16 * 2 * input4;
    const output3 = parseInt(input3) + parseInt(input4) + parseInt(input6);
    setOutput1(Math.round(output1));
    setOutput2(Math.round(output2));
    setOutput3(Math.round(output3));
    setOutputlining1(((3.1416 / 3000) * input3).toFixed(3));
    setOutputlining2(input1 / 2);
    setOutputlining3(Math.round(input2 / 2));
    const temp2 =
      (outputlining2 * outputlining2 +
        outputlining2 * outputlining3 +
        outputlining3 * outputlining3) /
      1000000;
  };

  const result3 = async (event) => {
    // event.preventDefault();

    const result_ticket = await validate_ticket();
    if (result_ticket === -1) {
      toast.error("You don't have tickets");
      setOpen(false);
      getUserData();
      return;
    }

    result();
    result2();
    const length1 = Math.round(R2 * dev_sin * 2);
    const width1 = parseInt(slant_height) + (parseInt(r2) - parseInt(F959));
    const volumn1 = ((thickness1 * length1 * width1) / 1000000).toFixed(2);
    const weight1 = Math.round(
      (thickness1 * length1 * width1 * 1 * 7.864) / 1000000
    );

    const width2 = bottomdiameter;
    const length2 = bottomdiameter;

    const weight2 = Math.round(
      (thickness2 * length2 * width2 * 1 * 7.864) / 1000000
    );

    const width3 = Math.round((Radius_R - Radius_r + (I964 - J964)) * 6 + J964);

    const length3 = Radius_R;
    setqty3(1);
    setqty2(1);
    setqty1(1);
    setqty4(2);
    setqty5(2);
    setqty6(4);
    setqty7(2);
    setqty8(2);
    setqty9(4);
    setqty10(2);
    setqty11(12);
    setqty12(1);
    setqty13(1);
    setqty14(0);
    setqty15(2);

    const q3 = 1;
    const weight3 = Math.round(
      (thickness3 * length3 * width3 * q3 * 7.864) / 1000000
    );

    const N972 = topdiameter / 2 + thickness1;
    const H972 = (topdiameter - bottomdiameter) / (2 * height);
    const K972 = (height - (height / 3 - tru_box_v2 / 2)) * 2;
    const J972 =
      parseInt(bottomdiameter) + parseInt(thickness1) + parseInt(thickness1);
    const I972 = (J972 + H972 * K972) / 2;
    const width4 = parseInt(tru_box_v1) + parseInt(N972) - parseInt(I972);
    const length4 = tru_box_v2;
    const q4 = 2;
    const weight4 = Math.round(
      (thickness4 * length4 * width4 * q4 * 7.864) / 1000000
    );

    const F972 = height - (height / 3 - tru_box_v2 / 2);
    const I973 = (J972 + H972 * (F972 - tru_box_v2 + thickness5) * 2) / 2;
    const width5 = parseInt(tru_box_v1) + parseInt(N972) - parseInt(I973);
    const length5 = tru_box_v2;
    const q5 = 2;
    const weight5 = Math.round(
      (thickness5 * length5 * width5 * q5 * 7.864) / 1000000
    );

    const q6 = 4;
    const width6 = parseInt(tru_box_v1) + parseInt(N972) - parseInt(I973);
    const length6 =
      parseInt(tru_box_v2) - parseInt(thickness5) - parseInt(thickness5);
    const weight6 = Math.floor(
      (thickness7 * length6 * width6 * q6 * 7.864) / 1000000
    );

    const q7 = 2;
    const width7 =
      parseInt(tru_box_v2) - parseInt(thickness5) - parseInt(thickness5);
    const length7 =
      parseInt(tru_box_v2) - parseInt(thickness5) - parseInt(thickness5);
    const weight7 = Math.round(
      (thickness7 * length7 * width7 * q7 * 7.864) / 1000000
    );

    const q8 = 2;
    const F975 =
      parseInt(F972) -
      parseInt(tru_box_v2) +
      parseInt(thickness5) -
      parseInt(rest_box_v) +
      parseInt(thickness10);
    const I975 = (J972 + H972 * F975 * 2) / 2;
    const width8 = parseInt(tru_box_v1) + parseInt(N972) - parseInt(I975);
    const length8 = tru_box_v2;
    const volumn2 = ((7.864 * length2 * width2 * thickness2) / 1000000).toFixed(
      2
    );
    const weight8 = Math.round(
      (thickness8 * length8 * width8 * q8 * 7.864) / 1000000
    );

    const q9 = 4;
    const width9 = parseInt(tru_box_v1) + parseInt(N972) - parseInt(I975);
    const length9 = parseInt(rest_box_v) - parseInt(thickness9);
    const weight9 = Math.round(
      (thickness9 * length9 * width9 * q9 * 7.864) / 1000000
    );

    const q10 = 2;
    const width10 = length9;
    const length10 = length7;
    const weight10 = Math.round(
      (thickness10 * length10 * width10 * q10 * 7.864) / 1000000
    );

    const q11 = 12;
    const length11 = 350;
    const width11 = 200;
    const weight11 = Math.round(
      (thickness11 * length11 * width11 * q11 * 7.864) / 1000000
    );

    const q12 = 1;
    const width12 = 50;
    const U100 =
      parseInt(tru_box_v2) - parseInt(thickness4) - parseInt(thickness4);
    const length12 = Math.ceil(
      parseInt(((R2 * dev_sin * 2) / 2) * 2 * 2) + parseInt(8 * U100)
    );
    const weight12 =
      Math.floor((thickness12 * length12 * width12 * q12 * 7.864) / 1000000) +
      1;

    const q13 = 1;
    const width13 = (3.1416 / 4) * thickness13;
    const length13 = 1500;
    const weight13 = Math.round(
      (thickness13 * length13 * width13 * q13 * 7.864) / 1000000
    );

    const q14 = 0;
    const weight14 = Math.round(
      (thickness14 * length14 * width14 * q14 * 7.864) / 1000000
    );

    const q15 = 2;
    const width15 = ((3.1416 / 4) * thickness15).toFixed(2);
    const length15 = parseInt(width5) + parseInt(thickness7) + parseInt(200);

    const weight15 = Math.round(
      (thickness15 * length15 * width15 * q15 * 7.864) / 1000000
    );
    setLength1(length1);
    setWidth1(width1);
    setVolumn1(volumn1);
    setLength2(length2);
    setWidth2(width2);
    setwidth4(width4);
    setwidth5(width5);
    setwidth6(width6);
    setwidth7(width7);
    setwidth8(width8);
    setwidth9(width9);
    setwidth10(width10);
    setwidth11(200);
    setwidth12(50);
    setwidth13(width13);
    setwidth15(width15);
    setLength7(length7);
    setLength8(length8);
    setLength9(length9);
    setLength10(length10);
    setLength11(350);
    setLength12(length12);
    setLength13(1500);
    setLength15(length15);
    setVolumn2(volumn2);
    setLength4(length4);
    setLength6(length6);
    setweight1(weight1);
    setweight2(weight2);
    setweight3(weight3);
    setweight4(weight4);
    setweight5(weight5);
    setweight6(weight6);
    setweight7(weight7);
    setweight8(weight8);
    setweight9(weight9);
    setweight10(weight10);
    setweight11(weight11);
    setweight12(weight12);
    setweight13(weight13);
    setweight14(weight14);
    setweight15(weight15);
    setwidth3(width3);
    setLength3(length3);
    setLength5(length5);
    setTotal_weight(
      weight1 +
        weight2 +
        weight3 +
        weight4 +
        weight5 +
        weight6 +
        weight7 +
        weight8 +
        weight9 +
        weight10 +
        weight11 +
        weight12 +
        weight13 +
        weight14 +
        weight15
    );

    const d1 = (parseFloat(topdiameter) + 2 * parseFloat(thickness1) + 100) / 2;
    setd1(d1);
    setd2(d1);
    const E968 =
      (parseFloat(top_dia_mean) +
        parseFloat(thickness1) +
        100 -
        2 * sidelining) /
      2;
    // const J964 = d1-Math.sqrt((d1*d1)-((E968/2)*(E968/2)))
    const d3 = (d1 - E968 + (E968 - cos_30 * E968 - J964)) * 6 + J964;
    setd3(Math.round(d3));
    const d4 =
      (parseFloat(top_dia_mean) +
        parseFloat(thickness1) +
        100 -
        2 * sidelining) /
      2;
    setd4(d4);
    setd5(bottomdiameter);
    setd6(bottomdiameter);
    const d7 =
      parseFloat(tru_box_v2) - parseFloat(thickness5) - parseFloat(thickness5);
    setd7(d7);

    const Q931 = Math.floor((R2 * dev_sin * 2) / 2 / 200);
    const d8 = (R2 * dev_sin * 2) / 2 - 200 * Q931;
    setd8(Math.round(d8));

    const d9 = ((R2 * dev_sin * 2) / 2) * 2 - 2 * d8;
    setd9(d9);

    const d10 =
      R2 -
      Math.sqrt(R2 * R2 - ((R2 * dev_sin * 2) / 2) * ((R2 * dev_sin * 2) / 2));
    setd10(Math.round(d10));

    const d11 = slant_height + (r2 - F959);
    setd11(Math.round(d11));

    const d13 = (r2 * dev_sin * 2) / 2;
    setd13(Math.round(d13));

    const d12 = (((R2 * dev_sin * 2) / 2) * 2) / 2 - d13;
    setd12(Math.round(d12));

    const d14 = ((R2 * dev_sin * 2) / 2) * 2;
    setd14(Math.round(d14));

    setd15(Math.round(R2));

    const d16 = ((R2 * dev_sin * 2) / 2 / 200) * 2;
    setd16(Math.floor(d16));

    const T932 = (R2 * dev_sin * 2) / 2;
    const k932 = Math.round(r2 * dev_sin * 2);
    let op = 0;
    const W932 = Math.round(r2 - Math.sqrt(r2 * r2 - (k932 / 2) * (k932 / 2)));
    const A_bottom =
      r2 * Math.cos((180 / Math.PI) * (A_hori2 / r2)) - (r2 - W932);
    SetA_bottom(A_bottom);

    if (d8 + 200 > (R2 * dev_sin * 2) / 2) {
      const B_hori = (R2 * dev_sin * 2) / 2 - d8;
      op = B_hori;
      SetB_hori1(Math.round(B_hori));
    } else {
      const B_hori = d8 + 200;
      op = B_hori;
      SetB_hori1(Math.round(B_hori));
    }

    const N933 =
      (R2 * dev_sin * 2) / 2 -
      ((R2 * dev_sin * 2) / 2 - 200 * Math.floor((R2 * dev_sin * 2) / 2 / 200));
    const B_top = R2 - Math.sqrt(R2 * R2 - N933 * N933);
    SetB_top(Math.round(B_top));

    const Q932 = 0;
    const X932 = 0;
    let b_hori2 = 0;
    if (200 * (Q932 + 1) > (R2 * dev_sin * 2) / 2) {
      b_hori2 = (R2 * dev_sin * 2) / 2 - X932;
      SetB_hori2(b_hori2);
    } else {
      b_hori2 = 200 * (Q932 + 1);
      SetB_hori2(b_hori2);
    }

    const B_bottom = r2 * Math.cos(b_hori2 / r2) - (r2 - W932);
    SetB_bottom(Math.round(B_bottom));

    let c_hori1 = 0;
    if (B_hori1 + 200 > T932) {
      const C_hori1 = (R2 * dev_sin * 2) / 2 - 200 - op;
      c_hori1 = C_hori1;
      SetC_hori1(Math.round(C_hori1));
    } else {
      const C_hori1 = op + 200;
      c_hori1 = C_hori1;
      SetC_hori1(Math.round(C_hori1));
    }

    const C_top =
      R2 -
      Math.sqrt(
        R2 * R2 -
          ((R2 * dev_sin * 2) / 2 - 200 - d8) *
            ((R2 * dev_sin * 2) / 2 - 200 - d8)
      );
    SetC_top(Math.round(C_top));

    const Q934 = 2;
    let X933 = 0;
    const Q933 = 1;
    if (200 * Q933 > T932) {
      X933 = T932 - X932;
    } else {
      X933 = 200 * Q933;
    }
    let c_hori2 = 0;

    if (200 * Q934 > T932) {
      c_hori2 = T932 - X933;
      SetC_hori2(c_hori2);
    } else {
      c_hori2 = 200 * Q934;
      SetC_hori2(c_hori2);
    }

    const Z935 = Math.cos(c_hori2 / r2);
    const c_bottom = r2 * Z935 - (r2 - W932);
    SetC_bottom(Math.round(c_bottom));

    let d_hori1 = 0;
    if (C_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const D_hori1 = (R2 * dev_sin * 2) / 2 - 200 - 200 - c_hori1;
      d_hori1 = D_hori1;
      SetD_hori1(Math.round(D_hori1));
    } else {
      const D_hori1 = c_hori1 + 200;
      d_hori1 = D_hori1;
      SetD_hori1(Math.round(D_hori1));
    }

    const N935 = (R2 * dev_sin * 2) / 2 - 200 - 200 - d8;
    const d_top = R2 - Math.sqrt(R2 * R2 - N935 * N935);
    SetD_top(Math.round(d_top));

    let d_hori2 = 0;
    if (200 * (Q932 + 3) > (r2 * dev_sin * 2) / 2) {
      const D_hori2 = (r2 * dev_sin * 2) / 2 - C_hori2;
      d_hori2 = D_hori2;
      SetD_hori2(D_hori2);
    } else {
      const D_hori2 = 200 * 3;
      d_hori2 = D_hori2;
      SetD_hori2(D_hori2);
    }

    const d_bottom = r2 * Math.cos(d_hori2 / r2) - (r2 - A_bottom);
    SetD_bottom(Math.round(d_bottom));

    let e_hori1 = 0;
    if (d_hori1 + 200 > (R2 * dev_sin * 2) / 2 / 2) {
      const E_hori1 = (R2 * dev_sin * 2) / 2 - 200 - 200 - 200 - d_hori1;
      e_hori1 = E_hori1;
      SetE_hori1(Math.round(E_hori1));
    } else {
      const E_hori1 = d_hori1 + 200;
      e_hori1 = E_hori1;
      SetE_hori1(Math.round(E_hori1));
    }

    const N936 = (R2 * dev_sin * 2) / 2 - 200 - 200 - 200 - d8;
    const e_top = R2 - Math.sqrt(R2 * R2 - N936 * N936);
    SetE_top(Math.round(e_top));

    let e_hori2 = 0;
    if (200 * 4 > (r2 * dev_sin * 2) / 2) {
      const E_hori2 = (r2 * dev_sin * 2) / 2 - d_hori2;
      e_hori2 = E_hori2;
      SetE_hori2(E_hori2);
    } else {
      const E_hori2 = 200 * 4;
      e_hori2 = E_hori2;
      SetE_hori2(E_hori2);
    }

    const e_bottom = r2 * Math.cos(e_hori2 / r2) - (r2 - A_bottom);
    SetE_bottom(Math.round(e_bottom));

    let P937;
    if (E_hori1 + 200 > (R2 * dev_sin * 2) / 2 / 2) {
      P937 = (R2 * dev_sin * 2) / 2 / 2 - 200 - 200 - 200 - 200 - e_hori1;
    } else {
      P937 = e_hori1 + 200;
    }

    let f1_hori1 = 0;
    if (e_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const F1_hori1 = (R2 * dev_sin * 2) / 2 - 800 - g_hori1;
      f1_hori1 = F1_hori1;
      Setf1_hori1(Math.round(f1_hori1));
    } else {
      const F1_hori1 = e_hori1 + 200;
      f1_hori1 = F1_hori1;
      Setf1_hori1(Math.round(F1_hori1));
    }

    const N1 = (R2 * dev_sin * 2) / 2 - 800 - d8;
    const f1_top = R2 - Math.sqrt(R2 * R2 - N1 * N1);
    Setf1_top(Math.round(f1_top));

    let f1_hori2 = 0;
    if (200 * 5 > (r2 * dev_sin * 2) / 2) {
      const F1_hori2 = (r2 * dev_sin * 2) / 2 - e_hori2;
      f1_hori2 = F1_hori2;
      Setf1_hori2(F1_hori2);
    } else {
      const F1_hori2 = 200 * 5;
      f1_hori2 = F1_hori2;
      Setf1_hori2(F1_hori2);
    }

    const F1_bottom = r2 * Math.cos(f1_hori2 / r2) - (r2 - A_bottom);
    Setf1_bottom(Math.floor(F1_bottom));

    const O932 = (R2 * dev_sin * 2) / 2;
    let f_hori1;
    if (P937 + 200 > O932) {
      const F_hori1 =
        (R2 * dev_sin * 2) / 2 / 2 - 200 - 200 - 200 - 200 - 200 - P937;
      f_hori1 = F_hori1;
      SetF_hori1(Math.round(F_hori1));
    } else {
      const F_hori1 = P937 + 200;
      f_hori1 = F_hori1;
      SetF_hori1(Math.round(F_hori1));
    }

    const N938 = (R2 * dev_sin * 2) / 2 - 1000 - d8;
    const F_top = R2 - Math.sqrt(R2 * R2 - N938 * N938);
    SetF_top(Math.round(F_top));

    let X937;
    if (200 * 5 > T932) {
      X937 = T932 - e_hori2;
    } else {
      X937 = 200 * 5;
    }

    let f_hori2;
    if (200 * 6 > T932) {
      const F_hori2 = T932 - X937;
      f_hori2 = F_hori2;
      SetF_hori2(F_hori2);
    } else {
      const F_hori2 = 200 * 6;
      f_hori2 = F_hori2;
      SetF_hori2(F_hori2);
    }

    const F_bottom = r2 * Math.cos(f_hori2 / r2) - (r2 - A_bottom);
    SetF_bottom(Math.round(F_bottom));

    let g_hori1 = 0;
    if (f_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const G_hori1 = (R2 * dev_sin * 2) / 2 - 200 - 200 - 200 - f_hori1;
      g_hori1 = G_hori1;
      SetG_hori1(Math.round(G_hori1));
    } else {
      const G_hori1 = f_hori1 + 200;
      g_hori1 = G_hori1;
      SetG_hori1(Math.round(G_hori1));
    }

    const N937 = (R2 * dev_sin * 2) / 2 - 1200 - d8;
    const g_top = R2 - Math.sqrt(R2 * R2 - N937 * N937);
    SetG_top(Math.round(g_top));

    let g_hori2 = 0;
    if (200 * 7 > (r2 * dev_sin * 2) / 2) {
      const G_hori2 = (r2 * dev_sin * 2) / 2 - f_hori2;
      g_hori2 = G_hori2;
      SetG_hori2(G_hori2);
    } else {
      const G_hori2 = 200 * 7;
      g_hori2 = G_hori2;
      SetG_hori2(G_hori2);
    }

    const G_bottom = r2 * Math.cos(g_hori2 / r2) - (r2 - A_bottom);
    SetG_bottom(Math.floor(G_bottom));

    let h_hori1 = 0;
    if (g_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const H_hori1 = (R2 * dev_sin * 2) / 2 - 1600 - g_hori1;
      h_hori1 = H_hori1;
      SetH_hori1(Math.round(H_hori1));
    } else {
      const H_hori1 = g_hori1 + 200;
      h_hori1 = H_hori1;
      SetH_hori1(Math.round(H_hori1));
    }

    const N939 = (R2 * dev_sin * 2) / 2 - 1400 - d8;
    const h_top = R2 - Math.sqrt(R2 * R2 - N939 * N939);
    SetH_top(Math.round(h_top));

    let h_hori2 = 0;
    if (200 * 8 > (r2 * dev_sin * 2) / 2) {
      const H_hori2 = (r2 * dev_sin * 2) / 2 - g_hori2;
      h_hori2 = H_hori2;
      SetH_hori2(H_hori2);
    } else {
      const H_hori2 = 200 * 8;
      h_hori2 = H_hori2;
      SetH_hori2(H_hori2);
    }

    const H_bottom = r2 * Math.cos(h_hori2 / r2) - (r2 - A_bottom);
    SetH_bottom(Math.floor(H_bottom));

    let i_hori1 = 0;
    if (h_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const I_hori1 = (R2 * dev_sin * 2) / 2 - 1800 - h_hori1;
      i_hori1 = I_hori1;
      SetI_hori1(Math.round(I_hori1));
    } else {
      const I_hori1 = h_hori1 + 200;
      i_hori1 = I_hori1;
      SetI_hori1(Math.round(I_hori1));
    }

    let j_hori1 = 0;
    if (i_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const J_hori1 = (R2 * dev_sin * 2) / 2 - 2000 - i_hori1;
      j_hori1 = J_hori1;
      SetJ_hori1(Math.round(J_hori1));
    } else {
      const J_hori1 = i_hori1 + 200;
      j_hori1 = J_hori1;
      SetJ_hori1(Math.round(J_hori1));
    }

    let k_hori1 = 0;
    if (j_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const K_hori1 = (R2 * dev_sin * 2) / 2 - 2200 - j_hori1;
      k_hori1 = K_hori1;
      SetK_hori1(Math.round(K_hori1));
    } else {
      const K_hori1 = j_hori1 + 200;
      k_hori1 = K_hori1;
      SetK_hori1(Math.round(K_hori1));
    }

    let l_hori1 = 0;
    if (k_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const L_hori1 = (R2 * dev_sin * 2) / 2 - 2400 - k_hori1;
      l_hori1 = L_hori1;
      SetL_hori1(Math.round(L_hori1));
    } else {
      const L_hori1 = k_hori1 + 200;
      l_hori1 = L_hori1;
      SetL_hori1(Math.round(L_hori1));
    }

    let m_hori1 = 0;
    if (l_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const M_hori1 = (R2 * dev_sin * 2) / 2 - 2600 - l_hori1;
      m_hori1 = M_hori1;
      SetM_hori1(Math.round(M_hori1));
    } else {
      const M_hori1 = l_hori1 + 200;
      m_hori1 = M_hori1;
      SetM_hori1(Math.round(M_hori1));
    }

    let n_hori1 = 0;
    if (m_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const N_hori1 = (R2 * dev_sin * 2) / 2 - 2800 - m_hori1;
      n_hori1 = N_hori1;
      SetN_hori1(Math.round(N_hori1));
    } else {
      const N_hori1 = m_hori1 + 200;
      n_hori1 = N_hori1;
      SetN_hori1(Math.round(N_hori1));
    }

    let o_hori1 = 0;
    if (n_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const O_hori1 = (R2 * dev_sin * 2) / 2 - 3000 - n_hori1;
      o_hori1 = O_hori1;
      SetO_hori1(Math.round(O_hori1));
    } else {
      const O_hori1 = n_hori1 + 200;
      o_hori1 = O_hori1;
      SetO_hori1(Math.round(O_hori1));
    }

    let p_hori1 = 0;
    if (o_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const P_hori1 = (R2 * dev_sin * 2) / 2 - 3200 - o_hori1;
      p_hori1 = P_hori1;
      SetP_hori1(Math.round(P_hori1));
    } else {
      const P_hori1 = o_hori1 + 200;
      p_hori1 = P_hori1;
      SetP_hori1(Math.round(P_hori1));
    }

    let q_hori1 = 0;
    if (p_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const Q_hori1 = (R2 * dev_sin * 2) / 2 - 3400 - p_hori1;
      q_hori1 = Q_hori1;
      SetQ_hori1(Math.round(Q_hori1));
    } else {
      const Q_hori1 = p_hori1 + 200;
      q_hori1 = Q_hori1;
      SetQ_hori1(Math.round(Q_hori1));
    }

    let s_hori1 = 0;
    if (q_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const S_hori1 = (R2 * dev_sin * 2) / 2 - 3600 - q_hori1;
      s_hori1 = S_hori1;
      SetS_hori1(Math.round(S_hori1));
    } else {
      const S_hori1 = q_hori1 + 200;
      s_hori1 = S_hori1;
      SetS_hori1(Math.round(S_hori1));
    }

    let t_hori1 = 0;
    if (s_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const T_hori1 = (R2 * dev_sin * 2) / 2 - 3800 - s_hori1;
      t_hori1 = T_hori1;
      SetT_hori1(Math.round(T_hori1));
    } else {
      const T_hori1 = s_hori1 + 200;
      t_hori1 = T_hori1;
      SetT_hori1(Math.round(T_hori1));
    }

    let u_hori1 = 0;
    if (t_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const U_hori1 = (R2 * dev_sin * 2) / 2 - 4000 - t_hori1;
      u_hori1 = U_hori1;
      SetU_hori1(Math.round(U_hori1));
    } else {
      const U_hori1 = t_hori1 + 200;
      u_hori1 = U_hori1;
      SetU_hori1(Math.round(U_hori1));
    }

    let v_hori1 = 0;
    if (u_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const V_hori1 = (R2 * dev_sin * 2) / 2 - 4200 - u_hori1;
      v_hori1 = V_hori1;
      SetV_hori1(Math.round(V_hori1));
    } else {
      const V_hori1 = u_hori1 + 200;
      v_hori1 = V_hori1;
      SetV_hori1(Math.round(V_hori1));
    }

    let w_hori1 = 0;
    if (v_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const W_hori1 = (R2 * dev_sin * 2) / 2 - 4400 - v_hori1;
      w_hori1 = W_hori1;
      SetW_hori1(Math.round(W_hori1));
    } else {
      const W_hori1 = v_hori1 + 200;
      w_hori1 = W_hori1;
      SetW_hori1(Math.round(W_hori1));
    }

    let x_hori1 = 0;
    if (w_hori1 + 200 > (R2 * dev_sin * 2) / 2) {
      const X_hori1 = (R2 * dev_sin * 2) / 2 - 4600 - w_hori1;
      x_hori1 = X_hori1;
      SetX_hori1(Math.round(X_hori1));
    } else {
      const X_hori1 = w_hori1 + 200;
      x_hori1 = X_hori1;
      SetX_hori1(Math.round(X_hori1));
    }

    const N940 = (R2 * dev_sin * 2) / 2 - 1600 - d8;
    const i_top = R2 - Math.sqrt(R2 * R2 - N940 * N940);
    SetI_top(Math.round(i_top));

    const N941 = (R2 * dev_sin * 2) / 2 - 1800 - d8;
    const j_top = R2 - Math.sqrt(R2 * R2 - N941 * N941);
    SetJ_top(Math.round(j_top));

    const N942 = (R2 * dev_sin * 2) / 2 - 2000 - d8;
    const k_top = R2 - Math.sqrt(R2 * R2 - N942 * N942);
    SetK_top(Math.round(k_top));

    const N943 = (R2 * dev_sin * 2) / 2 - 2200 - d8;
    const l_top = R2 - Math.sqrt(R2 * R2 - N943 * N943);
    SetL_top(Math.round(l_top));

    const N944 = (R2 * dev_sin * 2) / 2 - 2400 - d8;
    const m_top = R2 - Math.sqrt(R2 * R2 - N944 * N944);
    SetM_top(Math.round(m_top));

    const N945 = (R2 * dev_sin * 2) / 2 - 2600 - d8;
    const N_top = R2 - Math.sqrt(R2 * R2 - N945 * N945);
    SetN_top(Math.round(N_top));

    const N946 = (R2 * dev_sin * 2) / 2 - 2800 - d8;
    const O_top = R2 - Math.sqrt(R2 * R2 - N946 * N946);
    SetO_top(Math.round(O_top));

    const N947 = (R2 * dev_sin * 2) / 2 - 3000 - d8;
    const P_top = R2 - Math.sqrt(R2 * R2 - N947 * N947);
    SetP_top(Math.round(P_top));

    const N948 = (R2 * dev_sin * 2) / 2 - 3200 - d8;
    const Q_top = R2 - Math.sqrt(R2 * R2 - N948 * N948);
    SetQ_top(Math.round(Q_top));

    const N949 = (R2 * dev_sin * 2) / 2 - 3400 - d8;
    const S_top = R2 - Math.sqrt(R2 * R2 - N949 * N949);
    SetS_top(Math.round(S_top));

    const N950 = (R2 * dev_sin * 2) / 2 - 3600 - d8;
    const T_top = R2 - Math.sqrt(R2 * R2 - N950 * N950);
    SetT_top(Math.round(T_top));

    const N951 = (R2 * dev_sin * 2) / 2 - 3800 - d8;
    const U_top = R2 - Math.sqrt(R2 * R2 - N951 * N951);
    SetU_top(Math.round(U_top));

    const N952 = (R2 * dev_sin * 2) / 2 - 4000 - d8;
    const V_top = R2 - Math.sqrt(R2 * R2 - N952 * N952);
    SetV_top(Math.round(V_top));

    const N953 = (R2 * dev_sin * 2) / 2 - 4200 - d8;
    const W_top = R2 - Math.sqrt(R2 * R2 - N953 * N953);
    SetW_top(Math.round(W_top));

    const N954 = (R2 * dev_sin * 2) / 2 - 4400 - d8;
    const X_top = R2 - Math.sqrt(R2 * R2 - N954 * N954);
    SetX_top(Math.round(X_top));

    let i_hori2 = 0;
    if (200 * 9 > (r2 * dev_sin * 2) / 2) {
      const I_hori2 = (r2 * dev_sin * 2) / 2 - h_hori2;
      i_hori2 = I_hori2;
      SetI_hori2(I_hori2);
    } else {
      const I_hori2 = 200 * 9;
      i_hori2 = I_hori2;
      SetI_hori2(I_hori2);
    }

    let j_hori2 = 0;
    if (200 * 10 > (r2 * dev_sin * 2) / 2) {
      const J_hori2 = (r2 * dev_sin * 2) / 2 - i_hori2;
      j_hori2 = J_hori2;
      SetJ_hori2(J_hori2);
    } else {
      const J_hori2 = 200 * 10;
      j_hori2 = J_hori2;
      SetJ_hori2(J_hori2);
    }

    let k_hori2 = 0;
    if (200 * 11 > (r2 * dev_sin * 2) / 2) {
      const K_hori2 = (r2 * dev_sin * 2) / 2 - j_hori2;
      k_hori2 = K_hori2;
      SetK_hori2(K_hori2);
    } else {
      const K_hori2 = 200 * 11;
      k_hori2 = K_hori2;
      SetK_hori2(K_hori2);
    }

    let l_hori2 = 0;
    if (200 * 12 > (r2 * dev_sin * 2) / 2) {
      const L_hori2 = (r2 * dev_sin * 2) / 2 - k_hori2;
      l_hori2 = L_hori2;
      SetL_hori2(Math.round(L_hori2));
    } else {
      const L_hori2 = 200 * 12;
      l_hori2 = L_hori2;
      SetL_hori2(Math.round(L_hori2));
    }

    let m_hori2 = 0;
    if (200 * 13 > (r2 * dev_sin * 2) / 2) {
      const M_hori2 = (r2 * dev_sin * 2) / 2 - l_hori2;
      m_hori2 = M_hori2;
      SetM_hori2(Math.round(M_hori2));
    } else {
      const M_hori2 = 200 * 13;
      m_hori2 = M_hori2;
      SetM_hori2(Math.round(M_hori2));
    }

    let n_hori2 = 0;
    if (200 * 14 > (r2 * dev_sin * 2) / 2) {
      const N_hori2 = (r2 * dev_sin * 2) / 2 - m_hori2;
      n_hori2 = N_hori2;
      SetN_hori2(Math.round(N_hori2));
    } else {
      const N_hori2 = 200 * 14;
      n_hori2 = N_hori2;
      SetN_hori2(Math.round(N_hori2));
    }

    let o_hori2 = 0;
    if (200 * 15 > (r2 * dev_sin * 2) / 2) {
      const O_hori2 = (r2 * dev_sin * 2) / 2 - n_hori2;
      o_hori2 = O_hori2;
      SetO_hori2(O_hori2);
    } else {
      const O_hori2 = 200 * 15;
      o_hori2 = O_hori2;
      SetO_hori2(O_hori2);
    }

    let p_hori2 = 0;
    if (200 * 16 > (r2 * dev_sin * 2) / 2) {
      const P_hori2 = (r2 * dev_sin * 2) / 2 - o_hori2;
      p_hori2 = P_hori2;
      SetP_hori2(Math.round(P_hori2));
    } else {
      const P_hori2 = 200 * 16;
      p_hori2 = P_hori2;
      SetP_hori2(P_hori2);
    }

    let q_hori2 = 0;
    if (200 * 17 > (r2 * dev_sin * 2) / 2) {
      const Q_hori2 = (r2 * dev_sin * 2) / 2 - p_hori2;
      q_hori2 = Q_hori2;
      SetQ_hori2(Math.round(Q_hori2));
    } else {
      const Q_hori2 = 200 * 17;
      q_hori2 = Q_hori2;
      SetQ_hori2(Q_hori2);
    }

    let s_hori2 = 0;
    if (200 * 18 > (r2 * dev_sin * 2) / 2) {
      const S_hori2 = (r2 * dev_sin * 2) / 2 - q_hori2;
      s_hori2 = S_hori2;
      SetS_hori2(Math.round(S_hori2));
    } else {
      const S_hori2 = 200 * 18;
      s_hori2 = S_hori2;
      SetS_hori2(S_hori2);
    }

    let t_hori2 = 0;
    if (200 * 19 > (r2 * dev_sin * 2) / 2) {
      const T_hori2 = (r2 * dev_sin * 2) / 2 - s_hori2;
      t_hori2 = T_hori2;
      SetT_hori2(Math.round(T_hori2));
    } else {
      const T_hori2 = 200 * 19;
      t_hori2 = T_hori2;
      SetT_hori2(T_hori2);
    }

    let u_hori2 = 0;
    if (200 * 20 > (r2 * dev_sin * 2) / 2) {
      const U_hori2 = (r2 * dev_sin * 2) / 2 - t_hori2;
      u_hori2 = U_hori2;
      SetU_hori2(Math.round(U_hori2));
    } else {
      const U_hori2 = 200 * 20;
      u_hori2 = U_hori2;
      SetU_hori2(U_hori2);
    }

    let v_hori2 = 0;
    if (200 * 21 > (r2 * dev_sin * 2) / 2) {
      const V_hori2 = (r2 * dev_sin * 2) / 2 - u_hori2;
      v_hori2 = V_hori2;
      SetV_hori2(Math.round(V_hori2));
    } else {
      const V_hori2 = 200 * 21;
      v_hori2 = V_hori2;
      SetV_hori2(V_hori2);
    }

    let w_hori2 = 0;
    if (200 * 22 > (r2 * dev_sin * 2) / 2) {
      const W_hori2 = (r2 * dev_sin * 2) / 2 - v_hori2;
      w_hori2 = W_hori2;
      SetW_hori2(Math.round(W_hori2));
    } else {
      const W_hori2 = 200 * 22;
      w_hori2 = W_hori2;
      SetW_hori2(W_hori2);
    }

    let x_hori2 = 0;
    if (200 * 23 > (r2 * dev_sin * 2) / 2) {
      const X_hori2 = (r2 * dev_sin * 2) / 2 - w_hori2;
      x_hori2 = X_hori2;
      SetX_hori2(Math.round(X_hori2));
    } else {
      const X_hori2 = 200 * 23;
      x_hori2 = X_hori2;
      SetX_hori2(X_hori2);
    }

    const I_bottom = r2 * Math.cos(i_hori2 / r2) - (r2 - A_bottom);
    SetI_bottom(Math.floor(I_bottom));

    const J_bottom = r2 * Math.cos(j_hori2 / r2) - (r2 - A_bottom);
    SetJ_bottom(Math.floor(J_bottom));

    const K_bottom = r2 * Math.cos(k_hori2 / r2) - (r2 - A_bottom);
    SetK_bottom(Math.floor(K_bottom));

    const L_bottom = r2 * Math.cos(l_hori2 / r2) - (r2 - A_bottom);
    SetL_bottom(Math.floor(L_bottom));

    const M_bottom = r2 * Math.cos(m_hori2 / r2) - (r2 - A_bottom);
    SetM_bottom(Math.floor(M_bottom));

    const N_bottom = r2 * Math.cos(n_hori2 / r2) - (r2 - A_bottom);
    SetN_bottom(Math.floor(N_bottom));

    const O_bottom = r2 * Math.cos(o_hori2 / r2) - (r2 - A_bottom);
    SetO_bottom(Math.floor(O_bottom));

    const P_bottom = r2 * Math.cos(p_hori2 / r2) - (r2 - A_bottom);
    SetP_bottom(Math.floor(P_bottom));

    const Q_bottom = r2 * Math.cos(q_hori2 / r2) - (r2 - A_bottom);
    SetQ_bottom(Math.floor(Q_bottom));

    const S_bottom = r2 * Math.cos(s_hori2 / r2) - (r2 - A_bottom);
    SetS_bottom(Math.floor(S_bottom));

    const T_bottom = r2 * Math.cos(t_hori2 / r2) - (r2 - A_bottom);
    SetT_bottom(Math.floor(T_bottom));

    const U_bottom = r2 * Math.cos(u_hori2 / r2) - (r2 - A_bottom);
    SetU_bottom(Math.floor(U_bottom));

    const V_bottom = r2 * Math.cos(v_hori2 / r2) - (r2 - A_bottom);
    SetV_bottom(Math.floor(V_bottom));

    const W_bottom = r2 * Math.cos(w_hori2 / r2) - (r2 - A_bottom);
    SetW_bottom(Math.floor(W_bottom));

    const X_bottom = r2 * Math.cos(x_hori2 / r2) - (r2 - A_bottom);
    SetX_bottom(Math.floor(X_bottom));

    // SetX_hori1(0);
    // SetX_hori2(0);
    // SetX_top(0);
    // SetX_bottom(0);

    const top_R = (top_dia_mean + thickness1 + 100) / 2;
    const top_r = (top_dia_mean + thickness1 + 100 - 2 * sidelining) / 2;
    const M963 = (top_r / 2) * (top_r / 2);
    const top_length =
      (top_R -
        top_r +
        (top_r -
          Math.cos((3.1417 / 180) * 30) * top_r -
          (top_R - Math.sqrt(top_R * top_R - M963)))) *
        6 +
      (top_R - Math.sqrt(top_R * top_R - M963));
    SetTop_Rim_length(Math.round(top_length));

    SetTop_Rim_width(top_R);
    SetTop_Rim_thickness(thickness1);
    SetTop_Rim_R(top_R);
    SetTop_Rim_r(top_r);
    SetTop_Rim_Angle(60);
    SetBottom_width(bottomdiameter);
    SetBottom_length(bottomdiameter);
    SetBottom_thickness(thickness2);

    SetTrunion_Top_width(width4);
    SetTrunion_Top_length(length4);
    SetTrunion_Top_thickness(thickness4);

    const tru_r = (J972 + H972 * F972 * 2) / 2;
    SetTrunion_Top_R(Math.round(tru_r));

    SetTrunion_bottom_width(width5);
    SetTrunion_bottom_length(length4);

    const tru_r_bottom =
      (J972 + H972 * (F972 - tru_box_v2 + thickness6) * 2) / 2;
    SetTrunion_bottom_R(Math.ceil(tru_r_bottom));

    SetResting_bottom_width(width8);
    SetResting_bottom_length(length4);

    const F973 = F972 - tru_box_v2 + thickness5;
    const resting_r = (J972 + H972 * (F973 - rest_box_v + thickness6) * 2) / 2;
    SetResting_bottom_R(Math.round(resting_r));

    if (d8 < 0) {
      setd8(0);
      setd10(0);
      SetA_hori2(0);
      SetA_bottom(0);
    }
    if (op < 0) {
      SetB_hori1(0);
      SetB_hori2(0);
      SetB_top(0);
      SetB_bottom(0);
    }
    if (c_hori1 < 0) {
      SetC_hori1(0);
      SetC_hori2(0);
      SetC_top(0);
      SetC_bottom(0);
    }
    if (d_hori1 < 0) {
      SetD_hori1(0);
      SetD_hori2(0);
      SetD_top(0);
      SetD_bottom(0);
    }
    if (e_hori1 < 0) {
      SetE_hori1(0);
      SetE_hori2(0);
      SetE_top(0);
      SetE_bottom(0);
    }
    if (f1_hori1 < 0) {
      Setf1_hori1(0);
      Setf1_hori2(0);
      Setf1_top(0);
      Setf1_bottom(0);
    }
    if (g_hori1 < 0) {
      SetG_hori1(0);
      SetG_hori2(0);
      SetG_top(0);
      SetG_bottom(0);
    }
    if (h_hori1 < 0) {
      SetH_hori1(0);
      SetH_hori2(0);
      SetH_top(0);
      SetH_bottom(0);
    }
    if (i_hori1 < 0) {
      SetI_hori1(0);
      SetI_hori2(0);
      SetI_top(0);
      SetI_bottom(0);
    }
    if (j_hori1 < 0) {
      SetJ_hori1(0);
      SetJ_hori2(0);
      SetJ_top(0);
      SetJ_bottom(0);
    }
    if (k_hori1 < 0) {
      SetK_hori1(0);
      SetK_hori2(0);
      SetK_top(0);
      SetK_bottom(0);
    }
    if (l_hori1 < 0) {
      SetL_hori1(0);
      SetL_hori2(0);
      SetL_top(0);
      SetL_bottom(0);
    }
    if (m_hori1 < 0) {
      SetM_hori1(0);
      SetM_hori2(0);
      SetM_top(0);
      SetM_bottom(0);
    }
    if (n_hori1 < 0) {
      SetN_hori1(0);
      SetN_hori2(0);
      SetN_top(0);
      SetN_bottom(0);
    }
    if (o_hori1 < 0) {
      SetO_hori1(0);
      SetO_hori2(0);
      SetO_top(0);
      SetO_bottom(0);
    }
    if (p_hori1 < 0) {
      SetP_hori1(0);
      SetP_hori2(0);
      SetP_top(0);
      SetP_bottom(0);
    }
    if (q_hori1 < 0) {
      SetQ_hori1(0);
      SetQ_hori2(0);
      SetQ_top(0);
      SetQ_bottom(0);
    }
    if (s_hori1 < 0) {
      SetS_hori1(0);
      SetS_hori2(0);
      SetS_top(0);
      SetS_bottom(0);
    }
    if (t_hori1 < 0) {
      SetT_hori1(0);
      SetT_hori2(0);
      SetT_top(0);
      SetT_bottom(0);
    }
    if (u_hori1 < 0) {
      SetU_hori1(0);
      SetU_hori2(0);
      SetU_top(0);
      SetU_bottom(0);
    }
    if (v_hori1 < 0) {
      SetV_hori1(0);
      SetV_hori2(0);
      SetV_top(0);
      SetV_bottom(0);
    }
    if (w_hori1 < 0) {
      SetW_hori1(0);
      SetW_hori2(0);
      SetW_top(0);
      SetW_bottom(0);
    }
    if (x_hori1 < 0) {
      SetX_hori1(0);
      SetX_hori2(0);
      SetX_top(0);
      SetX_bottom(0);
    }


    Setdia_R(R2)
    Setdia_r(r2)

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

  const rotate1 = async()=>{
    var div = document.getElementById("myDiv");
    div.style.transform = "rotate(90deg)";
  }
  const rotate2 = async()=>{
    var div = document.getElementById("myDiv");
    div.style.transform = "rotate(360deg)";
  }

  const handleDownloadPDF = async () => {
    if (!download) {
      toast.error("Calculate First");
      return;
    }

    await rotate1();

    // Capture the first div to an image
    const div1ImageData = await html2canvas(div1Ref.current);

    // Capture the second div to an image
    const div2ImageData = await html2canvas(div2Ref.current);
    const div3ImageData = await html2canvas(div3Ref.current);
    const div4ImageData = await html2canvas(div4Ref.current);
    const div5ImageData = await html2canvas(div5Ref.current);

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
      pdf.internal.pageSize.getWidth() - k2+20,
      pdf.internal.pageSize.getHeight()
    );

    // Add a new page to the PDF document
    pdf.addPage();

    // Add the second image to the PDF document
    pdf.addImage(
      div2ImageData,
      "PNG",
      k3,
      10,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-20
    );
    
    
    pdf.addPage();
    pdf.addImage(
      div3ImageData,
      "PNG",
      k3+25,
      10,
      pdf.internal.pageSize.getWidth()-50,
      pdf.internal.pageSize.getHeight()
    );
    pdf.addPage();
    pdf.addImage(
      div4ImageData,
      "PNG",
      k3,
      10,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-20
    );
    pdf.addPage();
    pdf.addImage(
      div5ImageData,
      "PNG",
      k3,
      10,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-20
    );

    

    // Save the PDF document
    pdf.save("ladle.pdf");

    toast.success("Successfully Downloaded");
    await rotate2()
  };

  const validate_ticket = async () => {
    try {
      const response = await fetch("/api/ladle_ticket", {
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

  const [showComponent, setShowComponent] = useState(false); 
 
  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setShowComponent(true); 
    }, 2000); 
 
    return () => clearTimeout(timeout); 
  }, []);

  const reset = () => {
    window.location.reload();
  };

  const [windowWidth, setWindowWidth] = useState(0);

  // Function to update window width
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add an event listener to update the window width when the component mounts
  useLayoutEffect(() => {
    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  // Calculate the image width based on screen size
  const imageWidth = windowWidth < 900 ? 300 : 1100;
  const imageWidth2 = windowWidth < 900 ? 100 : 300;
  const imageWidth3 = windowWidth < 900 ? 100 : 250;
  const imageheight1 = windowWidth < 900 ? 100 : 400;
  const imageheight2 = windowWidth < 900 ? 100 : 300;
  const imageheight3 = windowWidth < 900 ? 100 : 300;

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
            You have {userData.ladle_ticket} Tickets left !
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, marginBottom: "17px" }}
          >
            {userData.ladle_ticket == 0 ? (
              <div>
                <p>
                  You Can Purchase Plans or Continue with{" "}
                  <Link href="/ccm" className="plan_head">
                    Free Plan
                  </Link>
                </p>
                <div className="btn_div">
                  <Link href="/country">
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
            className={userData.ladle_ticket == 0 ? "dis" : "btn_cal"}
            onClick={result3}
          >
            Calculate
          </button>
        </Box>
      </Modal>

      {showComponent&& 
      <Modal
        open={userData.ladle_ticket==0?true:false}
        onClose={handleClosewar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cal_width">
          {userData.ladle_ticket!=0?<Typography id="modal-modal-title" variant="h6" component="h2">
            Loading !!!
          </Typography>:<Typography id="modal-modal-title" variant="h6" component="h2">
            Warning !!!
          </Typography>}
          
          
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, marginBottom: "17px" }}
          >{userData.ladle_ticket!=0?<p></p>:<div>
            <p>
            You don't have tickets to access this product
            </p>
          <p>
            You Can Purchase Plans or Continue with{" "}
            <Link href="/ccm" className="plan_head">
              Free Plan
            </Link>
          </p>
          <div className="btn_div">
            <Link href="/country">
              <button>Purchase</button>
            </Link>
            {/* <button onClick={result3}>Calculate</button> */}
          </div>
        </div>}
            
          </Typography>
        </Box>
      </Modal>
      }
      <div ref={div1Ref}>
        <h2 className="head" style={{ fontSize: "33px" }}>
          Ladle Calculator
        </h2>
        <div className="ladle_desc" style={{ marginBottom: "10vh" }}>
          <p className="ccm_para">
            <span style={{ color: "#1081fc" }}>Ladle Calculator </span>is an
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
        <div className="main-box_ladle">
          <div className="ladle_first">
            <h2 className="head_ladle">Fabricated Dimensions</h2>
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
                            label="Top ID"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            error={(error_show.topdiameter && !topdiameter)|| top_id_error} 
                            size="small"
                            onChange={(e) => {
                              let top_id = e.target.value
                              if(top_id>3000){
                                Settop_id_error(true)
                                toast.error("Top ID must be less than 3000")
                                // alert(top_id)
                              }
                              else if(top_id<3000){
                                Settop_id_error(false)
                              }
                              
                              setTopdiameter(e.target.value)
                            }}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle  flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Bottom ID"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            error={(error_show.bottomdiameter && !bottomdiameter)||bottom_id_error}
                            size="small"
                            onChange={(e) => {
                              let bottom_id = e.target.value
                              if(bottom_id>topdiameter){
                                Setbottom_id_error(true)
                                toast.error("Bottom ID must be less than Top ID")
                              }
                              else if(bottom_id<=topdiameter){
                                Setbottom_id_error(false)
                              }
                              setBottomdiameter(e.target.value)
                            }}
                          />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="row_ladle  flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Height"
                            variant="outlined"
                            type="number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            defaultValue="Small"
                            size="small"
                            error={error_show.height && !height}
                            onChange={(e) => setHeight(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle  flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Bottom Lining"
                            variant="outlined"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            type="number"
                            defaultValue="Small"
                            error={error_show.bottomlining && !bottomlining}
                            size="small"
                            onChange={(e) => setBottomlining(e.target.value)}
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
                        <div className="row_ladle  flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Side Lining"
                            variant="outlined"
                            type="number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            defaultValue="Small"
                            error={error_show.sidelining && !sidelining}
                            size="small"
                            onChange={(e) => setSidelining(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle  flex-all">
                          {/* <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Free Board"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            size="small"
                            error={error_show.freeboard && !freeboard}
                            onChange={(e) => setFreeboard(e.target.value)}
                          /> */}
                          <FormControl
                        sx={{ m: 0, minWidth: isMobile ? 225 : 100 }}
                        size="small"
                        error={error_show.freeboard && !freeboard}
                      >
                        <InputLabel id="demo-select-small-label">
                          Free Board
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={freeboard}
                          label="Free Board"
                          onChange={(e) => setFreeboard(e.target.value)}
                          sx={{
                            "& .MuiSelect-select": { overflowY: "scroll" },
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={100}>100</MenuItem>
                          <MenuItem value={125}>125</MenuItem>
                          <MenuItem value={150}>150</MenuItem>
                          <MenuItem value={175}>175</MenuItem>
                          <MenuItem value={200}>200</MenuItem>
                          <MenuItem value={225}>225</MenuItem>
                          <MenuItem value={250}>250</MenuItem>
                          <MenuItem value={275}>275</MenuItem>
                          <MenuItem value={300}>300</MenuItem>
                          
                        </Select>
                      </FormControl>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle  flex-all">
                          {/* <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Density"
                            variant="outlined"
                            defaultValue="Small"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            error={error_show.density && !density}
                            size="small"
                            type="number"
                            onChange={(e) => setDensity(e.target.value)}
                          /> */}
                          <FormControl
                        sx={{ m: 0, minWidth: isMobile ? 225 : 100 }}
                        size="small"
                        error={error_show.density && !density}
                      >
                        <InputLabel id="demo-select-small-label">
                          Density
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={density}
                          label="Density"
                          onChange={(e) => setDensity(e.target.value)}
                          sx={{
                            "& .MuiSelect-select": { overflowY: "scroll" },
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={6.5}>6.5</MenuItem>
                          <MenuItem value={6.6}>6.6</MenuItem>
                          <MenuItem value={6.7}>6.7</MenuItem>
                          <MenuItem value={6.8}>6.8</MenuItem>
                          <MenuItem value={6.85}>6.85</MenuItem>
                          <MenuItem value={6.9}>6.9</MenuItem>
                          <MenuItem value={7.0}>7.0</MenuItem>
                        </Select>
                      </FormControl>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>

          <div className="ladle_second">
            <h2 className="head_ladle">After Lining(Optional)</h2>
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
                      className="cell"
                    >
                      <TableCell>
                        <div className="row_ladle flex-all flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Top ID"
                            defaultValue="Small"
                            size="small"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            variant="outlined"
                            error={error_show.input1 && !input1}
                            type="number"
                            onChange={(e) => setInput1(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Bottom ID"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            variant="outlined"
                            defaultValue="Small"
                            size="small"
                            error={error_show.input2 && !input2}
                            type="number"
                            onChange={(e) => setInput2(e.target.value)}
                          />
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            id="outlined-number"
                            label="Height"
                            variant="outlined"
                            defaultValue="Small"
                            size="small"
                            error={error_show.input3 && !input3}
                            type="number"
                            onChange={(e) => setInput3(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Bottom Lining"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            variant="outlined"
                            defaultValue="Small"
                            size="small"
                            error={error_show.input4 && !input4}
                            type="number"
                            onChange={(e) => setInput4(e.target.value)}
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
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            id="outlined-number"
                            label="Side Lining"
                            defaultValue="Small"
                            size="small"
                            variant="outlined"
                            error={error_show.input5 && !input5}
                            type="number"
                            onChange={(e) => setInput5(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          {/* <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Free Board"
                            defaultValue="Small"
                            size="small"
                            variant="outlined"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            error={error_show.input6 && !input6}
                            type="number"
                            onChange={(e) => setInput6(e.target.value)}
                          /> */}
                          <FormControl
                        sx={{ m: 0, minWidth: isMobile ? 225 : 100 }}
                        size="small"
                        error={error_show.input6 && !input6}
                      >
                        <InputLabel id="demo-select-small-label">
                          Free Board
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={input6}
                          label="Free Board"
                          onChange={(e) => setInput6(e.target.value)}
                          sx={{
                            "& .MuiSelect-select": { overflowY: "scroll" },
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={100}>100</MenuItem>
                          <MenuItem value={125}>125</MenuItem>
                          <MenuItem value={150}>150</MenuItem>
                          <MenuItem value={175}>175</MenuItem>
                          <MenuItem value={200}>200</MenuItem>
                          <MenuItem value={225}>225</MenuItem>
                          <MenuItem value={250}>250</MenuItem>
                          <MenuItem value={275}>275</MenuItem>
                          <MenuItem value={300}>300</MenuItem>
                          
                        </Select>
                      </FormControl>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>

        <div className="containerfab_ladle">
          <h2 className="head_ladle" style={{ marginTop: "10vh" }}>
            Plate Thickness for Ladle Fabrication
          </h2>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer
              sx={{ maxHeight: 500 }}
              style={{ backgroundColor: "#f9fbfc" }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableBody>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <FormControl
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness1 && !thickness1}
                      >
                        <InputLabel id="demo-select-small-label">
                          Shell Plate
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness1}
                          label="Nozzle Model"
                          onChange={(e) => setThickness1(e.target.value)}
                          sx={{
                            "& .MuiSelect-select": { overflowY: "scroll" },
                          }}
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
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness3 && !thickness3}
                      >
                        <InputLabel id="demo-select-small-label">
                          Top Rim Plate
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness3}
                          label="Nozzle Model"
                          onChange={(e) => setThickness3(e.target.value)}
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
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness4 && !thickness4}
                      >
                        <InputLabel id="demo-select-small-label">
                          Trunion Box Hori
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness4}
                          label="Nozzle Model"
                          onChange={(e) => setThickness4(e.target.value)}
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
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness5 && !thickness5}
                      >
                        <InputLabel id="demo-select-small-label">
                          Trunion Box Vert
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness5}
                          label="Nozzle Model"
                          onChange={(e) => setThickness5(e.target.value)}
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

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <FormControl
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness7 && !thickness7}
                      >
                        <InputLabel id="demo-select-small-label">
                          Trunion Box Side
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness7}
                          label="Nozzle Model"
                          onChange={(e) => setThickness7(e.target.value)}
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
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness11 && !thickness11}
                      >
                        <InputLabel id="demo-select-small-label">
                          Legs
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness11}
                          label="Nozzle Model"
                          onChange={(e) => setThickness11(e.target.value)}
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
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={
                          thickness14 == 0
                            ? false
                            : error_show.thickness14 && !thickness14
                        }
                      >
                        <InputLabel id="demo-select-small-label">
                          Stiffners
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness14}
                          label="Nozzle Model"
                          onChange={(e) => setThickness14(e.target.value)}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={0}>0</MenuItem>
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
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness2 && !thickness2}
                      >
                        <InputLabel id="demo-select-small-label">
                          Bottom Plate
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness2}
                          label="Nozzle Model"
                          onChange={(e) => setThickness2(e.target.value)}
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

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <FormControl
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness15 && !thickness15}
                      >
                        <InputLabel id="demo-select-small-label">
                          Trunion Pin
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness15}
                          label="Nozzle Model"
                          onChange={(e) => setThickness15(e.target.value)}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={100}>100</MenuItem>
                          <MenuItem value={125}>125</MenuItem>
                          <MenuItem value={150}>150</MenuItem>
                          <MenuItem value={175}>175</MenuItem>
                          <MenuItem value={200}>200</MenuItem>
                          <MenuItem value={220}>220</MenuItem>
                          <MenuItem value={250}>250</MenuItem>
                          <MenuItem value={275}>275</MenuItem>
                          <MenuItem value={300}>300</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>

                    <TableCell sx={{ textAlign: "center" }}>
                      <FormControl
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness8 && !thickness8}
                      >
                        <InputLabel id="demo-select-small-label">
                          Resting Box H
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness8}
                          label="Nozzle Model"
                          onChange={(e) => setThickness8(e.target.value)}
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
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness9 && !thickness9}
                      >
                        <InputLabel id="demo-select-small-label">
                          Resting Box V
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness9}
                          label="Nozzle Model"
                          onChange={(e) => setThickness9(e.target.value)}
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
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness10 && !thickness10}
                      >
                        <InputLabel id="demo-select-small-label">
                          Resting Box S
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness10}
                          label="Nozzle Model"
                          onChange={(e) => setThickness10(e.target.value)}
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

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <FormControl
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness13 && !thickness13}
                      >
                        <InputLabel id="demo-select-small-label">
                          Lifting Hooks
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness13}
                          label="Nozzle Model"
                          onChange={(e) => setThickness13(e.target.value)}
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
                        sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                        size="small"
                        error={error_show.thickness12 && !thickness12}
                      >
                        <InputLabel id="demo-select-small-label">
                          Retaining RCS
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness12}
                          label="Nozzle Model"
                          onChange={(e) => setThickness12(e.target.value)}
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
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 0, width: "13ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          required
                          className="textfield_ladle"
                          sx={{
                            m: 0,
                            minWidth: isMobile ? 175 : 100,
                            textAlign: "center",
                          }}
                          id="outlined-number"
                          label="Tru. Box V1"
                          variant="outlined"
                          type="number"
                          error={error_show.tru_box_v1 && !tru_box_v1}
                          defaultValue="Small"
                          size="small"
                          onChange={(e) => setTru_box_v1(e.target.value)}
                        />
                      </Box>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "13ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                          required
                          className="textfield_ladle"
                          id="outlined-number"
                          label="Tru Box V2"
                          variant="outlined"
                          type="number"
                          error={error_show.tru_box_v2 && !tru_box_v2}
                          defaultValue="Small"
                          size="small"
                          onChange={(e) => setTru_box_v2(e.target.value)}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "13ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          required
                          sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                          className="textfield_ladle"
                          id="outlined-number"
                          label="Resting Box H"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          error={error_show.rest_box_h && !rest_box_h}
                          size="small"
                          onChange={(e) => setrest_box_h(e.target.value)}
                        />
                      </Box>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 1, width: "13ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          required
                          sx={{ m: 0, minWidth: isMobile ? 175 : 100 }}
                          className="textfield_ladle"
                          id="outlined-number"
                          label="Rest Box V"
                          variant="outlined"
                          type="number"
                          defaultValue="Small"
                          error={error_show.rest_box_v && !rest_box_v}
                          size="small"
                          onChange={(e) => setrest_box_v(e.target.value)}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
        <br />
        <br />
      </div>

      <div className="btns_ladle">
        <div className="row4_ladle">
          <Stack spacing={2} direction="row">
            <button
              onClick={() => {
                if (isdisabled) {
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

      <div ref={div2Ref}>
        {/* Output screen */}

        <div className={output_show ? "output_ladle" : "output_ladle dis"}>
          <h2 className="head_output" style={{ marginBottom: "6vh" }}>
            Output
          </h2>

          <div className="main-box_ladle_output">
            <div className="ladle_first_output">
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer
                  sx={{ maxHeight: 1000 }}
                  style={{ backgroundColor: "#f9fbfc" }}
                >
                  <Table stickyHeader aria-label="sticky table">
                    <TableBody>
                      <TableRow
                        role="checkbox"
                        tabIndex={-1}
                        sx={{ maxHeight: "10px" }}
                      >
                        <TableCell>
                          <h2
                            className="head_ladle"
                            style={{ textAlign: "center" }}
                          >
                            After Lining Dimensions & Capacity of Fabrication
                            Ladle
                          </h2>
                        </TableCell>
                      </TableRow>

                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          <p className="textcentre_ladle">
                            Free Board Level Diameter(mm) :{" "}
                            {freeboardleveldiameter}
                          </p>
                        </TableCell>
                      </TableRow>

                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          <p className="textcentre_ladle">
                            Bottom Lining Level Diameter(mm) :{" "}
                            {bottomliningleveldiameter}
                          </p>
                        </TableCell>
                      </TableRow>

                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          <p className="textcentre_ladle">
                            In Between Height(mm) : {inbetweenheight}
                          </p>
                        </TableCell>
                      </TableRow>

                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          <p className="textcentre_ladle">
                            Volumn of Ladle after Lining(Cu.Mtr) :{" "}
                            {(pieHby3 * temp).toFixed(2)} cu.M
                          </p>
                        </TableCell>
                      </TableRow>

                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          <p className="textcentre_ladle">
                            Capacity of Ladle(MT) :{" "}
                            {(pieHby3 * temp * density).toFixed(2)} MT
                          </p>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </div>

            <br />
            <br />
            <br />

            <div className="ladle_second_output">
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer
                  sx={{ maxHeight: 1000 }}
                  style={{ backgroundColor: "#f9fbfc" }}
                >
                  <Table stickyHeader aria-label="sticky table">
                    <TableBody>
                      <TableRow role="checkbox" tabIndex={-1} className="cell">
                        <TableCell>
                          <h2
                            className="head_ladle"
                            style={{ textAlign: "center" }}
                          >
                            Fabrication Dimensions & Capacity of Linined Ladle
                          </h2>
                        </TableCell>
                      </TableRow>

                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          <p className="textcentre_ladle">
                            Top ID for Fabrication of Ladle: {output1}
                          </p>
                        </TableCell>
                      </TableRow>

                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          <p className="textcentre_ladle">
                            Bottom ID for Fabrication of Ladle: {output2}
                          </p>
                        </TableCell>
                      </TableRow>

                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          <p className="textcentre_ladle">
                            Height for Fabrication of Ladle: {output3}
                          </p>
                        </TableCell>
                      </TableRow>
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          <p style={{ textAlign: "center" }}>
                            Volumn of Lined Ladle(Cu.Mtr):{" "}
                            {(
                              outputlining1 *
                              ((outputlining2 * outputlining2 +
                                outputlining2 * outputlining3 +
                                outputlining3 * outputlining3) /
                                1000000)
                            ).toFixed(2)}{" "}
                            cu.M
                          </p>
                        </TableCell>
                      </TableRow>

                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell>
                          <p style={{ textAlign: "center" }}>
                            Capacity of Lined Ladle:{" "}
                            {(
                              outputlining1 *
                              ((outputlining2 * outputlining2 +
                                outputlining2 * outputlining3 +
                                outputlining3 * outputlining3) /
                                1000000) *
                              density
                            ).toFixed(2)}{" "}
                            MT
                          </p>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </div>
          </div>

          {/* fabrication_output */}

          <h2 className="head_ladle" style={{ marginTop: "4vh" }}>
            Bill of Material
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
                        <p>Particulars</p>
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center" }}
                        style={{ backgroundColor: "#c8c8c8" }}
                      >
                        <p>Thickness</p>
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center" }}
                        style={{ backgroundColor: "#c8c8c8" }}
                      >
                        <p>Weight in Kgs</p>
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center" }}
                        style={{ backgroundColor: "#c8c8c8" }}
                      >
                        <p>Length</p>
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center" }}
                        style={{ backgroundColor: "#c8c8c8" }}
                      >
                        <p>Width</p>
                      </TableCell>

                      <TableCell
                        sx={{ textAlign: "center" }}
                        style={{ backgroundColor: "#c8c8c8" }}
                      >
                        <p>Qty</p>
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Shell Plate</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness1}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight1}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length1}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width1}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>{qty1}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Bottom Plate</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness2}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight2}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length2}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width2}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>{qty2}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Top Rim Plate</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness3}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight3}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length3}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width3}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>{qty3}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Trunion Box Hori. Plt. 1</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness4}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight4}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length4}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width4}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>{qty4}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Trunion Box Hori. Plt. 2</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness5}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight5}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length5}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width5}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>{qty5}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Trunion Box Vertical Plt.</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness5}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight6}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length6}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width6}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>{qty6}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Trunion Box Side Plt.</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness7}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight7}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length7}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width7}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>{qty7}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Resting Box Hori. Plt</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness8}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight8}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length8}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width8}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>{qty8}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Resting Box Ver. Plt.</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness9}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight9}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length9}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width9}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>{qty9}</TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Resting Box Side Plt.</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness10}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight10}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length10}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width10}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        {qty10}
                      </TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Legs</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness11}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight11}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length11}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width11}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        {qty11}
                      </TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Retaining RCS</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness12}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight12}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length12}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width12}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        {qty12}
                      </TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Lifting Hooks</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness13}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight13}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length13}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width13}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        {qty13}
                      </TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Stiffners</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness14}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight14}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length14}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width14}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        {" "}
                        {qty14}
                      </TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell sx={{ textAlign: "center" }}>
                        <p>Trunion Pin</p>
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {thickness15}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {weight15}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {length15}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {width15}
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        {qty15}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            {/* yaha hu */}
          </div>
          <div className="fab_weight flex-all">
            <p style={{ fontSize: "25px", marginTop: "5vh" }}>
              Fabrication Weight: {Math.ceil(total_weight)} Kgs
            </p>
          </div>
        </div>
      </div>

      <div ref={div3Ref} id="myDiv" className={output_show ? "" : "dis"}>
        {/* Diagrams */}
        <h2 className="head_lad" style={{ marginBottom: "2vh" }}>
          Graphical Models
        </h2>

        <div className="flex-all img_ladle" style={{ marginBottom: "15vh" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "1vh" }}>
              DEVELOPMENT OF LADLE SHELL PLATE
            </h3>
            <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>
              Vertical Division 200 mm from Centre {d16} Nos.
            </h5>
            <div className="dia">
              <div className="dia1">
                <p>{d8}</p>
              </div>
              <div className="dia2">
                <p>{d8}</p>
              </div>
              <div className="dia3">
                <p>{d9}</p>
              </div>
              <div className="dia4">
                <p>{d10}</p>
              </div>
              <div className="dia5">
                <p>{d10}</p>
              </div>
              <div className="dia6">
                <p>{d11}</p>
              </div>
              <div className="dia7">
                <p>{d12}</p>
              </div>
              <div className="dia8">
                <p>{d13}</p>
              </div>
              <div className="dia9">
                <p>{d13}</p>
              </div>
              <div className="dia10">
                <p>{d12}</p>
              </div>
              <div className="dia11">
                <p>{d14}</p>
              </div>
              <div className="dia12">
                <p>Radius R -{Math.round(R2)}</p>
              </div>
              <div className="dia13">
                <p>Radius r -{Math.round(r2)}</p>
              </div>
              <Image
                src="/ladledia.png"
                alt="My Image"
                width={imageWidth}
                height={imageheight1}
                loading="eager" // Options: "eager", "lazy", or "auto"
                priority // Preload this image
                quality={80} // Set the image quality (0-100)
              />
            </div>
          </div>
        </div>
      </div>

    <div ref={div4Ref} id="pdf" className={output_show ? "" : "dis"}>
      <div
        className="containerfab_ladle flex-all"
        style={{ marginTop: "4vh", marginBottom: "4vh" }}
      >
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer
            sx={{ maxHeight: 1800 }}
            style={{ backgroundColor: "#f9fbfc" }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ backgroundColor: "#c8c8c8" }}
                  >
                    <p>Section</p>
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ backgroundColor: "#c8c8c8" }}
                  >
                    <p>Hori. Dt.</p>
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ backgroundColor: "#c8c8c8" }}
                  >
                    <p>Top</p>
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ backgroundColor: "#c8c8c8" }}
                  >
                    <p>Hori. Dt.</p>
                  </TableCell>
                  <TableCell
                    sx={{ textAlign: "center" }}
                    style={{ backgroundColor: "#c8c8c8" }}
                  >
                    <p>Bottom</p>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>A</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{d8}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{d10}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{A_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{A_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>B</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{B_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{B_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{B_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{B_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>C</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{C_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{C_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{C_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{C_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>D</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{D_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{D_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{D_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{D_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>E</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{E_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{E_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{E_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{E_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>F</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{f1_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{f1_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{f1_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {f1_bottom}
                  </TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>G</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{F_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{F_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{F_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{F_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>H</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{G_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{G_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{G_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{G_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>I</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{H_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{H_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{H_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{H_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>J</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{I_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{I_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{I_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{I_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>K</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{J_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{J_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{J_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{J_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>L</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{K_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{K_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{K_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{K_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>M</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{L_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{L_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{L_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{L_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>N</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{M_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{M_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{M_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{M_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>O</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{N_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{N_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{N_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{N_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>P</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{O_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{O_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{O_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{O_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>Q</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{P_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{P_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{P_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{P_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>R</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{Q_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{Q_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{Q_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{Q_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>S</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{S_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{S_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{S_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{S_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>T</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{T_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{T_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{T_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{T_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>U</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{U_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{U_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{U_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{U_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>V</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{V_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{V_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{V_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{V_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>W</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{W_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{W_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{W_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{W_bottom}</TableCell>
                </TableRow>
                <TableRow hover role="checkbox" tabIndex={-1}>
                  <TableCell sx={{ textAlign: "center" }}>
                    <p>X</p>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{X_hori1}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{X_top}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{X_hori2}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>{X_bottom}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        {/* yaha hu */}
      </div>
    
        
      </div>

      <div ref={div5Ref} id="pdf" className={output_show ? "" : "dis"}>
      <div className="flex-all img_ladle">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "1vh" }}>
              DEVELOPMENT OF LADLE TOP RIM PLATE
            </h3>
            <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>
              SIX SECTOR PLATE @ 60 DEGREE EACH
            </h5>
            <div className="dia">
              <div className="dia_p_1">
                <p className="p1"> R {d2}</p>
              </div>
              <div className="dia_p_2">
                <p className="p1">{d1}</p>
              </div>
              <div className="dia_p_3">
                <p className="p1">{d3}</p>
              </div>
              <div className="dia_p_4">
                <p className="p1">r {d4}</p>
              </div>
              <Image
                src="/top_rim.jpeg"
                alt="My Image"
                width={imageWidth2}
                height={imageheight2}
                loading="eager" // Options: "eager", "lazy", or "auto"
                priority // Preload this image
                quality={80} // Set the image quality (0-100)
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "1vh" }}>
              DEVELOPMENT OF LADLE BOTTOM PLATE
            </h3>
            <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>
              GIVEN SQUARE PLATE DIMENSIONS
            </h5>
            <div className="dia">
              <div className="dia_p_5">
                <p className="p1">{d5}</p>
              </div>

              <div className="dia_p_6">
                <p className="p1">{d6}</p>
              </div>

              <Image
                src="/bottom_plate.jpeg"
                alt="My Image"
                width={imageWidth2}
                height={imageheight2}
                loading="eager"
                priority
                quality={80}
              />
            </div>
          </div>
        </div>

        <h3 style={{ textAlign: "center", marginTop: "10vh" }}>
          DEVELOPMENT OF LADLE BOX HORIZONTAL PLATE
        </h3>
        <h5 style={{ textAlign: "center", marginBottom: "6vh" }}>
          TRUNION BOX AND RESTING BOX
        </h5>
        <div className="flex-all img_ladle" style={{ marginTop: "5vh" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "1vh" }}>
              Trunion Box Top Plate
            </h3>
            <h5 style={{ textAlign: "center", marginBottom: "5vh" }}>2 Nos</h5>
            <div className="dia">
              <div className="dia_p_t1">
                <p className="p1">{Trunion_Top_width}</p>
              </div>
              <div className="dia_p_t3">
                <p className="p1">R - {Trunion_Top_R}</p>
              </div>
              <div className="dia_p_t2">
                <p className="p1">{Trunion_Top_length}</p>
              </div>
              <Image
                src="/LR1.png"
                alt="My Image"
                width={imageWidth3}
                height={imageheight3}
                loading="eager" // Options: "eager", "lazy", or "auto"
                priority // Preload this image
                quality={80} // Set the image quality (0-100)
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "1vh" }}>
              Trunion Box Bottom Plate
            </h3>
            <h5 style={{ textAlign: "center", marginBottom: "5vh" }}>2 Nos</h5>
            <div className="dia">
              <div className="dia_p_t1">
                <p className="p1">{Trunion_bottom_width}</p>
              </div>
              <div className="dia_p_t3">
                <p className="p1">R - {Trunion_bottom_R}</p>
              </div>
              <div className="dia_p_t2">
                <p className="p1">{Trunion_bottom_length}</p>
              </div>
              <Image
                src="/LR1.png"
                alt="My Image"
                width={imageWidth3}
                height={imageheight3}
                loading="eager" // Options: "eager", "lazy", or "auto"
                priority // Preload this image
                quality={80} // Set the image quality (0-100)
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "1vh" }}>
              Resting Box Bottom Plate
            </h3>
            <h5 style={{ textAlign: "center", marginBottom: "5vh" }}>2 Nos</h5>
            <div className="dia">
              <div className="dia_p_t1">
                <p className="p1">{Resting_bottom_width}</p>
              </div>
              <div className="dia_p_t2">
                <p className="p1">{Resting_bottom_length}</p>
              </div>
              <div className="dia_p_t3">
                <p className="p1">R - {Resting_bottom_R}</p>
              </div>
              <Image
                src="/LR1.png"
                alt="My Image"
                width={imageWidth3}
                height={imageheight3}
                loading="eager" // Options: "eager", "lazy", or "auto"
                priority // Preload this image
                quality={80} // Set the image quality (0-100)
              />
            </div>
          </div>
        </div>
        <h3 style={{ textAlign: "center", marginTop: "7vh" }}>
          DEVELOPMENT OF LADLE BOX VERTICAL PLATE
        </h3>
        <h5 style={{ textAlign: "center", marginBottom: "4vh" }}>
          TRUNION BOX AND RESTING BOX
        </h5>
        <div className="flex-all img_ladle" style={{ marginTop: "5vh" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "1vh" }}>
              Trunion Box Vertical Plates
            </h3>
            <h5 style={{ textAlign: "center", marginBottom: "5vh" }}>4 Nos</h5>
            <div className="dia">
              <div className="dia_p_t4">
                <p className="p1">{width5}</p>
              </div>
              <div className="dia_p_t5">
                <p className="p1">{length6}</p>
              </div>
              <div className="dia_p_t6">
                <p className="p1">{width4}</p>
              </div>
              <Image
                src="/restingnew.png"
                alt="My Image"
                width={imageWidth3}
                height={imageheight3-50}
                loading="eager" // Options: "eager", "lazy", or "auto"
                priority // Preload this image
                quality={80} // Set the image quality (0-100)
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "1vh" }}>
              Resting Box Vertical Plates
            </h3>
            <h5 style={{ textAlign: "center", marginBottom: "5vh" }}>4 Nos</h5>
            <div className="dia">
              <div className="dia_p_t4">
                <p className="p1">{width8}</p>
              </div>
              <div className="dia_p_t5">
                <p className="p1">{length9}</p>
              </div>
              <div className="dia_p_t6">
                <p className="p1">{width5}</p>
              </div>
              <Image
                src="/restingnew.png"
                alt="My Image"
                width={imageWidth3}
                height={imageheight3-50}
                loading="eager" // Options: "eager", "lazy", or "auto"
                priority // Preload this image
                quality={80} // Set the image quality (0-100)
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "1vh" }}>
              CENTRE PLATE TRUNION PIN HOLD
            </h3>
            <h5 style={{ textAlign: "center", marginBottom: "5vh" }}>2 Nos</h5>
            <div className="dia">
              <div className="dia_p_7">
                <p className="p1">{d7}</p>
              </div>
              <div className="dia_p_8">
                <p className="p1">{d7}</p>
              </div>

              <Image
                src="/golanew.png"
                alt="My Image"
                width={imageWidth2}
                height={imageheight3-50}
                loading="eager" // Options: "eager", "lazy", or "auto"
                priority // Preload this image
                quality={80} // Set the image quality (0-100)
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex-all"
        style={{ flexDirection: "column", marginBottom: "2vh" }}
      >
        <div
          className={output_show ? "flex-all" : "dis"}
          style={{ marginBottom: "1vh", marginTop: "7vh" }}
        >
          <button onClick={handleDownloadPDF} className="download_btn">
            Download PDF
          </button>
        </div>
        <div
          className={output_show ? "flex-all" : "dis"}
          style={{ marginBottom: "5vh" }}
        >
          <button onClick={reset} className="download_btn">
            Reset
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ladlecalculator;
