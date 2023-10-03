
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect, useRef } from "react";
import Footer from "../Footer/footer";
import Navbar from "../navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "react-toastify"

const CC_machine = ({ authtoken }) => {
  const pdfRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const [section, setSection] = useState("");
  const [casting_speed, setCasting_speed] = useState("");
  const [heat_size, setHeat_size] = useState(0);
  const [negative_strip, setNegative_strip] = useState("");
  const [oscl_stroke, setOscl_stroke] = useState("");
  const [oscl_freq, setOscl_freq] = useState(0);
  const [nozzle_degree, setNozzle_degree] = useState("");
  const [constant, setConstant] = useState("");
  const [no_of_strands, setNo_of_strands] = useState("");
  const [viscosity_powder, setViscosity_powder] = useState("");
  const [casting_powder, setCasting_powder] = useState(0);
  const [machine_speed, setMachine_speed] = useState(0);
  const [matalurgical_length, setMatalurgical_length] = useState(0);
  const [secondary_water, setSecondary_water] = useState(0);
  const [secwater, setSecwater] = useState(0);
  const [nozzle_distant, setNozzle_distant] = useState(0);
  const [nozzle_distant2, setNozzle_distant2] = useState(0);
  const [specific_value2, setSpecific_value2] = useState("");
  const [nst, setNst] = useState(0);
  const [col1, setcol1] = useState(0);
  const [col2, setcol2] = useState(0);
  const [col3, setcol3] = useState(0);
  const [casting_time, setCasting_time] = useState(0);
  const [throughput, setThroughput] = useState(0);
  const [primary_water, setPrimary_water] = useState(0);
  const [metal_density, setMetal_density] = useState(0);
  const [zone31, setzone31] = useState(0);
  const [zone32, setzone32] = useState(0);
  const [zone33, setzone33] = useState(0);
  const [zone34, setzone34] = useState(0);
  const [zone35, setzone35] = useState(0);
  const [zone36, setzone36] = useState(0);
  const [nozzle_model, setNozzle_model] = useState("");
  const [nozzle_flow_zone1, setNozzle_flow_zone1] = useState(0);
  const [no_of_nozzle_req, setNo_of_nozzle_req] = useState(0);
  const [avail_nozzles, setAvail_nozzles] = useState(0);
  const [nozzle_max_pr, setNozzle_max_pr] = useState(0);
  const [nozzle_max_flow, setNozzle_max_flow] = useState(0);
  const [nozzle_set_pr, setNozzle_set_pr] = useState(0);
  const [flow, setFlow] = useState(0);
  const [flowcol22, setFlowcol22] = useState(0);
  const [flowcol23, setFlowcol23] = useState(0);
  const [flowcol24, setFlowcol24] = useState(0);
  const [flowcol26, setFlowcol26] = useState(0);
  const [flowcol27, setFlowcol27] = useState(0);
  const [prcol31, setprcol31] = useState(0);
  const [prcol32, setprcol32] = useState(0);
  const [prcol33, setprcol33] = useState(0);
  const [prcol34, setprcol34] = useState(0);
  const [prcol35, setprcol35] = useState(0);
  const [prcol36, setprcol36] = useState(0);
  const [prcol37, setprcol37] = useState(0);
  const [nozzle_dia, setNozzle_dia] = useState("");
  const [nozzle_area, setNozzle_area] = useState(0);
  const [ferostatic_height, setferostatic_height] = useState(600);
  // const [constant2, setConstant2] = useState(0);
  const [out_kgpermin, setout_kgpermin] = useState(0);
  const specific_value = 1;
  const constant2 = 9.8;
  const [c, setC] = useState(0);
  const [Si, setSi] = useState(0);
  const [Mn, setMn] = useState(0);
  const [P, setP] = useState(0);
  const [S, setS] = useState(0);
  const [Nb, setNb] = useState(0);
  const [Ca, setCa] = useState(0);
  const [Ni, setNi] = useState(0);
  const [Cu, setCu] = useState(0);
  const [Mo, setMo] = useState(0);
  const [Cr, setCr] = useState(0);
  const [Ce, setCe] = useState(0);
  const [error_show, setError_show] = useState({
    section: false,
    casting_speed:false,
    oscl_stroke: false,
    viscosity_powder: false,
    heat_size: false,
    no_of_strands: false,
    negative_strip: false,
    specific_value2: false,
    constant: false,
    nozzle_model: false,
    nozzle_degree: false,
    nozzle_dia: false,
    ferostatic_height: false,
    c: false,
    Si: false,
    Mn: false,
    P: false,
    S: false,
    Nb: false,
    Ca: false,
    Ni: false,
    Cu: false,
    Mo: false,
    Cr: false,

  })
  const [error, seterror] = useState("");
  const [showoutput, setShowoutput] = useState(false);
  const [liquidus, setliquidus] = useState(0);
  const isdisable = !(section && viscosity_powder && casting_speed && heat_size && no_of_strands && negative_strip && oscl_stroke && specific_value && specific_value2 && nozzle_degree && constant && nozzle_model && nozzle_dia && ferostatic_height && c && Si && Mn && P && S && Nb && Ca && Ni && Cu && Mo && Cr)

  const fun = () => {
    // seterror("Error : Enter the required values")
    // let v = document.querySelector(".error_ccm")
    // v.style.visibility = "initial"
    toast.error("Enter the required value")
    setError_show({...error_show,section: true,
      casting_speed:true,
      oscl_stroke: true,
      viscosity_powder: true,
      heat_size: true,
      no_of_strands: true,
      negative_strip: true,
      specific_value2: true,
      constant: true,
      nozzle_model: true,
      nozzle_degree: true,
      nozzle_dia: true,
      ferostatic_height: true,
      c: true,
      Si: true,
      Mn: true,
      P: true,
      S: true,
      Nb: true,
      Ca: true,
      Ni: true,
      Cu: true,
      Mo: true,
      Cr: true, })
  }

  const fun2 = () => {
    window.location.reload();
  }

  const result = () => {


    let col1 = 0;
    let col2 = 0;
    let col3 = 0;

    let flow = 0;

    if (section == "100x100") {
      col1 = 78.5;
      col2 = 50;
      col3 = 50;
    } else if (section == "110x110") {
      col1 = 94.99;
      col2 = 55;
      col3 = 55;
    } else if (section == "80x80") {
      col1 = 50.24;
      col2 = 40;
      col3 = 40;
    } else if (section == "120x120") {
      col1 = 113.04;
      col2 = 60;
      col3 = 60;
    } else if (section == "125x125") {
      col1 = 122.66;
      col2 = 62.5;
      col3 = 62.5;
    } else if (section == "130x130") {
      col1 = 132.67;
      col2 = 65;
      col3 = 65;
    } else if (section == "140x140") {
      col1 = 153.86;
      col2 = 70;
      col3 = 70;
    } else if (section == "150x150") {
      col1 = 176.63;
      col2 = 75;
      col3 = 75;
    } else if (section == "160x160") {
      col1 = 200.96;
      col2 = 80;
      col3 = 80;
    } else if (section == "200x200") {
      col1 = 314;
      col2 = 100;
      col3 = 100;
    } else if (section == "200x250") {
      col1 = 392.5;
      col2 = 100;
      col3 = 125;
    } else if (section == "250x250") {
      col1 = 490.63;
      col2 = 125;
      col3 = 125;
    } else if (section == "300x200") {
      col1 = 471;
      col2 = 150;
      col3 = 100;
    } else if (section == "400x200") {
      col1 = 628;
      col2 = 200;
      col3 = 100;
    } else if (section == "400x400") {
      col1 = 1256;
      col2 = 200;
      col3 = 200;
    }

    setcol1(col1);
    setcol2(col2);
    setcol3(col3);

    if (nozzle_model == "DB1565") {
      flow = 1.5;
    } else if (nozzle_model == "DB2065") {
      flow = 2;
    } else if (nozzle_model == "DB2465") {
      flow = 2.4;
    } else if (nozzle_model == "DB2565") {
      flow = 2.5;
    } else if (nozzle_model == "DB3065") {
      flow = 3;
    } else if (nozzle_model == "DB3565") {
      flow = 3.5;
    } else if (nozzle_model == "DB4065") {
      flow = 4;
    } else if (nozzle_model == "DB4565") {
      flow = 4.5;
    } else if (nozzle_model == "DB5065") {
      flow = 5;
    } else if (nozzle_model == "DB5565") {
      flow = 5.5;
    } else if (nozzle_model == "DB6065") {
      flow = 6;
    } else if (nozzle_model == "DB6565") {
      flow = 6.5;
    } else if (nozzle_model == "DB7065") {
      flow = 7;
    } else if (nozzle_model == "DB7565") {
      flow = 7.5;
    } else if (nozzle_model == "DB8065") {
      flow = 8;
    } else if (nozzle_model == "DB8565") {
      flow = 8.5;
    } else if (nozzle_model == "DB9065") {
      flow = 9;
    } else if (nozzle_model == "DB9565") {
      flow = 9.5;
    }

    setFlow(flow);

    const oscl_freq =
      0.5 *
      ((casting_speed * 1000 + casting_speed * 1000 * negative_strip) /
        oscl_stroke);
    const nst = (
      (60 / (3.1416 * oscl_freq)) *
      Math.acos((100 * casting_speed) / (3.1416 * oscl_freq * oscl_stroke))
    ).toFixed(3);

    const casting_powder = Math.round(
      1000 * ((1.7 * nst) / Math.sqrt(casting_speed * viscosity_powder))
    );
    const machine_speed = (2 * oscl_freq * oscl_stroke) / 1000;
    const matalurgical_length = (
      casting_speed *
      (col2 / constant) *
      (col3 / constant)
    ).toFixed(2);
    const secondary_water = (
      (specific_value2 * specific_value * col2 * col3 * casting_speed * 4) /
      1000
    ).toFixed(2);
    const age = 40;
    const Pr_set = 2.7;
    const maxflow = 120;
    const sec_water = (
      (((secondary_water * age) / 100) * Math.sqrt(Pr_set)) /
      maxflow
    ).toFixed(2);
    const nozzle_distant = Math.round(col2 / 0.63707);
    const nozzle_distant2 = Math.round(col3 / 0.63707);
    const throughput = col1 * casting_speed;
    const casting_time = (
      heat_size /
      ((throughput / 1000) * 60 * no_of_strands)
    ).toFixed(3);
    const primary_water = 10 * (col2 + col3) + 150;
    const maxflow2 = 160;
    const age2 = 55;
    const metal_density = (
      (((secondary_water * age2) / 100) * Math.sqrt(Pr_set)) /
      maxflow2
    ).toFixed(2);
    const age3 = 5;
    const maxflow3 = 16;
    const zone31 = -1 * (negative_strip * 100) * 1.0;
    const zone32 = (casting_time * 60).toFixed(2);
    const zone33 = ((throughput / 1000) * 60).toFixed(2);
    const zone34 = Math.round(10 * (col3 + col2) - 150);
    const zone35 = (
      (((secondary_water * age3) / 100) * Math.sqrt(Pr_set)) /
      maxflow3
    ).toFixed(2);
    const zone36 = (
      (60 / (3.1416 * oscl_freq)) *
      Math.acos((100 * casting_speed) / (3.1416 * oscl_freq * oscl_stroke))
    ).toFixed(3);

    const avail = 24;
    const pr_max = 3.2;

    const nozzle_flow_zone1 = (secondary_water * age) / 100;
    const flow_lpm1 = 5;
    const no_of_nozzle_req = Math.ceil(
      (secondary_water * age) / 100 / flow_lpm1
    );

    const flowcol22 = (secondary_water * age2) / 100;
    const flow_lpm2 = 5;
    const flowcol23 = Math.ceil(flowcol22 / flow_lpm2);
    const nozzle_area = ((3.1416 / 4) * nozzle_dia * nozzle_dia).toFixed(2);

    const H27 = Math.sqrt((2 * constant2 * ferostatic_height) / 1000);
    const H28 = 0.97 * 0.06 * nozzle_area * nozzle_dia;
    setOscl_freq(Math.round(oscl_freq));
    setCasting_powder(casting_powder);
    setMachine_speed(machine_speed);
    setMatalurgical_length(matalurgical_length);
    setSecondary_water(secondary_water);
    setSecwater(sec_water);
    setNozzle_distant(nozzle_distant);
    setNozzle_distant2(nozzle_distant2);
    setThroughput((throughput).toFixed(2));
    setCasting_time(casting_time);
    setPrimary_water(primary_water);
    setMetal_density(metal_density);
    setzone31(zone31);
    setzone32(zone32);
    setzone33(zone33);
    setzone34(zone34);
    setzone35(zone35);
    setzone36(zone36);
    setNozzle_flow_zone1((nozzle_flow_zone1).toFixed(2));
    setNo_of_nozzle_req(no_of_nozzle_req);
    setAvail_nozzles(avail);
    setNozzle_max_pr(pr_max);
    setNozzle_max_flow(maxflow);
    setNozzle_set_pr(Pr_set);
    setFlowcol22((flowcol22).toFixed(2));
    setFlowcol23(flowcol23);
    setFlowcol24(32);
    setFlowcol26(nozzle_max_pr);
    setFlowcol27(maxflow2);
    const flow_lpm3 = 4;
    const avail3 = 4;
    setprcol31(2);
    setprcol32(((secondary_water * age3) / 100).toFixed(2));
    setprcol33(Math.ceil((secondary_water * age3) / 100 / flow_lpm3));
    setprcol34(avail3);
    setprcol36(maxflow3);
    setNozzle_area(nozzle_area);
    setout_kgpermin(Math.round(H27 * H28));


    const H829 = parseFloat((31.15 * c * c) + (c * 62.645)) + parseFloat((0.609 * Si * Si) + (Si * 2.0678)) + parseFloat(((0.674 * Mn * Mn) + (Mn * 5.3464))) + parseFloat((20 * P * P) + (P * 9)) + parseFloat((1.7724 * S * S) + (24.755 * S)) + parseFloat((1.1159 * Nb * Nb) + (5.3326 * Nb)) + parseFloat((0.0758 * Ca * Ca) + (3.1313 * Ca)) + parseFloat((0.0379 * Ni * Ni) + (5.2917 * Ni)) + parseFloat((0.6818 * Cu * Cu) + (2.5955 * Cu)) + parseFloat((0.0214 * Mo * Mo) + (3.2214 * Mo)) + parseFloat((0.0359 * Cr * Cr) + (1.1402 * Cr))
    const liquidus = (Math.round(1538 - H829 + 1.7971 + 0.3358)).toFixed(2)
    setliquidus(liquidus)

    const Ce = parseFloat(c) + parseFloat(Mn / 6) + (parseFloat(parseFloat(Cr) + parseFloat(Mo)) / 5) + (parseFloat(parseFloat(Ni) + parseFloat(Cu)) / 15);

    setCe((Ce).toFixed(2));

    setShowoutput(true);
  };


  const handleDownloadPDF = () => {
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
      pdf.save('ccm.pdf')
    });
    toast.success("Successfully Calculated")
  };


  return (
    <div className="body_ccm" >
      <Navbar moveIndex={0} authtoken={authtoken} />
      <div ref={pdfRef} id="pdf">
        <h2 className="head" style={{fontSize:'33px'}}>CCM Complete Solution</h2>
        <div className="ccm_desc">
          <p className="ccm_para">
            <span style={{ color: "#1081fc" }}>A Continuous Casting Machine (CCM)</span> is a state-of-the-art industrial apparatus integral to the metallurgical and manufacturing sectors. It transforms the production of metals, especially steel and non-ferrous alloys, by enabling a continuous and seamless casting process. Unlike traditional methods, CCMs do away with the need for multiple mold changes and reheating steps. Instead, molten metal is poured into a tundish and flows through a water-cooled mold, emerging as perfectly shaped products like slabs, billets, and blooms.
          </p>
        </div>
        <h2 className="head_cc">Concast Data</h2>

        {/* <div className="tab_container_output">
          <TableContainer component={Paper} style={{ backgroundColor: "#f9fbfc" }}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">C%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="C%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setC(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Si%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Si%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setSi(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Mn%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Mn%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setMn(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">P%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="P%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setP(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">S%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="S%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setS(e.target.value)}
                      />
                    </div>
                  </TableCell>

                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Nb%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Nb%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setNb(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Ca%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Ca%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setCa(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Ni%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Ni%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setNi(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Cu%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Cu%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setCu(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Mo%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Mo%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setMo(e.target.value)}
                      />
                    </div>
                  </TableCell>

                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Cr%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Cr%"
                        size="small"
                        variant="outlined"
                        type="number"
                        onChange={(e) => setCr(e.target.value)}
                      />
                    </div>
                  </TableCell>

                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div> */}




        <div className="tab_container_main">
          <TableContainer component={Paper} style={{ backgroundColor: "#f9fbfc" }}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell component="th" scope="row">
                    <div className="ok">
                    <label className="label o">Section</label>
                    <FormControl
                      sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                      size="small"
                      error={error_show.section && !section}
                    >
                      <InputLabel id="demo-select-small-label">
                        Section
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={section}
                        label="Section"
                        onChange={(e) => setSection(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"100x100"}>100x100</MenuItem>
                        <MenuItem value={"110x110"}>110x110</MenuItem>
                        <MenuItem value={"80x80"}>80x80</MenuItem>
                        <MenuItem value={"120x120"}>120x120</MenuItem>
                        <MenuItem value={"125x125"}>125x125</MenuItem>
                        <MenuItem value={"130x130"}>130x130</MenuItem>
                        <MenuItem value={"140x140"}>140x140</MenuItem>
                        <MenuItem value={"150x150"}>150x150</MenuItem>
                        <MenuItem value={"160x160"}>160x160</MenuItem>
                        <MenuItem value={"200x200"}>200x200</MenuItem>
                        <MenuItem value={"200x250"}>200x250</MenuItem>
                        <MenuItem value={"250x250"}>250x250</MenuItem>
                        <MenuItem value={"300x200"}>300x200</MenuItem>
                        <MenuItem value={"400x200"}>400x200</MenuItem>
                        <MenuItem value={"400x400"}>400x400</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                  <div className="ok">
                    <label className="label o1">Casting Speed(Mtr/Min)</label>
                    <FormControl
                      sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                      size="small"
                      error={error_show.casting_speed && !casting_speed}
                    >
                      <InputLabel id="demo-select-small-label">
                        Casting Speed
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={casting_speed}
                        label="Casting Speed"
                        onChange={(e) => setCasting_speed(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0.5}>0.5</MenuItem>
                        <MenuItem value={0.6}>0.6</MenuItem>
                        <MenuItem value={0.7}>0.7</MenuItem>
                        <MenuItem value={0.8}>0.8</MenuItem>
                        <MenuItem value={0.9}>0.9</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={1.1}>1.1</MenuItem>
                        <MenuItem value={1.2}>1.2</MenuItem>
                        <MenuItem value={1.3}>1.3</MenuItem>
                        <MenuItem value={1.4}>1.4</MenuItem>
                        <MenuItem value={1.5}>1.5</MenuItem>
                        <MenuItem value={1.6}>1.6</MenuItem>
                        <MenuItem value={1.7}>1.7</MenuItem>
                        <MenuItem value={1.8}>1.8</MenuItem>
                        <MenuItem value={1.9}>1.9</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={2.1}>2.1</MenuItem>
                        <MenuItem value={2.2}>2.2</MenuItem>
                        <MenuItem value={2.3}>2.3</MenuItem>
                        <MenuItem value={2.4}>2.4</MenuItem>
                        <MenuItem value={2.5}>2.5</MenuItem>
                        <MenuItem value={2.6}>2.6</MenuItem>
                        <MenuItem value={2.7}>2.7</MenuItem>
                        <MenuItem value={2.8}>2.8</MenuItem>
                        <MenuItem value={2.9}>2.9</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={3.2}>3.2</MenuItem>
                        <MenuItem value={3.6}>3.6</MenuItem>
                        <MenuItem value={3.8}>3.8</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                  </TableCell>

                  <TableCell component="th" scope="row">
                  <div className="ok">
                    <label className="label o">Oscl. Stroke(MM)</label>
                    <FormControl
                      sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                      size="small"
                      error={error_show.oscl_stroke && !oscl_stroke}
                    >
                      <InputLabel id="demo-select-small-label">
                        Oscl. Stroke
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={oscl_stroke}
                        label="Oscl. Stroke"
                        onChange={(e) => setOscl_stroke(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                  </TableCell>

                  <TableCell align="left">
                  <div className="ok">
                    <label className="label">(dpa.s)</label>
                    <FormControl
                      sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                      size="small"
                      error={error_show.viscosity_powder && !viscosity_powder}
                    >
                      <InputLabel id="demo-select-small-label">
                        Viscosity Powder
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={viscosity_powder}
                        label="Viscosity Powder"
                        onChange={(e) => setViscosity_powder(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0.94}>0.94</MenuItem>
                        <MenuItem value={0.27}>0.27</MenuItem>
                        <MenuItem value={0.1}>0.1</MenuItem>
                        <MenuItem value={0.15}>0.15</MenuItem>
                        <MenuItem value={0.24}>0.24</MenuItem>
                        <MenuItem value={1.3}>1.3</MenuItem>
                        <MenuItem value={0.99}>0.99</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                  </TableCell>
                  
                  


                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell component="th" scope="row">
                    <div className="ok">
                    <label className="label o">Heat Size(MT)</label>
                    <TextField
                      required
                      sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                      className="textfield"
                      id="outlined-number"
                      label="Heat Size"
                      size="small"
                      variant="outlined"
                      error={error_show.heat_size && !heat_size}
                      type="number"
                      onChange={(e) => setHeat_size(e.target.value)}
                    />
                    </div>
                  </TableCell>
                  <TableCell align="left">
                  <div className="ok">
                    <label className="label o">Nos. of Strand</label>
                    <FormControl
                      sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                      size="small"
                      error={error_show.no_of_strands && !no_of_strands}
                    >
                      <InputLabel id="demo-select-small-label">
                        Nos. of Strands
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={no_of_strands}
                        label="Nos. of Strands"
                        onChange={(e) => setNo_of_strands(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                  <div className="ok">
                    <label className="label o">Negative Strip(%)</label>
                    <FormControl
                      sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                      size="small"
                      error={error_show.negative_strip && !negative_strip}
                    >
                      <InputLabel id="demo-select-small-label">
                        Negative Strip(%)
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={negative_strip}
                        label="Negative Strip"
                        onChange={(e) => setNegative_strip(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={0.26}>0.26</MenuItem>
                        <MenuItem value={0.27}>0.27</MenuItem>
                        <MenuItem value={0.28}>0.28</MenuItem>
                        <MenuItem value={0.29}>0.29</MenuItem>
                        <MenuItem value={0.3}>0.3</MenuItem>
                        <MenuItem value={0.31}>0.31</MenuItem>
                        <MenuItem value={0.32}>0.32</MenuItem>
                        <MenuItem value={0.33}>0.33</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                  </TableCell>
                  
                  <TableCell component="th" scope="row">
                  <div className="ok">
                    <label className="label o">Metal Density</label>
                    <FormControl
                      sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                      size="small"
                      error={error_show.specific_value2 && !specific_value2}
                    >
                      <InputLabel id="demo-select-small-label">
                        Metal Density
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={specific_value2}
                        label="Metal Density"
                        onChange={(e) => setSpecific_value2(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={7.65}>7.65</MenuItem>
                        <MenuItem value={7.66}>7.66</MenuItem>
                        <MenuItem value={7.68}>7.68</MenuItem>
                        <MenuItem value={7.7}>7.70</MenuItem>
                        <MenuItem value={7.72}>7.72</MenuItem>
                        <MenuItem value={7.74}>7.74</MenuItem>
                        <MenuItem value={7.76}>7.76</MenuItem>
                        <MenuItem value={7.78}>7.78</MenuItem>
                        <MenuItem value={7.8}>7.80</MenuItem>
                        <MenuItem value={7.82}>7.82</MenuItem>
                        <MenuItem value={7.84}>7.84</MenuItem>
                        <MenuItem value={7.86}>7.86</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                  </TableCell>

                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  
                  <TableCell component="th" scope="row">
                  <div className="ok">
                    <label className="label o">Constant</label>
                    <FormControl
                      sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                      size="small"
                      error={error_show.constant && !constant}
                    >
                      <InputLabel id="demo-select-small-label">
                        Constant
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={constant}
                        label="Constant"
                        onChange={(e) => setConstant(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={26}>26</MenuItem>
                        <MenuItem value={27}>27</MenuItem>
                        <MenuItem value={28}>28</MenuItem>
                        <MenuItem value={29}>29</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Nozzle Model</label>
                      <FormControl
                        sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                        size="small"
                        error={error_show.nozzle_model && !nozzle_model}
                      >
                        <InputLabel id="demo-select-small-label">
                          Nozzle Model
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={nozzle_model}
                          label="Nozzle Model"
                          onChange={(e) => setNozzle_model(e.target.value)}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={"DB1565"}>DB1565</MenuItem>
                          <MenuItem value={"DB2065"}>DB2065</MenuItem>
                          <MenuItem value={"DB2465"}>DB2465</MenuItem>
                          <MenuItem value={"DB2565"}>DB2565</MenuItem>
                          <MenuItem value={"DB3065"}>DB3065</MenuItem>
                          <MenuItem value={"DB3565"}>DB3565</MenuItem>
                          <MenuItem value={"DB4065"}>DB4065</MenuItem>
                          <MenuItem value={"DB4565"}>DB4565</MenuItem>
                          <MenuItem value={"DB5065"}>DB5065</MenuItem>
                          <MenuItem value={"DB5565"}>DB5565</MenuItem>
                          <MenuItem value={"DB6065"}>DB6065</MenuItem>
                          <MenuItem value={"DB6565"}>DB6565</MenuItem>
                          <MenuItem value={"DB7065"}>DB7065</MenuItem>
                          <MenuItem value={"DB7565"}>DB7565</MenuItem>
                          <MenuItem value={"DB8065"}>DB8065</MenuItem>
                          <MenuItem value={"DB8565"}>DB8565</MenuItem>
                          <MenuItem value={"DB9065"}>DB9065</MenuItem>
                          <MenuItem value={"DB9565"}>DB9565</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                  <div className="ok">
                    <label className="label o">Nozzle Degree</label>
                    <FormControl
                      sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                      size="small"
                      error={error_show.nozzle_degree && !nozzle_degree}
                    >
                      <InputLabel id="demo-select-small-label">
                        Nozzle Degree
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={nozzle_degree}
                        label="Nozzle Degree"
                        onChange={(e) => setNozzle_degree(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={65}>65</MenuItem>
                        <MenuItem value={80}>80</MenuItem>
                        <MenuItem value={110}>110</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>


        <h2 className="head_cc">Tundish Nozzle Calculations</h2>
        <div className="tundish">
          <div className="ok">
            <label className="label o">Nozzle Dia(mm)</label>
            <FormControl
              sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
              size="small"
              error={error_show.nozzle_dia && !nozzle_dia}
            >
              <InputLabel id="demo-select-small-label">
                Nozzle Dia(mm)
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={nozzle_dia}
                label="Nozzle Model"
                onChange={(e) => setNozzle_dia(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={12.5}>12.5</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={13.5}>13.5</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={14.5}>14.5</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={15.5}>15.5</MenuItem>
                <MenuItem value={16}>16</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="ok">
            <label className="label o">Ferostatic Height(mm)</label>
            <TextField
              required
              sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
              className="textfield"
              id="outlined-number"
              label="Ferostatic Height"
              size="small"
              variant="outlined"
              type="number"
              error={error_show.ferostatic_height && !ferostatic_height}
              defaultValue={600}
              onChange={(e) => setferostatic_height(e.target.value)}
            />
          </div>
        </div>
        {/* <div className="tab_container_output">
          <TableContainer component={Paper} style={{ backgroundColor: "#f9fbfc" }}>
            <Table sx={{ minWidth: 150 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >


                  <TableCell>
                    <div className="ok">
                      <label className="label o">Nozzle Dia(mm)</label>
                      <FormControl
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        size="small"
                      >
                        <InputLabel id="demo-select-small-label">
                          Nozzle Dia(mm)
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={nozzle_dia}
                          label="Nozzle Model"
                          onChange={(e) => setNozzle_dia(e.target.value)}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={12}>12</MenuItem>
                          <MenuItem value={12.5}>12.5</MenuItem>
                          <MenuItem value={13}>13</MenuItem>
                          <MenuItem value={13.5}>13.5</MenuItem>
                          <MenuItem value={14}>14</MenuItem>
                          <MenuItem value={14.5}>14.5</MenuItem>
                          <MenuItem value={15}>15</MenuItem>
                          <MenuItem value={15.5}>15.5</MenuItem>
                          <MenuItem value={16}>16</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="ok">
                      <label className="label">Ferostatic Height(mm)</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        // label="Ferostatic Height"
                        size="small"
                        variant="outlined"
                        type="number"
                        defaultValue={600}
                        onChange={(e) => setferostatic_height(e.target.value)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div> */}
        <h2 className="head_cc">CE Ratio Calculations</h2>
        <div className="tab_container_output">
          <TableContainer component={Paper} style={{ backgroundColor: "#f9fbfc" }}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">C%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="C%"
                        size="small"
                        variant="outlined"
                        error={error_show.c && !c}
                        type="number"
                        onChange={(e) => setC(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Si%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Si%"
                        size="small"
                        variant="outlined"
                        error={error_show.Si && !Si}
                        type="number"
                        onChange={(e) => setSi(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Mn%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Mn%"
                        size="small"
                        variant="outlined"
                        error={error_show.Mn && !Mn}
                        type="number"
                        onChange={(e) => setMn(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">P%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="P%"
                        size="small"
                        variant="outlined"
                        error={error_show.P && !P}
                        type="number"
                        onChange={(e) => setP(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  

                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">S%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="S%"
                        size="small"
                        variant="outlined"
                        error={error_show.S && !S}
                        type="number"
                        onChange={(e) => setS(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Nb%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Nb%"
                        size="small"
                        variant="outlined"
                        error={error_show.Nb && !Nb}
                        type="number"
                        onChange={(e) => setNb(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Ca%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Ca%"
                        size="small"
                        error={error_show.Ca && !Ca}
                        variant="outlined"
                        type="number"
                        onChange={(e) => setCa(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Ni%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Ni%"
                        size="small"
                        variant="outlined"
                        error={error_show.Ni && !Ni}
                        type="number"
                        onChange={(e) => setNi(e.target.value)}
                      />
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  hover
                >
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Cu%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Cu%"
                        size="small"
                        error={error_show.Cu && !Cu}
                        variant="outlined"
                        type="number"
                        onChange={(e) => setCu(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Mo%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Mo%"
                        size="small"
                        variant="outlined"
                        error={error_show.Mo && !Mo}
                        type="number"
                        onChange={(e) => setMo(e.target.value)}
                      />
                    </div>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className="ok">
                      <label className="label o">Cr%</label>
                      <TextField
                        required
                        sx={{ m: 1, minWidth: isMobile ? 160 : 100 }}
                        className="textfield"
                        id="outlined-number"
                        label="Cr%"
                        size="small"
                        variant="outlined"
                        type="number"
                        error={error_show.Cr && !Cr}
                        onChange={(e) => setCr(e.target.value)}
                      />
                    </div>
                  </TableCell>

                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="main_btn">
          <Stack spacing={2} direction="row">
            <button
              onClick={() => {
                if (isdisable) {
                  fun();
                }
                else {
                  result();
                }
              }}
              className="button btn_res"

            >
              Calculate
            </button>

          </Stack>
          {/* <p className="error_ccm">{error}</p> */}


        </div>
        {/* output */}
        <div className={showoutput ? "" : "dis"}>
          <h2 className="head_cc" style={{fontSize:'33px'}}>Output</h2>
          <h2 className="head_cc">Concast Data</h2>
          <div className="tab_container_main">
            <TableContainer component={Paper} style={{ backgroundColor: "#f9fbfc" }}>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell component="th" scope="row">
                      <label className="label">Oscl. Freq(Cycle/Min)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {oscl_freq}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell align="left">
                      <label className="label">Machine Speed(Mtr/Min)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {machine_speed}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell align="left">
                      <label className="label">Casting Time(Hr)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {casting_time}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell align="left">
                      <label className="label">Casting Time(Min)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {zone32}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    
                    <TableCell align="left">
                      <label className="label">Throughput(kg/Min)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {throughput}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Throughput(MT/Hr)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {zone33}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Primary Water Max(Lpm)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {primary_water}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Primary Water Min(Lpm)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {zone34}
                        </p>
                      </div>
                    </TableCell>
                    
                  </TableRow>

                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >                  
                    <TableCell align="left">
                      <label className="label">Secondary Water(Lpm)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {secondary_water}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Sec. Water Pr.(kg/cm^2)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {secwater}
                        </p>
                        <label className="zone">Zone 1</label>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Sec. Water Pr.(kg/cm^2)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {metal_density}
                        </p>
                        <label className="zone">Zone 2</label>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Sec. Water Pr.(kg/cm^2)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {zone35}
                        </p>
                        <label className="zone">Zone 3</label>
                      </div>
                    </TableCell>
                    
                  </TableRow>
                  
                  

                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell align="left">
                      <label className="label">Casting Powder (Gram/T)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {casting_powder}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Metalurgical Length(Mtr)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {matalurgical_length}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell align="left">
                      <label className="label">Specific Value</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {specific_value}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">NST(Sec)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {zone36}
                        </p>
                      </div>
                    </TableCell>

                    
                    
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell align="left">
                      <label className="label">Nozzle Distant(mm)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_distant}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Nozzle Distant(mm)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_distant2}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">(%)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {" "}
                          {(zone31).toFixed(2)}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <h2 className="head_cc">Tundish Nozzle Calculation</h2>
          <div className="tab_container_output">
            <TableContainer component={Paper} style={{ backgroundColor: "#f9fbfc" }}>
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell component="th" scope="row">
                      <label className="label">Nozzle Set Pr.</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_set_pr}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Flow(Lpm)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {flow}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Pr.</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {prcol31}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell component="th" scope="row">
                      <label className="label">Nozzle Flow</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_flow_zone1}
                        </p>
                        <label className="zone">Zone 1</label>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Nozzle Flow</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {flowcol22}
                        </p>
                        <label className="zone">Zone 2</label>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label">Nozzle Flow</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {prcol32}
                        </p>
                        <label className="zone">Zone 3</label>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell component="th" scope="row">
                      <label className="label">Nos. of Nozzles Req.</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {no_of_nozzle_req}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label o"></label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {flowcol23}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label o"></label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {prcol33}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell component="th" scope="row">
                      <label className="label">Avail Nozzles No.</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {avail_nozzles}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label o"></label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {flowcol24}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label o"></label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {prcol34}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell component="th" scope="row">
                      <label className="label">Nozzle Max Pr.</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_max_pr}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label o"></label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_max_pr}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label o"></label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_max_pr}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell component="th" scope="row">
                      <label className="label">Nozzle Max Flow</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_max_flow}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label o"></label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {flowcol27}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label o"></label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {prcol36}
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >
                    <TableCell align="left">
                      <label className="label o"></label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_set_pr}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <label className="label o"></label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_set_pr}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell component="th" scope="row">

                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <h2 className="head_cc">CE Ratio Calculation</h2>
          <div className= "tab_container_output">
            <TableContainer component={Paper} style={{ backgroundColor: "#f9fbfc" }}>
              <Table sx={{ minWidth: 150 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover
                  >

                    <TableCell align="left">
                    <label className="label">Max. Flow</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {out_kgpermin}Kg/Min
                        </p>
                      </div>
                    </TableCell>

                    <TableCell align="left">
                      <label className="label">Nozzle Area(Sq.mm)</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {nozzle_area} Sq.mm
                        </p>
                      </div>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <label className="label">Constant</label>
                      <div className="out_box">
                        <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                          {constant2}
                        </p>
                      </div>
                    </TableCell>

                  </TableRow>
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    hover>
                  <TableCell component="th" scope="row">
                      <div className="ok">
                        <label className="label">CE%</label>
                        <div className="out_box">
                          <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                            {Ce}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <div className="ok">
                        <label className="label">Liquidus Temp.</label>
                        <div className="out_box">
                          <p style={{ color: "rgb(100,100,100)", padding: "10px" }}>
                            {liquidus}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          
        </div>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '1vh' }} className={showoutput ? "" : "dis"}><button onClick={handleDownloadPDF} className="download_btn">Download PDF</button></div>
      <div style={{ textAlign: 'center', marginBottom: '5vh' }} className={showoutput ? "" : "dis"}><button onClick={fun2} className="download_btn">Reset</button></div>
      <Footer />
    </div>
  );
};

export default CC_machine;
