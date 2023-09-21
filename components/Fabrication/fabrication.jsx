
import * as React from 'react';
import { useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";




const rows = [
  
];

  

export default function StickyHeadTable() {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));
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
    const [outputlining4, setOutputlining4] = useState(0);
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
    const [width1, setWidth1] = useState(0);
    const [width2, setWidth2] = useState(0);
    const [volumn1, setVolumn1] = useState(0.0);
    const [volumn2, setVolumn2] = useState(0.0);
    const [volumn3, setVolumn3] = useState(0.0);
    const [volumn4, setVolumn4] = useState(0.0);
    const [volumn5, setVolumn5] = useState(0.0);
    const [volumn6, setVolumn6] = useState(0.0);
    const [volumn7, setVolumn7] = useState(0.0);
    const [volumn8, setVolumn8] = useState(0.0);
    const [volumn9, setVolumn9] = useState(0.0);
    const [volumn10, setVolumn10] = useState(0);
    const [volumn11, setVolumn11] = useState(0);
    const [volumn12, setVolumn12] = useState(0);
    const [volumn13, setVolumn13] = useState(0);
    const [volumn14, setVolumn14] = useState(0);
    const [volumn15, setVolumn15] = useState(0);
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
    const [total_weight, setTotal_weight] = useState(0);
  
    const top_dia_mean = parseInt(topdiameter) + parseInt(thickness1);
    const degree_tan =
      (parseInt(topdiameter) - parseInt(bottomdiameter)) / (2 * parseInt(height));
    const cos_A = Math.cos(
      (Math.PI / 180) * (Math.atan(degree_tan) * (Math.PI / 180))
    );
    const R2 = top_dia_mean / 2 / degree_tan / cos_A;
    const develop_angle = (top_dia_mean * 3.1416 * 360) / (3.1416 * R2 * 4);
    const dev_sin = Math.sin((Math.PI / 180) * develop_angle);
  
    const slant_height = height / cos_A;
    const r2 = R2 - slant_height;
    const dev_bottom = r2 * dev_sin * 2;
    const F959 = Math.sqrt(r2 * r2 - (dev_bottom / 2) * (dev_bottom / 2));
  
    const j31 = 7.864;
    const length_other = 0;
    const width_other = 0;



    const result3 = ()=>{
        event.preventDefault();
        const length1 = Math.round(R2 * dev_sin * 2);
        const width1 = parseInt(slant_height) + (parseInt(r2) - parseInt(F959));
        const volumn1 = ((thickness1 * length1 * width1) / 1000000).toFixed(2);
    
        const width2 = bottomdiameter;
        const length2 = bottomdiameter;
        const volumn2 = (
          ((3.1416 / 4) * length2 * width2 * thickness2) /
          1000000
        ).toFixed(2);
    
        const volumn3 = thickness3 * width_other * length_other;
        const volumn4 = thickness4 * length_other * width_other * 4;
        const volumn5 = thickness5 * length_other * width_other * 4;
        const volumn6 = thickness6 * length_other * width_other * 4;
        const volumn7 = thickness7 * length_other * width_other * 4;
        const volumn8 =
          (3.1416 / 4) * length_other * length_other * width_other * 2;
        const volumn9 = width_other * width_other * length_other * 1;
        const volumn10 = thickness10 * length_other * width_other * 9;
        const volumn12 =
          ((3.1416 / 4) * thickness12 * thickness12 * width_other) / 1000;
        const volumn14 = thickness14 * length_other * width_other * 3;
        const volumn15 = thickness15 * length_other * width_other * 2;
        
    
    
        setLength1(length1);
        setWidth1(width1);
        setVolumn1(volumn1);
        setweight1(Math.ceil(j31 * volumn1));
        setLength2(length2);
        setWidth2(width2);
        setVolumn2(volumn2);
        setweight2(Math.round(j31 * volumn2));
        setVolumn3(volumn3);
        setweight3(volumn3 * j31);
        setVolumn4(volumn4);
        setVolumn5(volumn5);
        setVolumn6(volumn6);
        setVolumn7(volumn7);
        setVolumn8(volumn8);
        setVolumn9(volumn9);
        setVolumn10(volumn10);
        setVolumn12(volumn12);
        setVolumn14(volumn14);
        setVolumn15(volumn15);
        setweight4(j31 * volumn4);
        setweight5(j31 * volumn5);
        setweight6(j31 * volumn6);
        setweight7(j31 * volumn7);
        setweight8(j31 * volumn8);
        setweight9(j31 * volumn9);
        setweight10(j31 * volumn10);
        setweight11(j31 * volumn11);
        setweight12(j31 * volumn12);
        setweight13(j31 * volumn13);
        setweight14(j31 * volumn14);
        setweight15(j31 * volumn15);
        setTotal_weight((j31 * volumn1)+(j31 * volumn2)+(j31 * volumn3)+(j31 * volumn4)+(j31 * volumn5)+(j31 * volumn6)+(j31 * volumn7)+(j31 * volumn8)+(j31 * volumn9)+(j31 * volumn10)+(j31 * volumn11)+(j31 * volumn12)+(j31 * volumn13)+(j31 * volumn14)+(j31 * volumn15))
      }


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='container'>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                    <p>Particulars</p>
                </TableCell>
                <TableCell>
                    <p>Thick/Size</p>
                </TableCell>
                <TableCell>
                    <p>Weight in Kgs</p>
                </TableCell>
                <TableCell>
                    <p>Length</p>
                </TableCell>
                <TableCell>
                    <p>Width</p>
                </TableCell>
                <TableCell>
                    <p>Remarks</p>
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
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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

                <TableCell>
                    {weight1}
                </TableCell>
                <TableCell>
                    {length1}
                </TableCell>
                <TableCell>
                    {width1}
                </TableCell>
                
                <TableCell>
                    1
                </TableCell>
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
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight2}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                
                <TableCell>
                    1
                </TableCell>
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
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight3}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                
                <TableCell>
                    1
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                    <p>Trunion Box Vert.</p>
                </TableCell>
                <TableCell>
                    <FormControl
                sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                size="small"
                
              >
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight4}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                
                <TableCell>
                    1
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                    <p>Trunion Box Hori.</p>
                </TableCell>
                <TableCell>
                    <FormControl
                sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                size="small"
                
              >
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight5}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                
                <TableCell>
                    1
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                    <p>Rest Box Vert.</p>
                </TableCell>
                <TableCell>
                    <FormControl
                sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                size="small"
                
              >
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={thickness6}
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

                <TableCell>
                    {weight6}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                
                <TableCell>
                    1
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                    <p>Rest Box Hori.</p>
                </TableCell>
                <TableCell>
                    <FormControl
                sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                size="small"
                
              >
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight7}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                
                <TableCell>
                    1
                </TableCell>
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
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight8}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                <TableCell>
                    {volumn8}
                </TableCell>
                <TableCell>
                    1
                </TableCell>
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
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight9}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                <TableCell>
                    {volumn9}
                </TableCell>
                <TableCell>
                    1
                </TableCell>
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
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight10}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                <TableCell>
                    {volumn10}
                </TableCell>
                <TableCell>
                    1
                </TableCell>
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
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight11}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                <TableCell>
                    {volumn11}
                </TableCell>
                <TableCell>
                    1
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                    <p>Tilting Hook</p>
                </TableCell>
                <TableCell>
                    <FormControl
                sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                size="small"
                
              >
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight12}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                <TableCell>
                    {volumn12}
                </TableCell>
                <TableCell>
                    1
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                    <p>Bottom Disc End</p>
                </TableCell>
                <TableCell>
                    <FormControl
                sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                size="small"
                
              >
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight13}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                <TableCell>
                    {volumn13}
                </TableCell>
                <TableCell>
                    1
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                    <p>Legs Bottom</p>
                </TableCell>
                <TableCell>
                    <FormControl
                sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                size="small"
                
              >
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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

                <TableCell>
                    {weight14}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                <TableCell>
                    {volumn14}
                </TableCell>
                <TableCell>
                    1
                </TableCell>
            </TableRow>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell>
                    <p>Trunion Side</p>
                </TableCell>
                <TableCell>
                    <FormControl
                sx={{ m: -1, minWidth: isMobile ? 100 : 60 }}
                size="small"
                
              >
                <InputLabel id="demo-select-small-label">Thick/size</InputLabel>
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
                    {weight15}
                </TableCell>
                <TableCell>
                    {length_other}
                </TableCell>
                <TableCell>
                    {width_other}
                </TableCell>
                <TableCell>
                    {volumn15}
                </TableCell>
                <TableCell>
                    1
                </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <Stack spacing={2} direction="row">
                  <button
                    onClick={() => {
                      result3();
                    }}
                    className="button"
                  >
                    Calculate
                  </button>
                </Stack>
    </div>
  );
}
