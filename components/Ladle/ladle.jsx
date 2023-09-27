
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState, useRef, useEffect } from "react";
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
import { fetchCurrentUser } from '../../libs/fetchUser'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from "next/link";

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

const Ladlecalculator = ({ authtoken }) => {
  const pdfRef = useRef();
  const theme = useTheme();
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
  const [density, setDensity] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);
  const [input5, setInput5] = useState(0);
  const [input6, setInput6] = useState(0);
  const [output1, setOutput1] = useState(0);
  const [output2, setOutput2] = useState(0);
  const [output3, setOutput3] = useState(0);
  const [outputlining1, setOutputlining1] = useState(0);
  const [outputlining2, setOutputlining2] = useState(0);
  const [outputlining3, setOutputlining3] = useState(0);
  const [thickness1, setThickness1] = useState(0);
  const [thickness2, setThickness2] = useState(0);
  const [thickness3, setThickness3] = useState(0);
  const [thickness4, setThickness4] = useState(0);
  const [thickness5, setThickness5] = useState(0);
  const [thickness6, setThickness6] = useState(0);
  const [thickness7, setThickness7] = useState(0);
  const [thickness8, setThickness8] = useState(0);
  const [thickness9, setThickness9] = useState(0);
  const [thickness10, setThickness10] = useState(0);
  const [thickness11, setThickness11] = useState(0);
  const [thickness12, setThickness12] = useState(0);
  const [thickness13, setThickness13] = useState(0);
  const [thickness14, setThickness14] = useState(0);
  const [thickness15, setThickness15] = useState(0);
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () =>{
    seterror("")
    let v = document.querySelector(".error_ccm")
    v.style.visibility = "hidden"
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const [download, setdownload] = useState(false);
  const [error, seterror] = useState("");
  const isdisabled = !(topdiameter&&bottomdiameter&&height&&bottomlining&&sidelining&&freeboard&&density&& input1&&input2&&input3&&input4&&input5&&input6&&thickness1&&thickness4&&thickness8&&tru_box_v2&&thickness2&&thickness5&&thickness9&&tru_box_v1&&thickness3&&thickness7&&thickness10&&rest_box_v&&thickness15&&thickness11&&thickness12&&rest_box_h&&thickness13)

  const fun = () => {
    seterror("Error : Enter the required values")
    let v = document.querySelector(".error_ccm")
    v.style.visibility = "initial"
  }

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
    ladle_ticket: 0,
  });

  const top_dia_mean = parseInt(topdiameter) + parseInt(thickness1);
  const degree_tan =
    (parseInt(topdiameter) - parseInt(bottomdiameter)) / (2 * parseInt(height));
  const cos_A = (Math.cos(
    (3.1416 / 180) * (Math.atan(degree_tan) * (3.1416 / 180))
  )) - 0.0013821705717152

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
  const J964 = ((Radius_R) - Math.sqrt((Radius_R * Radius_R) - ((Radius_r / 2) * (Radius_r / 2))))



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
      setOpen(false)
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

    const width3 = Math.round(((Radius_R - Radius_r + (I964 - J964)) * 6) + J964);

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
      Math.floor((thickness12 * length12 * width12 * q12 * 7.864) / 1000000) + 1;

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

    setOpen(false)
    getUserData();
    setdownload(true);
  };

  const getUserData = async () => {
    const token = localStorage.getItem('JWT');
    try {

      const data = await fetchCurrentUser(token);
      console.log(data, "data fetched");
      const { error } = data;
      console.log(error, "error getting user data");
      if (error) {
        toast.error(error)
        return;
      }
      let user = data;
      const convertedUser = {
        ...user,
        dob: user.dob ? user.dob.split('T')[0] : '',
      };
      setUserData(convertedUser);
    } catch (error) {
      toast.error(error.message + "op" || "Some error occurred while fetching data");
    }
  };


  useEffect(() => {
    getUserData();
  }, []);

  const handleDownloadPDF = async () => {

    if (!download) {
      toast.error("Calculate First")
      return;
    }

    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width * 2;
      const imgHeight = canvas.height * 2;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('ladle.pdf')
      toast.success("Successfully Downloaded")
    });

  };

  const validate_ticket = async () => {
    try {
      const response = await fetch('/api/ladle_ticket', {
        method: 'POST',
        body: JSON.stringify(userData.email),
        headers: {
          'Content-type': 'application/json',
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

  return (
    <div className="body_ladle" style={{ backgroundColor: "#f9fbfc" }}>
      <Navbar moveIndex={0} authtoken={authtoken} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, marginBottom: '17px' }}>
            You have {userData.ladle_ticket} Tickets left !
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, marginBottom: '17px' }}>
            {userData.ladle_ticket == 0 ?
            <div>
              <p>You Can Purchase Plans or Continue with <Link href="/ccm" className="plan_head">Free Plan</Link></p>
              <div className="btn_div">
                <Link href="/pricing"><button>Purchase</button></Link>
                {/* <button onClick={result3}>Calculate</button> */}
              </div>
            </div>
              : ""}
          </Typography>
          <button className={userData.ladle_ticket == 0?"dis":"btn_cal"} onClick={result3}>Calculate</button>
        </Box>
      </Modal>
      <div ref={pdfRef} id="pdf">
        <h2 className="head">Ladle Calculator</h2>
        <div className="ccm_desc">
          <p className="ccm_para">
            <span style={{ color: "#1081fc" }}>Ladle Calculator </span>is an indispensable tool for professionals in the field of metallurgy, particularly in the realm of metal casting. This specialized calculator streamlines the process of determining the precise amount of molten metal required for casting operations. With its user-friendly interface, metallurgists and foundry workers can input essential parameters such as casting dimensions, metal type, and desired specifications. The calculator then generates accurate measurements, ensuring that the correct amount of molten metal is utilized, minimizing waste, and optimizing production efficiency.
          </p>
        </div>
        <div className="main-box_ladle">
          <div className="ladle_first">
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 1000 }} style={{ backgroundColor: "#f9fbfc" }}>
                <Table stickyHeader aria-label="sticky table" >
                  <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1} sx={{ maxHeight: '10px' }}>
                      <TableCell>
                        <h2 className="head_ladle">Fabricated Dimensions</h2>
                      </TableCell>
                      <TableCell>
                        <h2 className="head_ladle">After Lining</h2>
                      </TableCell>
                    </TableRow>


                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Top ID"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setTopdiameter(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p>Free Board Level Diameter : {freeboardleveldiameter}</p>
                      </TableCell>
                    </TableRow>

                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Bottom ID"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setBottomdiameter(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p>Bottom Lining Level Diameter : {bottomliningleveldiameter}</p>
                      </TableCell>
                    </TableRow>


                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Height"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setHeight(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p>In Between Heigh : {inbetweenheight}</p>
                      </TableCell>
                    </TableRow>


                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Bottom Lining"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setBottomlining(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p>Volumn of Ladle : {(pieHby3 * temp).toFixed(2)} cu.M</p>
                      </TableCell>
                    </TableRow>


                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Side Lining"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setSidelining(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p>Capacity of Ladle : {(pieHby3 * temp * density).toFixed(2)} MT</p>
                      </TableCell>
                    </TableRow>


                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Free Board"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setFreeboard(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>

                      </TableCell>
                    </TableRow>


                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Density"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setDensity(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>

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

          <div className="ladle_second">
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 1000 }} style={{ backgroundColor: "#f9fbfc" }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableBody>
                    <TableRow hover role="checkbox" tabIndex={-1} className="cell">
                      <TableCell className="cell">
                        <h2 className="head_ladle">After Lining</h2>
                      </TableCell>
                      <TableCell>
                        <h2 className="head_ladle">Fab. Size</h2>
                      </TableCell>
                    </TableRow>


                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Top ID"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setInput1(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="textcentre_ladle">Top ID: {output1}</p>
                      </TableCell>
                    </TableRow>

                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Bottom ID"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setInput2(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="textcentre_ladle">Bottom ID: {output2}</p>
                      </TableCell>
                    </TableRow>


                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Height"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setInput3(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="textcentre_ladle">Height: {output3}</p>
                      </TableCell>
                    </TableRow>


                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Bottom Lining"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setInput4(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p style={{ textAlign: 'center' }}>
                          Capacity:{" "}
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


                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Side Lining"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setInput5(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <p style={{ textAlign: 'center' }}>
                          Volumn:{" "}
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
                        <div className="row_ladle">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            label="Free Board"
                            variant="outlined"
                            type="number"
                            onChange={(e) => setInput6(e.target.value)}
                          />
                        </div>
                      </TableCell>
                      <TableCell>

                      </TableCell>
                    </TableRow>
                    <TableRow hover role="checkbox" tabIndex={-1}>
                      <TableCell>
                        <div className="row_ladle" style={{ height: '8vh' }}>

                        </div>
                      </TableCell>
                      <TableCell>

                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </div>
        <h2 className="head_ladle" style={{ marginTop: '10vh' }}>Fabrication</h2>

        <div className="containerfab_ladle">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }} style={{ backgroundColor: "#f9fbfc" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableBody>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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
                          sx={{ '& .MuiSelect-select': { overflowY: 'scroll' } }}
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
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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

                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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

                    <TableCell>
                      <TextField
                        required
                        className="textfield_ladle"
                        id="outlined-number"
                        label="Tru Box V2"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setTru_box_v2(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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

                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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
                    <TableCell>
                      <TextField
                        required
                        className="textfield_ladle"
                        id="outlined-number"
                        label="Tru. Box V1"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setTru_box_v1(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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

                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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
                    <TableCell>
                      <TextField
                        required
                        className="textfield_ladle"
                        id="outlined-number"
                        label="Rest Box V"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setrest_box_v(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">Legs</InputLabel>
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
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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
                    <TableCell>
                      <TextField
                        required
                        className="textfield_ladle"
                        id="outlined-number"
                        label="Resting Box H"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setrest_box_h(e.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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

                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
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
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
        <br />
        <br />

        <div className="containerfab_ladle">
          <Paper sx={{ width: "100%", overflow: "hidden" }} >
            <TableContainer sx={{ maxHeight: 1200 }} style={{ backgroundColor: "#f9fbfc" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow hover role="checkbox" tabIndex={-1} >
                    <TableCell style={{ backgroundColor: "#c8c8c8" }}>
                      <p>Particulars</p>
                    </TableCell>
                    <TableCell style={{ backgroundColor: "#c8c8c8" }}>
                      <p>Thick/Size</p>
                    </TableCell>
                    <TableCell style={{ backgroundColor: "#c8c8c8" }}>
                      <p>Weight in Kgs</p>
                    </TableCell>
                    <TableCell style={{ backgroundColor: "#c8c8c8" }}>
                      <p>Length</p>
                    </TableCell>
                    <TableCell style={{ backgroundColor: "#c8c8c8" }}>
                      <p>Width</p>
                    </TableCell>

                    <TableCell style={{ backgroundColor: "#c8c8c8" }}>
                      <p>Qty</p>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Shell Plate</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness1}
                          label="Nozzle Model"
                          onChange={(e) => setThickness1(e.target.value)}
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

                    <TableCell>{weight1}</TableCell>
                    <TableCell>{length1}</TableCell>
                    <TableCell>{width1}</TableCell>

                    <TableCell>{qty1}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Bottom Plate</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight2}</TableCell>
                    <TableCell>{length2}</TableCell>
                    <TableCell>{width2}</TableCell>

                    <TableCell>{qty2}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Top Rim Plate</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight3}</TableCell>
                    <TableCell>{length3}</TableCell>
                    <TableCell>{width3}</TableCell>

                    <TableCell>{qty3}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Trunion Box Hori. Plt.1</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight4}</TableCell>
                    <TableCell>{length4}</TableCell>
                    <TableCell>{width4}</TableCell>

                    <TableCell>{qty4}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Trunion Box Hori. Plt.2</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight5}</TableCell>
                    <TableCell>{length5}</TableCell>
                    <TableCell>{width5}</TableCell>

                    <TableCell>{qty5}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Trunion Box Vertical Plt.</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={thickness4}
                          label="Nozzle Model"
                          onChange={(e) => setThickness6(e.target.value)}
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

                    <TableCell>{weight6}</TableCell>
                    <TableCell>{length6}</TableCell>
                    <TableCell>{width6}</TableCell>

                    <TableCell>{qty6}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Trunion Box Side Plt.</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight7}</TableCell>
                    <TableCell>{length7}</TableCell>
                    <TableCell>{width7}</TableCell>

                    <TableCell>{qty7}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Resting Box Hori. Plt</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight8}</TableCell>
                    <TableCell>{length8}</TableCell>
                    <TableCell>{width8}</TableCell>

                    <TableCell>{qty8}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Resting Box Ver. Plt.</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight9}</TableCell>
                    <TableCell>{length9}</TableCell>
                    <TableCell>{width9}</TableCell>

                    <TableCell>{qty9}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Resting Box side Plt</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight10}</TableCell>
                    <TableCell>{length10}</TableCell>
                    <TableCell>{width10}</TableCell>

                    <TableCell>{qty10}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Legs</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight11}</TableCell>
                    <TableCell>{length11}</TableCell>
                    <TableCell>{width11}</TableCell>

                    <TableCell>{qty11}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Retaining RCS</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight12}</TableCell>
                    <TableCell>{length12}</TableCell>
                    <TableCell>{width12}</TableCell>

                    <TableCell>{qty12}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Lifting Hooks</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight13}</TableCell>
                    <TableCell>{length13}</TableCell>
                    <TableCell>{width13}</TableCell>

                    <TableCell>{qty13}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Stiffners</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight14}</TableCell>
                    <TableCell>{length14}</TableCell>
                    <TableCell>{width14}</TableCell>

                    <TableCell>{qty14}</TableCell>
                  </TableRow>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <TableCell>
                      <p>Trunion Pin</p>
                    </TableCell>
                    <TableCell>
                      <FormControl
                        sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Thick/size
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

                    <TableCell>{weight15}</TableCell>
                    <TableCell>{length15}</TableCell>
                    <TableCell>{width15}</TableCell>

                    <TableCell>{qty15}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          {/* yaha hu */}
        </div>
        <div className="result-box_ladle">
          <div className="fabrication_result_ladle">
            <div className="row4_ladle">
              <p>Fabrication Wt.: {Math.ceil(total_weight)} Kgs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btns_ladle">
        <div className="row4_ladle">
          <Stack spacing={2} direction="row">
            <button
              onClick={() => {
                if(isdisabled){
                  fun();
                }
                else{
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
        <div><button onClick={handleDownloadPDF} className="download_btn">Download PDF</button></div>
      </div>
      <Footer />
    </div>
  );
};

export default Ladlecalculator;
