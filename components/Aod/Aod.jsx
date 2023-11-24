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
import CircularProgress from '@mui/material/CircularProgress';

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
  const div1Ref = useRef();
  const div2Ref = useRef();
  const div3Ref = useRef();
  const div4Ref = useRef();
  const div5Ref = useRef();
  const div6Ref = useRef();
  const div7Ref = useRef();
  const div8Ref = useRef();
  const div9Ref = useRef();
  const [capacity_aod, Setcapacity_aod] = useState(0)
  const [volumn_aod, Setvolumn_aod] = useState(0)
  const [total_capacity, Settotal_capacity] = useState(0)
  const [total_volumn, Settotal_volumn] = useState(0)
  const [metal, Setmetal] = useState(0)
  const [lining_bricks, Setlining_bricks] = useState(0)
  const [fabricated_vessel, Setfabricated_vessel] = useState(0)
  const [slag, Setslag] = useState(0)
  const [total, Settotal] = useState(0)
  const [vessel_cylindrical_id, setVessel_cylindrical_id] = useState(null);
  const [vessel_cylindrical_height, setVessel_cylindrical_height] =
    useState(null);
  const [top_cone_bottom_id, settop_cone_bottom_id] = useState(" ");
  const [top_cone_height, Settop_cone_height] = useState(null);
  const [top_cone_angle, Settop_cone_angle] = useState(null);
  const [top_safety, Settop_safety] = useState(null);
  const [density_of_liq_metal, Setdensity_of_liq_metal] = useState(null);
  const [bottom_cone_top_id, Setbottom_cone_top_id] = useState(" ");
  const [bottom_cone_height, Setbottom_cone_height] = useState(null);
  const [bottom_cone_angle, Setbottom_cone_angle] = useState(null);
  const [disc_end_dia, Setdisc_end_dia] = useState(0);
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
    useState(" ");
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
  const [safety_bricks_width, Setsafety_bricks_width] = useState(115);
  const [safety_bricks_height, Setsafety_bricks_height] = useState(null);
  const [safety_bricks_length, Setsafety_bricks_length] = useState(230);
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
  const [Diaon1, setDiaon1] = useState(0);
  const [Diaon2, setDiaon2] = useState(0);
  const [Diaon3, setDiaon3] = useState(0);
  const [Diaon4, setDiaon4] = useState(0);
  const [AreaB1, setAreaB1] = useState(0);
  const [AreaB2, setAreaB2] = useState(0);
  const [AreaB3, setAreaB3] = useState(0);
  const [AreaB4, setAreaB4] = useState(0);
  const [AreaL1, setAreaL1] = useState(0);
  const [load, setload] = useState(false);
  const [AreaL2, setAreaL2] = useState(0);
  const [AreaL3, setAreaL3] = useState(0);
  const [AreaL4, setAreaL4] = useState(0);
  const [no_of_layer1, setno_of_layer1] = useState(0);
  const [no_of_layer2, setno_of_layer2] = useState(0);
  const [no_of_layer3, setno_of_layer3] = useState(0);
  const [no_of_layer4, setno_of_layer4] = useState(0);
  const [weight_of_bricks1, Setweight_of_bricks1] = useState(0);
  const [weight_of_bricks2, Setweight_of_bricks2] = useState(0);
  const [weight_of_bricks3, Setweight_of_bricks3] = useState(0);
  const [weight_of_bricks4, Setweight_of_bricks4] = useState(0);
  const [weight_of_bricks5, Setweight_of_bricks5] = useState(0);
  const [sum_weight_bricks, Setsum_weight_bricks] = useState(0);
  const [safety_table_sampling, Setsafety_table_sampling] = useState(0);
  const [safety_table_dia, Setsafety_table_dia] = useState(0);
  const [safety_table_areaB, Setsafety_table_areaB] = useState(0);
  const [safety_table_areaL, Setsafety_table_areaL] = useState(0);
  const [safety_table_nooflayer, Setsafety_table_nooflayer] = useState(0);
  const [safety_table_weight_bricks, Setsafety_table_weight_bricks] = useState(0);
  const [top_cone_table_1_1, Settop_cone_table_1_1] = useState(0);
  const [top_cone_table_1_2, Settop_cone_table_1_2] = useState(0);
  const [top_cone_table_1_3, Settop_cone_table_1_3] = useState(0);
  const [top_cone_table_1_4, Settop_cone_table_1_4] = useState(0);
  const [top_cone_table_1_5, Settop_cone_table_1_5] = useState(0);
  const [top_cone_table_1_6, Settop_cone_table_1_6] = useState(0);
  const [top_cone_table_1_7, Settop_cone_table_1_7] = useState(0);
  const [top_cone_table_1_8, Settop_cone_table_1_8] = useState(0);
  const [top_cone_table_1_9, Settop_cone_table_1_9] = useState(0);
  const [top_cone_table_1_10, Settop_cone_table_1_10] = useState(0);
  const [top_cone_table_1_11, Settop_cone_table_1_11] = useState(0);
  const [top_cone_table_1_12, Settop_cone_table_1_12] = useState(0);
  const [top_cone_table_1_13, Settop_cone_table_1_13] = useState(0);
  const [top_cone_table_1_14, Settop_cone_table_1_14] = useState(0);
  const [top_cone_table_1_15, Settop_cone_table_1_15] = useState(0);
  const [top_cone_table_1_16, Settop_cone_table_1_16] = useState(0);
  const [top_cone_table_1_17, Settop_cone_table_1_17] = useState(0);
  const [top_cone_table_1_18, Settop_cone_table_1_18] = useState(0);
  const [top_cone_table_1_19, Settop_cone_table_1_19] = useState(0);
  const [top_cone_table_1_20, Settop_cone_table_1_20] = useState(0);
  const [top_cone_table_1_21, Settop_cone_table_1_21] = useState(0);
  const [top_cone_table_1_22, Settop_cone_table_1_22] = useState(0);
  const [top_cone_table_1_23, Settop_cone_table_1_23] = useState(0);
  const [top_cone_table_1_24, Settop_cone_table_1_24] = useState(0);
  const [top_cone_table_2_1, Settop_cone_table_2_1] = useState(0);
  const [top_cone_table_2_2, Settop_cone_table_2_2] = useState(0);
  const [top_cone_table_2_3, Settop_cone_table_2_3] = useState(0);
  const [top_cone_table_2_4, Settop_cone_table_2_4] = useState(0);
  const [top_cone_table_2_5, Settop_cone_table_2_5] = useState(0);
  const [top_cone_table_2_6, Settop_cone_table_2_6] = useState(0);
  const [top_cone_table_2_7, Settop_cone_table_2_7] = useState(0);
  const [top_cone_table_2_8, Settop_cone_table_2_8] = useState(0);
  const [top_cone_table_2_9, Settop_cone_table_2_9] = useState(0);
  const [top_cone_table_2_10, Settop_cone_table_2_10] = useState(0);
  const [top_cone_table_2_11, Settop_cone_table_2_11] = useState(0);
  const [top_cone_table_2_12, Settop_cone_table_2_12] = useState(0);
  const [top_cone_table_2_13, Settop_cone_table_2_13] = useState(0);
  const [top_cone_table_2_14, Settop_cone_table_2_14] = useState(0);
  const [top_cone_table_2_15, Settop_cone_table_2_15] = useState(0);
  const [top_cone_table_2_16, Settop_cone_table_2_16] = useState(0);
  const [top_cone_table_2_17, Settop_cone_table_2_17] = useState(0);
  const [top_cone_table_2_18, Settop_cone_table_2_18] = useState(0);
  const [top_cone_table_2_19, Settop_cone_table_2_19] = useState(0);
  const [top_cone_table_2_20, Settop_cone_table_2_20] = useState(0);
  const [top_cone_table_2_21, Settop_cone_table_2_21] = useState(0);
  const [top_cone_table_2_22, Settop_cone_table_2_22] = useState(0);
  const [top_cone_table_2_23, Settop_cone_table_2_23] = useState(0);
  const [top_cone_table_0_1, Settop_cone_table_0_1] = useState(0);
  const [top_cone_table_0_2, Settop_cone_table_0_2] = useState(0);
  const [top_cone_table_0_3, Settop_cone_table_0_3] = useState(0);
  const [top_cone_table_0_4, Settop_cone_table_0_4] = useState(0);
  const [top_cone_table_0_5, Settop_cone_table_0_5] = useState(0);
  const [top_cone_table_0_6, Settop_cone_table_0_6] = useState(0);
  const [top_cone_table_0_7, Settop_cone_table_0_7] = useState(0);
  const [top_cone_table_0_8, Settop_cone_table_0_8] = useState(0);
  const [top_cone_table_0_9, Settop_cone_table_0_9] = useState(0);
  const [top_cone_table_0_10, Settop_cone_table_0_10] = useState(0);
  const [top_cone_table_0_11, Settop_cone_table_0_11] = useState(0);
  const [top_cone_table_0_12, Settop_cone_table_0_12] = useState(0);
  const [top_cone_table_0_13, Settop_cone_table_0_13] = useState(0);
  const [top_cone_table_0_14, Settop_cone_table_0_14] = useState(0);
  const [top_cone_table_0_15, Settop_cone_table_0_15] = useState(0);
  const [top_cone_table_0_16, Settop_cone_table_0_16] = useState(0);
  const [top_cone_table_0_17, Settop_cone_table_0_17] = useState(0);
  const [top_cone_table_0_18, Settop_cone_table_0_18] = useState(0);
  const [top_cone_table_0_19, Settop_cone_table_0_19] = useState(0);
  const [top_cone_table_0_20, Settop_cone_table_0_20] = useState(0);
  const [top_cone_table_0_21, Settop_cone_table_0_21] = useState(0);
  const [top_cone_table_0_22, Settop_cone_table_0_22] = useState(0);
  const [top_cone_table_0_23, Settop_cone_table_0_23] = useState(0);
  const [top_cone_table_0_24, Settop_cone_table_0_24] = useState(0);
  const [top_cone_table_3_1, setTop_cone_table_3_1] = useState(0);
  const [top_cone_table_3_2, setTop_cone_table_3_2] = useState(0);
  const [top_cone_table_3_3, setTop_cone_table_3_3] = useState(0);
  const [top_cone_table_3_4, setTop_cone_table_3_4] = useState(0);
  const [top_cone_table_3_5, setTop_cone_table_3_5] = useState(0);
  const [top_cone_table_3_6, setTop_cone_table_3_6] = useState(0);
  const [top_cone_table_3_7, setTop_cone_table_3_7] = useState(0);
  const [top_cone_table_3_8, setTop_cone_table_3_8] = useState(0);
  const [top_cone_table_3_9, setTop_cone_table_3_9] = useState(0);
  const [top_cone_table_3_10, setTop_cone_table_3_10] = useState(0);
  const [top_cone_table_3_11, setTop_cone_table_3_11] = useState(0);
  const [top_cone_table_3_12, setTop_cone_table_3_12] = useState(0);
  const [top_cone_table_3_13, setTop_cone_table_3_13] = useState(0);
  const [top_cone_table_3_14, setTop_cone_table_3_14] = useState(0);
  const [top_cone_table_3_15, setTop_cone_table_3_15] = useState(0);
  const [top_cone_table_3_16, setTop_cone_table_3_16] = useState(0);
  const [top_cone_table_3_17, setTop_cone_table_3_17] = useState(0);
  const [top_cone_table_3_18, setTop_cone_table_3_18] = useState(0);
  const [top_cone_table_3_19, setTop_cone_table_3_19] = useState(0);
  const [top_cone_table_3_20, setTop_cone_table_3_20] = useState(0);
  const [top_cone_table_3_21, setTop_cone_table_3_21] = useState(0);
  const [top_cone_table_3_22, setTop_cone_table_3_22] = useState(0);
  const [top_cone_table_3_23, setTop_cone_table_3_23] = useState(0);
  const [top_cone_table_3_24, setTop_cone_table_3_24] = useState(0);

  const [top_cone_table2_1_1, Settop_cone_table2_1_1] = useState(0);
  const [top_cone_table2_1_2, Settop_cone_table2_1_2] = useState(0);
  const [top_cone_table2_1_3, Settop_cone_table2_1_3] = useState(0);
  const [top_cone_table2_1_4, Settop_cone_table2_1_4] = useState(0);
  const [top_cone_table2_1_5, Settop_cone_table2_1_5] = useState(0);
  const [top_cone_table2_1_6, Settop_cone_table2_1_6] = useState(0);
  const [top_cone_table2_1_7, Settop_cone_table2_1_7] = useState(0);
  const [top_cone_table2_1_8, Settop_cone_table2_1_8] = useState(0);
  const [top_cone_table2_1_9, Settop_cone_table2_1_9] = useState(0);
  const [top_cone_table2_1_10, Settop_cone_table2_1_10] = useState(0);
  const [top_cone_table2_1_11, Settop_cone_table2_1_11] = useState(0);
  const [top_cone_table2_1_12, Settop_cone_table2_1_12] = useState(0);
  const [top_cone_table2_1_13, Settop_cone_table2_1_13] = useState(0);
  const [top_cone_table2_1_14, Settop_cone_table2_1_14] = useState(0);
  const [top_cone_table2_1_15, Settop_cone_table2_1_15] = useState(0);
  const [top_cone_table2_1_16, Settop_cone_table2_1_16] = useState(0);
  const [top_cone_table2_2_1, Settop_cone_table2_2_1] = useState(0);
  const [top_cone_table2_2_2, Settop_cone_table2_2_2] = useState(0);
  const [top_cone_table2_2_3, Settop_cone_table2_2_3] = useState(0);
  const [top_cone_table2_2_4, Settop_cone_table2_2_4] = useState(0);
  const [top_cone_table2_2_5, Settop_cone_table2_2_5] = useState(0);
  const [top_cone_table2_2_6, Settop_cone_table2_2_6] = useState(0);
  const [top_cone_table2_2_7, Settop_cone_table2_2_7] = useState(0);
  const [top_cone_table2_2_8, Settop_cone_table2_2_8] = useState(0);
  const [top_cone_table2_2_9, Settop_cone_table2_2_9] = useState(0);
  const [top_cone_table2_2_10, Settop_cone_table2_2_10] = useState(0);
  const [top_cone_table2_2_11, Settop_cone_table2_2_11] = useState(0);
  const [top_cone_table2_2_12, Settop_cone_table2_2_12] = useState(0);
  const [top_cone_table2_2_13, Settop_cone_table2_2_13] = useState(0);
  const [top_cone_table2_2_14, Settop_cone_table2_2_14] = useState(0);
  const [top_cone_table2_2_15, Settop_cone_table2_2_15] = useState(0);
  const [top_cone_table2_0_1, Settop_cone_table2_0_1] = useState(0);
  const [top_cone_table2_0_2, Settop_cone_table2_0_2] = useState(0);
  const [top_cone_table2_0_3, Settop_cone_table2_0_3] = useState(0);
  const [top_cone_table2_0_4, Settop_cone_table2_0_4] = useState(0);
  const [top_cone_table2_0_5, Settop_cone_table2_0_5] = useState(0);
  const [top_cone_table2_0_6, Settop_cone_table2_0_6] = useState(0);
  const [top_cone_table2_0_7, Settop_cone_table2_0_7] = useState(0);
  const [top_cone_table2_0_8, Settop_cone_table2_0_8] = useState(0);
  const [top_cone_table2_0_9, Settop_cone_table2_0_9] = useState(0);
  const [top_cone_table2_0_10, Settop_cone_table2_0_10] = useState(0);
  const [top_cone_table2_0_11, Settop_cone_table2_0_11] = useState(0);
  const [top_cone_table2_0_12, Settop_cone_table2_0_12] = useState(0);
  const [top_cone_table2_0_13, Settop_cone_table2_0_13] = useState(0);
  const [top_cone_table2_0_14, Settop_cone_table2_0_14] = useState(0);
  const [top_cone_table2_0_15, Settop_cone_table2_0_15] = useState(0);
  const [top_cone_table2_0_16, Settop_cone_table2_0_16] = useState(0);
  const [top_cone_table2_3_1, setTop_cone_table2_3_1] = useState(0);
  const [top_cone_table2_3_2, setTop_cone_table2_3_2] = useState(0);
  const [top_cone_table2_3_3, setTop_cone_table2_3_3] = useState(0);
  const [top_cone_table2_3_4, setTop_cone_table2_3_4] = useState(0);
  const [top_cone_table2_3_5, setTop_cone_table2_3_5] = useState(0);
  const [top_cone_table2_3_6, setTop_cone_table2_3_6] = useState(0);
  const [top_cone_table2_3_7, setTop_cone_table2_3_7] = useState(0);
  const [top_cone_table2_3_8, setTop_cone_table2_3_8] = useState(0);
  const [top_cone_table2_3_9, setTop_cone_table2_3_9] = useState(0);
  const [top_cone_table2_3_10, setTop_cone_table2_3_10] = useState(0);
  const [top_cone_table2_3_11, setTop_cone_table2_3_11] = useState(0);
  const [top_cone_table2_3_12, setTop_cone_table2_3_12] = useState(0);
  const [top_cone_table2_3_13, setTop_cone_table2_3_13] = useState(0);
  const [top_cone_table2_3_14, setTop_cone_table2_3_14] = useState(0);
  const [top_cone_table2_3_15, setTop_cone_table2_3_15] = useState(0);
  const [top_cone_table2_3_24, setTop_cone_table2_3_24] = useState(0);
  const [top_cone_table3_0, setTop_cone_table3_0] = useState(0);
  const [top_cone_table3_1, setTop_cone_table3_1] = useState(0);
  const [top_cone_table3_2, setTop_cone_table3_2] = useState(0);
  const [top_cone_table3_3, setTop_cone_table3_3] = useState(0);
  const [top_cone_table4_1_0, setTop_cone_table4_1_0] = useState(0);
  const [top_cone_table4_1_1, setTop_cone_table4_1_1] = useState(0);
  const [top_cone_table4_1_2, setTop_cone_table4_1_2] = useState(0);
  const [top_cone_table4_1_3, setTop_cone_table4_1_3] = useState(0);
  const [top_cone_table4_2_0, setTop_cone_table4_2_0] = useState(0);
  const [top_cone_table4_2_1, setTop_cone_table4_2_1] = useState(0);
  const [top_cone_table4_2_2, setTop_cone_table4_2_2] = useState(0);
  const [top_cone_table4_2_3, setTop_cone_table4_2_3] = useState(0);
  const [top_cone_table4_3_0, setTop_cone_table4_3_0] = useState(0);
  const [top_cone_table4_3_1, setTop_cone_table4_3_1] = useState(0);
  const [top_cone_table4_3_2, setTop_cone_table4_3_2] = useState(0);
  const [top_cone_table4_3_3, setTop_cone_table4_3_3] = useState(0);
  const [top_cone_table4_sum, setTop_cone_table4_sum] = useState(0);
  const [total_weight, Settotal_weight] = useState(0)
  const [sizeW1, SetsizeW1] = useState(0)
  const [sizeW2, SetsizeW2] = useState(0)
  const [sizeW3, SetsizeW3] = useState(0)
  const [sizeW4, SetsizeW4] = useState(0)
  const [sizeW5, SetsizeW5] = useState(0)
  const [sizeW6, SetsizeW6] = useState(0)
  const [sizeW7, SetsizeW7] = useState(0)
  const [sizeW8, SetsizeW8] = useState(0)
  const [sizeW9, SetsizeW9] = useState(0)
  const [sizeW10, SetsizeW10] = useState(0)
  const [sizeW11, SetsizeW11] = useState(0)
  const [sizeW12, SetsizeW12] = useState(0)
  const [sizeW13, SetsizeW13] = useState(0)
  const [sizeW14, SetsizeW14] = useState(0)
  const [sizeL1, SetsizeL1] = useState(0)
  const [sizeL2, SetsizeL2] = useState(0)
  const [sizeL3, SetsizeL3] = useState(0)
  const [sizeL4, SetsizeL4] = useState(0)
  const [sizeL5, SetsizeL5] = useState(0)
  const [sizeL6, SetsizeL6] = useState(0)
  const [sizeL7, SetsizeL7] = useState(0)
  const [sizeL8, SetsizeL8] = useState(0)
  const [sizeL9, SetsizeL9] = useState(0)
  const [sizeL10, SetsizeL10] = useState(0)
  const [sizeL11, SetsizeL11] = useState(0)
  const [sizeL12, SetsizeL12] = useState(0)
  const [sizeL13, SetsizeL13] = useState(0)
  const [sizeL14, SetsizeL14] = useState(0)
  const [qty1, Setqty1] = useState(0)
  const [qty2, Setqty2] = useState(0)
  const [qty3, Setqty3] = useState(0)
  const [qty4, Setqty4] = useState(0)
  const [qty5, Setqty5] = useState(0)
  const [qty6, Setqty6] = useState(0)
  const [qty7, Setqty7] = useState(0)
  const [qty8, Setqty8] = useState(0)
  const [qty9, Setqty9] = useState(0)
  const [qty10, Setqty10] = useState(0)
  const [qty11, Setqty11] = useState(0)
  const [qty12, Setqty12] = useState(0)
  const [qty13, Setqty13] = useState(0)
  const [qty14, Setqty14] = useState(0)
  const [weight1, Setweight1] = useState(0)
  const [weight2, Setweight2] = useState(0)
  const [weight3, Setweight3] = useState(0)
  const [weight4, Setweight4] = useState(0)
  const [weight5, Setweight5] = useState(0)
  const [weight6, Setweight6] = useState(0)
  const [weight7, Setweight7] = useState(0)
  const [weight8, Setweight8] = useState(0)
  const [weight9, Setweight9] = useState(0)
  const [weight10, Setweight10] = useState(0)
  const [weight11, Setweight11] = useState(0)
  const [weight12, Setweight12] = useState(0)
  const [weight13, Setweight13] = useState(0)
  const [weight14, Setweight14] = useState(0)
  const [weightsum, Setweightsum] = useState(0)
  const [dia1, Setdia1] = useState(0)
  const [dia2, Setdia2] = useState(0)
  const [dia3, Setdia3] = useState(0)
  const [dia4, Setdia4] = useState(0)
  const [dia5, Setdia5] = useState(0)
  const [dia6, Setdia6] = useState(0)
  const [dia7, Setdia7] = useState(0)
  const [dia8, Setdia8] = useState(0)
  const [dia9, Setdia9] = useState(0)
  const [dia10, Setdia10] = useState(0)
  const [dia11, Setdia11] = useState(0)
  const [dia12, Setdia12] = useState(0)
  const [dia13, Setdia13] = useState(0)
  const [dia14, Setdia14] = useState(0)
  const [dia15, Setdia15] = useState(0)
  const [dia16, Setdia16] = useState(0)
  const [dia17, Setdia17] = useState(0)
  const [dia18, Setdia18] = useState(0)
  const [dia19, Setdia19] = useState(0)
  const [dia20, Setdia20] = useState(0)
  const [dia21, Setdia21] = useState(0)
  const [dia22, Setdia22] = useState(0)
  const [dia23, Setdia23] = useState(0)
  const [dia24, Setdia24] = useState(0)
  const [dia25, Setdia25] = useState(0)
  const [dia26, Setdia26] = useState(0)
  const [dia27, Setdia27] = useState(0)
  const [dia28, Setdia28] = useState(0)
  const [dia29, Setdia29] = useState(0)
  const [dia30, Setdia30] = useState(0)
  const [dia31, Setdia31] = useState(0)
  const [dia32, Setdia32] = useState(0)
  const [dia33, Setdia33] = useState(0)
  const [dia34, Setdia34] = useState(0)
  const [dia35, Setdia35] = useState(0)
  const [dia36, Setdia36] = useState(0)
  const [dia37, Setdia37] = useState(0)
  const [dia38, Setdia38] = useState(0)
  const [dia39, Setdia39] = useState(0)
  const [dia40, Setdia40] = useState(0)
  const [dia41, Setdia41] = useState(0)
  const [dia42, Setdia42] = useState(0)
  const [dia43, Setdia43] = useState(0)
  const [dia44, Setdia44] = useState(0)
  const [dia45, Setdia45] = useState(0)
  const [dia46, Setdia46] = useState(0)
  const [dia47, Setdia47] = useState(0)
  const [dia48, Setdia48] = useState(0)
  const [dia49, Setdia49] = useState(0)
  const [dia50, Setdia50] = useState(0)
  const [k, setK] = useState(25);
  const [k2, setK2] = useState(50);
  const [k3, setK3] = useState(0);
  const [k4, setK4] = useState(0);


  const [output_show, setOutput_show] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openwar, setOpenwar] = React.useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const handleOpen = () => {
    seterror("");
    let v = document.querySelector(".error_ccm");
    v.style.visibility = "hidden";
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const handleClosewar = () => setOpenwar(false);
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
  const H21 = Math.tan((3.1416 * top_cone_angle) / 180);
  const H26 = Math.tan((3.1416 * bottom_cone_angle) / 180);


  const result = async (event) => {
    const I20 = top_cone_height / 100;
    const I49 = bottom_cone_height / 100;
     const result_ticket = await validate_ticket();
     if (result_ticket === -1) {
       toast.error("You don't have tickets");
       setOpen(false);
       getUserData();
       return;
     }

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

    const X6 =
      parseFloat(vessel_cylindrical_id) -
      parseFloat(parseFloat(size1_t) + parseFloat(safety_lining_length_t)) -
      parseFloat(parseFloat(size1_s) + parseFloat(safety_lining_length_s));
    setDiaon1(Math.round(X6));

    const areaB1 = bricks_std_width * bricks_std_height;
    setAreaB1(areaB1);

    setAreaL1(3.1416 * M14);
    setno_of_layer1(F14 / 100);

    const L14 = 0;
    const weight_of_bricks2 =
      (size1_s *
        bricks_std_width *
        bricks_std_height *
        (parseFloat(K14) + parseFloat(L14)) *
        density_of_bricks) /
      1000000000;
    Setweight_of_bricks2(weight_of_bricks2.toFixed(1));

    Settable1_5_4(K15);
    setDiaon2(M15);
    setAreaB2(areaB1);
    setAreaL2(3.1416 * M15);
    setno_of_layer2(F15 / 100);

    const weight_of_bricks3 =
      (size2_s *
        bricks_std_width *
        bricks_std_height *
        (parseFloat(K15) + parseFloat(L14)) *
        density_of_bricks) /
      1000000000;
    Setweight_of_bricks3(weight_of_bricks3.toFixed(3));

    Settable1_6_4(K16);
    Settable1_6_5(L16);
    setDiaon3(M16);
    setAreaB3(areaB1);
    setAreaL3((3.1416 * M16).toFixed(2));
    setno_of_layer3(F16 / 100);

    const weight_of_bricks4 =
      (size3_s *
        bricks_std_width *
        bricks_std_height *
        (parseFloat(K16) + parseFloat(L16)) *
        density_of_bricks) /
      1000000000;
    Setweight_of_bricks4(weight_of_bricks4.toFixed(3));

    Settable1_7_4(K17);
    Settable1_7_5(L17);
    setDiaon4(M17);
    setAreaB4(areaB1);
    setAreaL4((3.1416 * M17).toFixed(2));
    setno_of_layer4(F17 / 100);
    const weight_of_bricks5 =
      (size4_s *
        bricks_std_width *
        bricks_std_height *
        (parseFloat(K17) + parseFloat(L17)) *
        density_of_bricks) /
      1000000000;
    Setweight_of_bricks5(weight_of_bricks5.toFixed(3));

    const brick_weight = (
      parseFloat(weight_of_bricks2) +
      parseFloat(weight_of_bricks3) +
      parseFloat(weight_of_bricks4) +
      parseFloat(weight_of_bricks5)

    ).toFixed(3)
    Setsum_weight_bricks(
      brick_weight
    );

    Setsafety_table_sampling(Math.ceil(O19 / N19));
    Setsafety_table_dia(vessel_cylindrical_id);
    Setsafety_table_areaB(N19);
    Setsafety_table_areaL(O19);
    Setsafety_table_nooflayer(
      parseFloat(F17 / 100) +
      parseFloat(F16 / 100) +
      parseFloat(F15 / 100) +
      parseFloat(F14 / 100)
    );
    const safety_table_sum =
      (safety_lining_length_t *
        safety_bricks_width *
        safety_bricks_length *
        Math.ceil(O19 / N19) *
        density_of_bricks) /
      1000000000;
    Setsafety_table_weight_bricks(safety_table_sum.toFixed(3));
    const top_cone_table_1_1_t =
      vessel_cylindrical_id -
      2 * (parseFloat(top_cone_lining) + parseFloat(top_safety));
    Settop_cone_table_1_1(top_cone_table_1_1_t);

    let top_cone_table_1_2_t, top_cone_table_2_1_t, top_cone_table_0_2_t;
    if (I20 >= 1) {
      top_cone_table_1_2_t = top_cone_table_1_1_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_2(Math.round(top_cone_table_1_2_t));
      top_cone_table_2_1_t = top_cone_table_1_2_t * 3.1416;
      Settop_cone_table_2_1(top_cone_table_2_1_t.toFixed(6));
      top_cone_table_0_2_t = Math.ceil(top_cone_table_2_1_t / bricks_std_width);
      Settop_cone_table_0_2(top_cone_table_0_2_t);
    } else {
      top_cone_table_0_2_t = 0;
      Settop_cone_table_1_2(null);
      Settop_cone_table_2_1(null);
      Settop_cone_table_0_2(null);
    }

    let top_cone_table_1_3_t, top_cone_table_2_2_t, top_cone_table_0_3_t;
    if (I20 >= 2) {
      top_cone_table_1_3_t = top_cone_table_1_2_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_3(Math.round(top_cone_table_1_3_t));
      top_cone_table_2_2_t = top_cone_table_1_3_t * 3.1416;
      Settop_cone_table_2_2(top_cone_table_2_2_t.toFixed(6));
      top_cone_table_0_3_t = Math.ceil(top_cone_table_2_2_t / bricks_std_width);
      Settop_cone_table_0_3(top_cone_table_0_3_t);
    } else {
      top_cone_table_0_3_t = 0;
      Settop_cone_table_1_3(null);
      Settop_cone_table_2_2(null);
      Settop_cone_table_0_3(null);
    }

    let top_cone_table_1_4_t, top_cone_table_2_3_t, top_cone_table_0_4_t;
    if (I20 >= 3) {
      top_cone_table_1_4_t = top_cone_table_1_3_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_4(Math.round(top_cone_table_1_4_t));
      top_cone_table_2_3_t = top_cone_table_1_4_t * 3.1416;
      Settop_cone_table_2_3(top_cone_table_2_3_t.toFixed(6));
      top_cone_table_0_4_t = Math.ceil(top_cone_table_2_3_t / bricks_std_width);
      Settop_cone_table_0_4(top_cone_table_0_4_t);
    } else {
      top_cone_table_0_4_t = 0;
      Settop_cone_table_1_4(null);
      Settop_cone_table_2_3(null);
      Settop_cone_table_0_4(null);
    }

    let top_cone_table_1_5_t, top_cone_table_2_4_t, top_cone_table_0_5_t;
    if (I20 >= 4) {
      top_cone_table_1_5_t = top_cone_table_1_4_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_5(Math.round(top_cone_table_1_5_t));
      top_cone_table_2_4_t = top_cone_table_1_5_t * 3.1416;
      Settop_cone_table_2_4(top_cone_table_2_4_t.toFixed(6));
      top_cone_table_0_5_t = Math.ceil(top_cone_table_2_4_t / bricks_std_width);
      Settop_cone_table_0_5(top_cone_table_0_5_t);
    } else {
      top_cone_table_0_5_t = 0;
      Settop_cone_table_1_5(null);
      Settop_cone_table_2_4(null);
      Settop_cone_table_0_5(null);
    }

    let top_cone_table_1_6_t, top_cone_table_2_5_t, top_cone_table_0_6_t;
    if (I20 >= 5) {
      top_cone_table_1_6_t = top_cone_table_1_5_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_6(Math.round(top_cone_table_1_6_t));
      top_cone_table_2_5_t = top_cone_table_1_6_t * 3.1416;
      Settop_cone_table_2_5(top_cone_table_2_5_t.toFixed(6));
      top_cone_table_0_6_t = Math.ceil(top_cone_table_2_5_t / bricks_std_width);
      Settop_cone_table_0_6(top_cone_table_0_6_t);
    } else {
      top_cone_table_0_6_t = 0;
      Settop_cone_table_1_6(null);
      Settop_cone_table_2_5(null);
      Settop_cone_table_0_6(null);
    }

    let top_cone_table_1_7_t, top_cone_table_2_6_t, top_cone_table_0_7_t;
    if (I20 >= 6) {
      top_cone_table_1_7_t = top_cone_table_1_6_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_7(Math.round(top_cone_table_1_7_t));
      top_cone_table_2_6_t = top_cone_table_1_7_t * 3.1416;
      Settop_cone_table_2_6(top_cone_table_2_6_t.toFixed(6));
      top_cone_table_0_7_t = Math.ceil(top_cone_table_2_6_t / bricks_std_width);
      Settop_cone_table_0_7(top_cone_table_0_7_t);
    } else {
      top_cone_table_0_7_t = 0;
      Settop_cone_table_1_7(null);
      Settop_cone_table_2_6(null);
      Settop_cone_table_0_7(null);
    }

    let top_cone_table_1_8_t, top_cone_table_2_7_t, top_cone_table_0_8_t;
    if (I20 >= 7) {
      top_cone_table_1_8_t = top_cone_table_1_7_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_8(Math.round(top_cone_table_1_8_t));
      top_cone_table_2_7_t = top_cone_table_1_8_t * 3.1416;
      Settop_cone_table_2_7(top_cone_table_2_7_t.toFixed(6));
      top_cone_table_0_8_t = Math.ceil(top_cone_table_2_7_t / bricks_std_width);
      Settop_cone_table_0_8(top_cone_table_0_8_t);
    } else {
      top_cone_table_0_8_t = 0;
      Settop_cone_table_1_8(null);
      Settop_cone_table_2_7(null);
      Settop_cone_table_0_8(null);
    }

    let top_cone_table_1_9_t;
    let top_cone_table_2_8_t;
    let top_cone_table_0_9_t;
    if (I20 >= 8) {
      top_cone_table_1_9_t = top_cone_table_1_8_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_9(Math.round(top_cone_table_1_9_t));
      top_cone_table_2_8_t = top_cone_table_1_9_t * 3.1416;
      Settop_cone_table_2_8(top_cone_table_2_8_t.toFixed(6));
      top_cone_table_0_9_t = Math.ceil(top_cone_table_2_8_t / bricks_std_width);
      Settop_cone_table_0_9(top_cone_table_0_9_t);
    } else {
      top_cone_table_0_9_t = 0;
      Settop_cone_table_1_9(null);
      Settop_cone_table_2_8(null);
      Settop_cone_table_0_9(null);
    }

    let top_cone_table_1_10_t;
    let top_cone_table_2_9_t;
    let top_cone_table_0_10_t;

    if (I20 >= 9) {
      top_cone_table_1_10_t =
        top_cone_table_1_9_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_10(Math.round(top_cone_table_1_10_t));
      top_cone_table_2_9_t = top_cone_table_1_10_t * 3.1416;
      Settop_cone_table_2_9(top_cone_table_2_9_t.toFixed(6));
      top_cone_table_0_10_t = Math.ceil(
        top_cone_table_2_9_t / bricks_std_width
      );
      Settop_cone_table_0_10(top_cone_table_0_10_t);
    } else {
      top_cone_table_0_10_t = 0;
      Settop_cone_table_1_10(null);
      Settop_cone_table_2_9(null);
      Settop_cone_table_0_10(null);
    }

    let top_cone_table_1_11_t;
    let top_cone_table_2_10_t;
    let top_cone_table_0_11_t;
    if (I20 >= 10) {
      top_cone_table_1_11_t =
        top_cone_table_1_10_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_11(Math.round(top_cone_table_1_11_t));
      top_cone_table_2_10_t = top_cone_table_1_11_t * 3.1416;
      Settop_cone_table_2_10(top_cone_table_2_10_t.toFixed(6));
      top_cone_table_0_11_t = Math.ceil(
        top_cone_table_2_10_t / bricks_std_width
      );
      Settop_cone_table_0_11(top_cone_table_0_11_t);
    } else {
      top_cone_table_0_11_t = 0;
      Settop_cone_table_1_11(null);
      Settop_cone_table_2_10(null);
      Settop_cone_table_0_11(null);
    }

    let top_cone_table_1_12_t;
    let top_cone_table_2_11_t;
    let top_cone_table_0_12_t;
    if (I20 >= 11) {
      top_cone_table_1_12_t =
        top_cone_table_1_11_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_12(Math.round(top_cone_table_1_12_t));
      top_cone_table_2_11_t = top_cone_table_1_12_t * 3.1416;
      Settop_cone_table_2_11(top_cone_table_2_11_t.toFixed(6));
      top_cone_table_0_12_t = Math.ceil(
        top_cone_table_2_11_t / bricks_std_width
      );
      Settop_cone_table_0_12(top_cone_table_0_12_t);
    } else {
      top_cone_table_0_12_t = 0;
      Settop_cone_table_1_12(null);
      Settop_cone_table_2_11(null);
      Settop_cone_table_0_12(null);
    }

    let top_cone_table_1_13_t, top_cone_table_2_12_t, top_cone_table_0_13_t;
    if (I20 >= 12) {
      top_cone_table_1_13_t =
        top_cone_table_1_12_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_13(Math.round(top_cone_table_1_13_t));
      top_cone_table_2_12_t = top_cone_table_1_13_t * 3.1416;
      Settop_cone_table_2_12(top_cone_table_2_12_t.toFixed(6));
      top_cone_table_0_13_t = Math.ceil(
        top_cone_table_2_12_t / bricks_std_width
      );
      Settop_cone_table_0_13(top_cone_table_0_13_t);
    } else {
      top_cone_table_0_13_t = 0;
      Settop_cone_table_1_13(null);
      Settop_cone_table_2_12(null);
      Settop_cone_table_0_13(null);
    }

    let top_cone_table_1_14_t, top_cone_table_2_13_t, top_cone_table_0_14_t;
    if (I20 >= 13) {
      top_cone_table_1_14_t =
        top_cone_table_1_13_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_14(Math.round(top_cone_table_1_14_t));
      top_cone_table_2_13_t = top_cone_table_1_14_t * 3.1416;
      Settop_cone_table_2_13(top_cone_table_2_13_t.toFixed(6));
      top_cone_table_0_14_t = Math.ceil(
        top_cone_table_2_13_t / bricks_std_width
      );
      Settop_cone_table_0_14(top_cone_table_0_14_t);
    } else {
      top_cone_table_0_14_t = 0;
      Settop_cone_table_1_14(null);
      Settop_cone_table_2_13(null);
      Settop_cone_table_0_14(null);
    }

    let top_cone_table_1_15_t, top_cone_table_2_14_t, top_cone_table_0_15_t;
    
    if (I20 >= 14) {
      top_cone_table_1_15_t =
        top_cone_table_1_14_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_15(Math.round(top_cone_table_1_15_t));
      top_cone_table_2_14_t = top_cone_table_1_15_t * 3.1416;
      Settop_cone_table_2_14(top_cone_table_2_14_t.toFixed(6));
      top_cone_table_0_15_t = Math.ceil(
        top_cone_table_2_14_t / bricks_std_width
      );
      Settop_cone_table_0_15(top_cone_table_0_15_t);
    } else {
      top_cone_table_0_15_t = 0;
      Settop_cone_table_1_15(null);
      Settop_cone_table_2_14(null);
      Settop_cone_table_0_15(null);
    }

    let top_cone_table_1_16_t, top_cone_table_2_15_t, top_cone_table_0_16_t;

    if (I20 >= 15) {
      top_cone_table_1_16_t =
        top_cone_table_1_15_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_16(Math.round(top_cone_table_1_16_t));
      top_cone_table_2_15_t = top_cone_table_1_16_t * 3.1416;
      Settop_cone_table_2_15(top_cone_table_2_15_t.toFixed(6));
      top_cone_table_0_16_t = Math.ceil(
        top_cone_table_2_15_t / bricks_std_width
      );
      Settop_cone_table_0_16(top_cone_table_0_16_t);
    } else {
      top_cone_table_0_16_t = 0;
      Settop_cone_table_1_16(null);
      Settop_cone_table_2_15(null);
      Settop_cone_table_0_16(null);
    }

    let top_cone_table_1_17_t, top_cone_table_2_16_t, top_cone_table_0_17_t;

    if (I20 >= 16) {
      top_cone_table_1_17_t =
        top_cone_table_1_16_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_17(Math.round(top_cone_table_1_17_t));
      top_cone_table_2_16_t = top_cone_table_1_17_t * 3.1416;
      Settop_cone_table_2_16(top_cone_table_2_16_t.toFixed(6));
      top_cone_table_0_17_t = Math.ceil(
        top_cone_table_2_16_t / bricks_std_width
      );
      Settop_cone_table_0_17(top_cone_table_0_17_t);
    } else {
      top_cone_table_0_17_t = 0;
      Settop_cone_table_1_17(null);
      Settop_cone_table_2_16(null);
      Settop_cone_table_0_17(null);
    }

    let top_cone_table_1_18_t, top_cone_table_2_17_t, top_cone_table_0_18_t;

    if (I20 >= 17) {
      top_cone_table_1_18_t =
        top_cone_table_1_17_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_18(Math.round(top_cone_table_1_18_t));
      top_cone_table_2_17_t = top_cone_table_1_18_t * 3.1416;
      Settop_cone_table_2_17(top_cone_table_2_17_t.toFixed(6));
      top_cone_table_0_18_t = Math.ceil(
        top_cone_table_2_17_t / bricks_std_width
      );
      Settop_cone_table_0_18(top_cone_table_0_18_t);
    } else {
      top_cone_table_0_18_t = 0;
      Settop_cone_table_1_18(null);
      Settop_cone_table_2_17(null);
      Settop_cone_table_0_18(null);
    }

    let top_cone_table_1_19_t, top_cone_table_2_18_t, top_cone_table_0_19_t;

    if (I20 >= 18) {
      top_cone_table_1_19_t =
        top_cone_table_1_18_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_19(Math.round(top_cone_table_1_19_t));
      top_cone_table_2_18_t = top_cone_table_1_19_t * 3.1416;
      Settop_cone_table_2_18(top_cone_table_2_18_t.toFixed(6));
      top_cone_table_0_19_t = Math.ceil(
        top_cone_table_2_18_t / bricks_std_width
      );
      Settop_cone_table_0_19(top_cone_table_0_19_t);
    } else {
      top_cone_table_0_19_t = 0;
      Settop_cone_table_1_19(null);
      Settop_cone_table_2_18(null);
      Settop_cone_table_0_19(null);
    }

    let top_cone_table_1_20_t, top_cone_table_2_19_t, top_cone_table_0_20_t;

    if (I20 >= 19) {
      top_cone_table_1_20_t =
        top_cone_table_1_19_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_20(Math.round(top_cone_table_1_20_t));
      top_cone_table_2_19_t = top_cone_table_1_20_t * 3.1416;
      Settop_cone_table_2_19(top_cone_table_2_19_t.toFixed(6));
      top_cone_table_0_20_t = Math.ceil(
        top_cone_table_2_19_t / bricks_std_width
      );
      Settop_cone_table_0_20(top_cone_table_0_20_t);
    } else {
      top_cone_table_0_20_t = 0;
      Settop_cone_table_1_20(null);
      Settop_cone_table_2_19(null);
      Settop_cone_table_0_20(null);
    }

    let top_cone_table_1_21_t, top_cone_table_2_20_t, top_cone_table_0_21_t;

    if (I20 >= 20) {
      top_cone_table_1_21_t =
        top_cone_table_1_20_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_21(Math.round(top_cone_table_1_21_t));
      top_cone_table_2_20_t = top_cone_table_1_21_t * 3.1416;
      Settop_cone_table_2_20(top_cone_table_2_20_t.toFixed(6));
      top_cone_table_0_21_t = Math.ceil(
        top_cone_table_2_20_t / bricks_std_width
      );
      Settop_cone_table_0_21(top_cone_table_0_21_t);
    } else {
      top_cone_table_0_21_t = 0;
      Settop_cone_table_1_21(null);
      Settop_cone_table_2_20(null);
      Settop_cone_table_0_21(null);
    }

    let top_cone_table_1_22_t, top_cone_table_2_21_t, top_cone_table_0_22_t;

    if (I20 >= 21) {
      top_cone_table_1_22_t =
        top_cone_table_1_21_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_22(Math.round(top_cone_table_1_22_t));
      top_cone_table_2_21_t = top_cone_table_1_22_t * 3.1416;
      Settop_cone_table_2_21(top_cone_table_2_21_t.toFixed(6));
      top_cone_table_0_22_t = Math.ceil(
        top_cone_table_2_21_t / bricks_std_width
      );
      Settop_cone_table_0_22(top_cone_table_0_22_t);
    } else {
      top_cone_table_0_22_t = 0;
      Settop_cone_table_1_22(null);
      Settop_cone_table_2_21(null);
      Settop_cone_table_0_22(null);
    }

    let top_cone_table_1_23_t, top_cone_table_2_22_t, top_cone_table_0_23_t;

    if (I20 >= 22) {
      top_cone_table_1_23_t =
        top_cone_table_1_22_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_23(Math.round(top_cone_table_1_23_t));
      top_cone_table_2_22_t = top_cone_table_1_23_t * 3.1416;
      Settop_cone_table_2_22(top_cone_table_2_22_t.toFixed(6));
      top_cone_table_0_23_t = Math.ceil(
        top_cone_table_2_22_t / bricks_std_width
      );
      Settop_cone_table_0_23(top_cone_table_0_23_t);
    } else {
      top_cone_table_0_23_t = 0;
      Settop_cone_table_1_23(null);
      Settop_cone_table_2_22(null);
      Settop_cone_table_0_23(null);
    }

    let top_cone_table_1_24_t, top_cone_table_2_23_t, top_cone_table_0_24_t;

    if (I20 >= 23) {
      top_cone_table_1_24_t =
        top_cone_table_1_23_t - H21 * 2 * bricks_std_height;
      Settop_cone_table_1_24(Math.round(top_cone_table_1_24_t));
      top_cone_table_2_23_t = top_cone_table_1_24_t * 3.1416;
      Settop_cone_table_2_23(top_cone_table_2_23_t.toFixed(6));
      top_cone_table_0_24_t = Math.ceil(
        top_cone_table_2_23_t / bricks_std_width
      );
      Settop_cone_table_0_24(top_cone_table_0_24_t);
    } else {
      top_cone_table_0_24_t = 0;
      Settop_cone_table_1_24(null);
      Settop_cone_table_2_23(null);
      Settop_cone_table_0_24(null);
    }

    const top_cone_table_3_1t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_2_t *
        density_of_bricks) /
      1000000000;

    setTop_cone_table_3_1(top_cone_table_3_1t);

    const top_cone_table_3_2t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_3_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_2(top_cone_table_3_2t);

    const top_cone_table_3_3t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_4_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_3(top_cone_table_3_3t);

    const top_cone_table_3_4t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_5_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_4(top_cone_table_3_4t);

    const top_cone_table_3_5t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_6_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_5(top_cone_table_3_5t);

    const top_cone_table_3_6t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_7_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_6(top_cone_table_3_6t);

    const top_cone_table_3_7t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_8_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_7(top_cone_table_3_7t);

    const top_cone_table_3_8t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_9_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_8(top_cone_table_3_8t);

    const top_cone_table_3_9t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_10_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_9(top_cone_table_3_9t);

    const top_cone_table_3_10t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_11_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_10(top_cone_table_3_10t);

    const top_cone_table_3_11t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_12_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_11(top_cone_table_3_11t);

    const top_cone_table_3_12t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_13_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_12(top_cone_table_3_12t);

    const top_cone_table_3_13t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_14_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_13(top_cone_table_3_13t);

    const top_cone_table_3_14t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_15_t *
        density_of_bricks) /
      1000000000;
    if (top_cone_table_3_14 == null) setTop_cone_table_3_14(0.0);
    else setTop_cone_table_3_14(top_cone_table_3_14t);

    const top_cone_table_3_15t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_16_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_15(top_cone_table_3_15t);

    const top_cone_table_3_16t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_17_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_16(top_cone_table_3_16t);

    const top_cone_table_3_17t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_18_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_17(top_cone_table_3_17t);

    const top_cone_table_3_18t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_19_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_18(top_cone_table_3_18t);

    const top_cone_table_3_19t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_20_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_19(top_cone_table_3_19t);

    const top_cone_table_3_20t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_21_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_20(top_cone_table_3_20t);

    const top_cone_table_3_21t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_22_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_21(top_cone_table_3_21t);

    const top_cone_table_3_22t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_23_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_22(top_cone_table_3_22t);

    const top_cone_table_3_23t =
      (top_cone_lining *
        bricks_std_width *
        bricks_std_height *
        top_cone_table_0_24_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table_3_23(top_cone_table_3_23t);

    const top_cone_table_0_1_t =
      parseFloat(top_cone_table_0_2_t) +
      parseFloat(top_cone_table_0_3_t) +
      parseFloat(top_cone_table_0_4_t) +
      parseFloat(top_cone_table_0_5_t) +
      parseFloat(top_cone_table_0_6_t) +
      parseFloat(top_cone_table_0_7_t) +
      parseFloat(top_cone_table_0_8_t) +
      parseFloat(top_cone_table_0_9_t) +
      parseFloat(top_cone_table_0_10_t) +
      parseFloat(top_cone_table_0_11_t) +
      parseFloat(top_cone_table_0_12_t) +
      parseFloat(top_cone_table_0_13_t) +
      parseFloat(top_cone_table_0_14_t) +
      parseFloat(top_cone_table_0_15_t) +
      parseFloat(top_cone_table_0_16_t);
    Settop_cone_table_0_1(top_cone_table_0_1_t);

    const top_cone_table_3_24_t =
      parseFloat(top_cone_table_3_1t) +
      parseFloat(top_cone_table_3_2t) +
      parseFloat(top_cone_table_3_3t) +
      parseFloat(top_cone_table_3_4t) +
      parseFloat(top_cone_table_3_5t) +
      parseFloat(top_cone_table_3_6t) +
      parseFloat(top_cone_table_3_7t) +
      parseFloat(top_cone_table_3_8t) +
      parseFloat(top_cone_table_3_9t) +
      parseFloat(top_cone_table_3_10t) +
      parseFloat(top_cone_table_3_11t) +
      parseFloat(top_cone_table_3_12t) +
      parseFloat(top_cone_table_3_13t) +
      parseFloat(top_cone_table_3_14t) +
      parseFloat(top_cone_table_3_15t);
    setTop_cone_table_3_24(top_cone_table_3_24_t);

    const top_cone_table2_1_1_t =
      vessel_cylindrical_id -
      2 *
      (parseFloat(bottom_cone_side_lining_brick_length) +
        parseFloat(bottom_cone_safety_lining_brick_length));
    Settop_cone_table2_1_1(top_cone_table2_1_1_t);

    let top_cone_table2_1_2_t, top_cone_table2_2_1_t, top_cone_table2_0_2_t;
    top_cone_table2_1_2_t = top_cone_table2_1_1_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_2(Math.round(top_cone_table2_1_2_t));
    if (I49 >= 1) {
      top_cone_table2_2_1_t = top_cone_table2_1_2_t * 3.1416;
      Settop_cone_table2_2_1(top_cone_table2_2_1_t.toFixed(6));
      top_cone_table2_0_2_t = Math.ceil(
        top_cone_table2_2_1_t / bricks_std_width
      );
      Settop_cone_table2_0_2(top_cone_table2_0_2_t);
    } else {
      top_cone_table2_0_2_t = 0;
      // Settop_cone_table2_1_2(null);
      Settop_cone_table2_2_1(null);
      Settop_cone_table2_0_2(null);
    }

    let top_cone_table2_1_3_t, top_cone_table2_2_2_t, top_cone_table2_0_3_t;
    top_cone_table2_1_3_t = top_cone_table2_1_2_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_3(Math.round(top_cone_table2_1_3_t));
    if (I49 >= 2) {
      top_cone_table2_2_2_t = top_cone_table2_1_3_t * 3.1416;
      Settop_cone_table2_2_2(top_cone_table2_2_2_t.toFixed(6));
      top_cone_table2_0_3_t = Math.ceil(
        top_cone_table2_2_2_t / bricks_std_width
      );
      Settop_cone_table2_0_3(top_cone_table2_0_3_t);
    } else {
      top_cone_table2_0_3_t = 0;
      // Settop_cone_table2_1_3(null);
      Settop_cone_table2_2_2(null);
      Settop_cone_table2_0_3(null);
    }

    let top_cone_table2_1_4_t, top_cone_table2_2_3_t, top_cone_table2_0_4_t;
    top_cone_table2_1_4_t = top_cone_table2_1_3_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_4(Math.round(top_cone_table2_1_4_t));
    if (I49 >= 3) {
      top_cone_table2_2_3_t = top_cone_table2_1_4_t * 3.1416;
      Settop_cone_table2_2_3(top_cone_table2_2_3_t.toFixed(6));
      top_cone_table2_0_4_t = Math.ceil(
        top_cone_table2_2_3_t / bricks_std_width
      );
      Settop_cone_table2_0_4(top_cone_table2_0_4_t);
    } else {
      top_cone_table2_0_4_t = 0;
      // Settop_cone_table2_1_4(null);
      Settop_cone_table2_2_3(null);
      Settop_cone_table2_0_4(null);
    }

    let top_cone_table2_1_5_t, top_cone_table2_2_4_t, top_cone_table2_0_5_t;

    top_cone_table2_1_5_t = top_cone_table2_1_4_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_5(Math.round(top_cone_table2_1_5_t));
    if (I49 >= 4) {
      top_cone_table2_2_4_t = top_cone_table2_1_5_t * 3.1416;
      Settop_cone_table2_2_4(top_cone_table2_2_4_t.toFixed(6));
      top_cone_table2_0_5_t = Math.ceil(
        top_cone_table2_2_4_t / bricks_std_width
      );
      Settop_cone_table2_0_5(top_cone_table2_0_5_t);
    } else {
      top_cone_table2_0_5_t = 0;
      // Settop_cone_table2_1_5(null);
      Settop_cone_table2_2_4(null);
      Settop_cone_table2_0_5(null);
    }

    let top_cone_table2_1_6_t, top_cone_table2_2_5_t, top_cone_table2_0_6_t;

    top_cone_table2_1_6_t = top_cone_table2_1_5_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_6(Math.round(top_cone_table2_1_6_t));
    if (I49 >= 5) {
      top_cone_table2_2_5_t = top_cone_table2_1_6_t * 3.1416;
      Settop_cone_table2_2_5(top_cone_table2_2_5_t.toFixed(6));
      top_cone_table2_0_6_t = Math.ceil(
        top_cone_table2_2_5_t / bricks_std_width
      );
      Settop_cone_table2_0_6(top_cone_table2_0_6_t);
    } else {
      top_cone_table2_0_6_t = 0;
      // Settop_cone_table2_1_6(null);
      Settop_cone_table2_2_5(null);
      Settop_cone_table2_0_6(null);
    }

    let top_cone_table2_1_7_t, top_cone_table2_2_6_t, top_cone_table2_0_7_t;

    top_cone_table2_1_7_t = top_cone_table2_1_6_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_7(Math.round(top_cone_table2_1_7_t));
    if (I49 >= 6) {
      top_cone_table2_2_6_t = top_cone_table2_1_7_t * 3.1416;
      Settop_cone_table2_2_6(top_cone_table2_2_6_t.toFixed(6));
      top_cone_table2_0_7_t = Math.ceil(
        top_cone_table2_2_6_t / bricks_std_width
      );
      Settop_cone_table2_0_7(top_cone_table2_0_7_t);
    } else {
      top_cone_table2_0_7_t = 0;
      // Settop_cone_table2_1_7(null);
      Settop_cone_table2_2_6(null);
      Settop_cone_table2_0_7(null);
    }

    let top_cone_table2_1_8_t, top_cone_table2_2_7_t, top_cone_table2_0_8_t;

    top_cone_table2_1_8_t = top_cone_table2_1_7_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_8(Math.round(top_cone_table2_1_8_t));
    if (I49 >= 7) {
      top_cone_table2_2_7_t = top_cone_table2_1_8_t * 3.1416;
      Settop_cone_table2_2_7(top_cone_table2_2_7_t.toFixed(6));
      top_cone_table2_0_8_t = Math.ceil(
        top_cone_table2_2_7_t / bricks_std_width
      );
      Settop_cone_table2_0_8(top_cone_table2_0_8_t);
    } else {
      top_cone_table2_0_8_t = 0;
      // Settop_cone_table2_1_8(null);
      Settop_cone_table2_2_7(null);
      Settop_cone_table2_0_8(null);
    }

    let top_cone_table2_1_9_t, top_cone_table2_2_8_t, top_cone_table2_0_9_t;

    top_cone_table2_1_9_t = top_cone_table2_1_8_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_9(Math.round(top_cone_table2_1_9_t));
    if (I49 >= 8) {
      top_cone_table2_2_8_t = top_cone_table2_1_9_t * 3.1416;
      Settop_cone_table2_2_8(top_cone_table2_2_8_t.toFixed(6));
      top_cone_table2_0_9_t = Math.ceil(
        top_cone_table2_2_8_t / bricks_std_width
      );
      Settop_cone_table2_0_9(top_cone_table2_0_9_t);
    } else {
      top_cone_table2_0_9_t = 0;
      // Settop_cone_table2_1_9(null);
      Settop_cone_table2_2_8(null);
      Settop_cone_table2_0_9(null);
    }

    let top_cone_table2_1_10_t, top_cone_table2_2_9_t, top_cone_table2_0_10_t;

    top_cone_table2_1_10_t =
      top_cone_table2_1_9_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_10(Math.round(top_cone_table2_1_10_t));
    if (I49 >= 9) {
      top_cone_table2_2_9_t = top_cone_table2_1_10_t * 3.1416;
      Settop_cone_table2_2_9(top_cone_table2_2_9_t.toFixed(6));
      top_cone_table2_0_10_t = Math.ceil(
        top_cone_table2_2_9_t / bricks_std_width
      );
      Settop_cone_table2_0_10(top_cone_table2_0_10_t);
    } else {
      top_cone_table2_0_10_t = 0;
      // Settop_cone_table2_1_10(null);
      Settop_cone_table2_2_9(null);
      Settop_cone_table2_0_10(null);
    }

    let top_cone_table2_1_11_t, top_cone_table2_2_10_t, top_cone_table2_0_11_t;

    top_cone_table2_1_11_t =
      top_cone_table2_1_10_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_11(Math.round(top_cone_table2_1_11_t));
    if (I49 >= 10) {
      top_cone_table2_2_10_t = top_cone_table2_1_11_t * 3.1416;
      Settop_cone_table2_2_10(top_cone_table2_2_10_t.toFixed(6));
      top_cone_table2_0_11_t = Math.ceil(
        top_cone_table2_2_10_t / bricks_std_width
      );
      Settop_cone_table2_0_11(top_cone_table2_0_11_t);
    } else {
      top_cone_table2_0_11_t = 0;
      // Settop_cone_table2_1_11(null);
      Settop_cone_table2_2_10(null);
      Settop_cone_table2_0_11(null);
    }

    let top_cone_table2_1_12_t, top_cone_table2_2_11_t, top_cone_table2_0_12_t;

    top_cone_table2_1_12_t =
      top_cone_table2_1_11_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_12(Math.round(top_cone_table2_1_12_t));
    if (I49 >= 11) {
      top_cone_table2_2_11_t = top_cone_table2_1_12_t * 3.1416;
      Settop_cone_table2_2_11(top_cone_table2_2_11_t.toFixed(6));
      top_cone_table2_0_12_t = Math.ceil(
        top_cone_table2_2_11_t / bricks_std_width
      );
      Settop_cone_table2_0_12(top_cone_table2_0_12_t);
    } else {
      top_cone_table2_0_12_t = 0;
      // Settop_cone_table2_1_12(null);
      Settop_cone_table2_2_11(null);
      Settop_cone_table2_0_12(null);
    }

    let top_cone_table2_1_13_t, top_cone_table2_2_12_t, top_cone_table2_0_13_t;

    top_cone_table2_1_13_t =
      top_cone_table2_1_12_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_13(Math.round(top_cone_table2_1_13_t));
    if (I49 >= 12) {
      top_cone_table2_2_12_t = top_cone_table2_1_13_t * 3.1416;
      Settop_cone_table2_2_12(top_cone_table2_2_12_t.toFixed(6));
      top_cone_table2_0_13_t = Math.ceil(
        top_cone_table2_2_12_t / bricks_std_width
      );
      Settop_cone_table2_0_13(top_cone_table2_0_13_t);
    } else {
      top_cone_table2_0_13_t = 0;
      // Settop_cone_table2_1_13(null);
      Settop_cone_table2_2_12(null);
      Settop_cone_table2_0_13(null);
    }

    let top_cone_table2_1_14_t, top_cone_table2_2_13_t, top_cone_table2_0_14_t;

    top_cone_table2_1_14_t =
      top_cone_table2_1_13_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_14(Math.round(top_cone_table2_1_14_t));
    if (I49 >= 13) {
      top_cone_table2_2_13_t = top_cone_table2_1_14_t * 3.1416;
      Settop_cone_table2_2_13(top_cone_table2_2_13_t.toFixed(6));
      top_cone_table2_0_14_t = Math.ceil(
        top_cone_table2_2_13_t / bricks_std_width
      );
      Settop_cone_table2_0_14(top_cone_table2_0_14_t);
    } else {
      top_cone_table2_0_14_t = 0;
      // Settop_cone_table2_1_14(null);
      Settop_cone_table2_2_13(null);
      Settop_cone_table2_0_14(null);
    }

    let top_cone_table2_1_15_t, top_cone_table2_2_14_t, top_cone_table2_0_15_t;

    top_cone_table2_1_15_t =
      top_cone_table2_1_14_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_15(Math.round(top_cone_table2_1_15_t));
    if (I49 >= 14) {
      top_cone_table2_2_14_t = top_cone_table2_1_15_t * 3.1416;
      Settop_cone_table2_2_14(top_cone_table2_2_14_t.toFixed(6));
      top_cone_table2_0_15_t = Math.ceil(
        top_cone_table2_2_14_t / bricks_std_width
      );
      Settop_cone_table2_0_15(top_cone_table2_0_15_t);
    } else {
      top_cone_table2_0_15_t = 0;
      // Settop_cone_table2_1_15(null);
      Settop_cone_table2_2_14(null);
      Settop_cone_table2_0_15(null);
    }

    let top_cone_table2_1_16_t, top_cone_table2_2_15_t, top_cone_table2_0_16_t;

    top_cone_table2_1_16_t =
      top_cone_table2_1_15_t - H26 * 2 * bricks_std_height;
    Settop_cone_table2_1_16(Math.round(top_cone_table2_1_16_t));
    if (I49 >= 15) {
      top_cone_table2_2_15_t = top_cone_table2_1_16_t * 3.1416;
      Settop_cone_table2_2_15(top_cone_table2_2_15_t.toFixed(6));
      top_cone_table2_0_16_t = Math.ceil(
        top_cone_table2_2_15_t / bricks_std_width
      );
      Settop_cone_table2_0_16(top_cone_table2_0_16_t);
    } else {
      top_cone_table2_0_16_t = 0;
      // Settop_cone_table2_1_16(null);
      Settop_cone_table2_2_15(null);
      Settop_cone_table2_0_16(null);
    }

    const top_cone_table2_3_1t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_2_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_1(top_cone_table2_3_1t);

    const top_cone_table2_3_2t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_3_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_2(top_cone_table2_3_2t);

    const top_cone_table2_3_3t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_4_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_3(top_cone_table2_3_3t);

    const top_cone_table2_3_4t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_5_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_4(top_cone_table2_3_4t);

    const top_cone_table2_3_5t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_6_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_5(top_cone_table2_3_5t);

    const top_cone_table2_3_6t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_7_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_6(top_cone_table2_3_6t);

    const top_cone_table2_3_7t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_8_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_7(top_cone_table2_3_7t);

    const top_cone_table2_3_8t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_9_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_8(top_cone_table2_3_8t);

    const top_cone_table2_3_9t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_10_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_9(top_cone_table2_3_9t);

    const top_cone_table2_3_10t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_11_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_10(top_cone_table2_3_10t);

    const top_cone_table2_3_11t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_12_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_11(top_cone_table2_3_11t);

    const top_cone_table2_3_12t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_13_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_12(top_cone_table2_3_12t);

    const top_cone_table2_3_13t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_14_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_13(top_cone_table2_3_13t);

    const top_cone_table2_3_14t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_15_t *
        density_of_bricks) /
      1000000000;
    if (top_cone_table2_3_14 == null) {
      setTop_cone_table2_3_14(0.0);
    } else {
      setTop_cone_table2_3_14(top_cone_table2_3_14t);
    }

    const top_cone_table2_3_15t =
      (bottom_cone_side_lining_brick_length *
        bricks_std_width *
        bricks_std_height *
        top_cone_table2_0_16_t *
        density_of_bricks) /
      1000000000;
    setTop_cone_table2_3_15(top_cone_table2_3_15t);

    const top_cone_table2_0_1_t =
      parseFloat(top_cone_table2_0_2_t) +
      parseFloat(top_cone_table2_0_3_t) +
      parseFloat(top_cone_table2_0_4_t) +
      parseFloat(top_cone_table2_0_5_t) +
      parseFloat(top_cone_table2_0_6_t) +
      parseFloat(top_cone_table2_0_7_t) +
      parseFloat(top_cone_table2_0_8_t) +
      parseFloat(top_cone_table2_0_9_t) +
      parseFloat(top_cone_table2_0_10_t) +
      parseFloat(top_cone_table2_0_11_t) +
      parseFloat(top_cone_table2_0_12_t) +
      parseFloat(top_cone_table2_0_13_t) +
      parseFloat(top_cone_table2_0_14_t) +
      parseFloat(top_cone_table2_0_15_t) +
      parseFloat(top_cone_table2_0_16_t);
    Settop_cone_table2_0_1(top_cone_table2_0_1_t);

    const top_cone_table2_3_24_t =
      parseFloat(top_cone_table2_3_1t) +
      parseFloat(top_cone_table2_3_2t) +
      parseFloat(top_cone_table2_3_3t) +
      parseFloat(top_cone_table2_3_4t) +
      parseFloat(top_cone_table2_3_5t) +
      parseFloat(top_cone_table2_3_6t) +
      parseFloat(top_cone_table2_3_7t) +
      parseFloat(top_cone_table2_3_8t) +
      parseFloat(top_cone_table2_3_9t) +
      parseFloat(top_cone_table2_3_10t) +
      parseFloat(top_cone_table2_3_11t) +
      parseFloat(top_cone_table2_3_12t) +
      parseFloat(top_cone_table2_3_13t) +
      parseFloat(top_cone_table2_3_14t) +
      parseFloat(top_cone_table2_3_15t);
    setTop_cone_table2_3_24(top_cone_table2_3_24_t.toFixed(3));

    const top_table3_1 = 3.1416 / 4 * E27 * E27
    setTop_cone_table3_1(Math.round(top_table3_1))
    const top_table3_2 = bricks_std_width * bricks_std_height
    setTop_cone_table3_2((top_table3_2).toFixed(3))
    const top_table3_0 = top_table3_1 / top_table3_2
    setTop_cone_table3_0(Math.round(top_table3_0))
    const top_table3_3 = bottom_cone_side_lining_brick_length * bricks_std_width * bricks_std_height * top_table3_0 * density_of_bricks / 1000000000
    setTop_cone_table3_3((top_table3_3).toFixed(3))

    const top_table4_1_1 = 3.1416 * (parseFloat(vessel_cylindrical_id) + parseFloat(D20)) * top_cone_height / 2
    setTop_cone_table4_1_1((top_table4_1_1).toFixed(3))
    const top_table4_1_2 = safety_bricks_width * safety_bricks_length
    setTop_cone_table4_1_2(top_table4_1_2)
    const top_table4_1_0 = top_table4_1_1 / top_table4_1_2
    setTop_cone_table4_1_0(Math.round(top_table4_1_0))
    const top_table4_1_3 = safety_bricks_width * safety_bricks_length * safety_bricks_height * top_table4_1_0 * density_of_bricks / 1000000000
    setTop_cone_table4_1_3((top_table4_1_3).toFixed(3))

    const D27 = vessel_cylindrical_id - (Math.tan(3.1416 * bottom_cone_angle / 180) * 2 * bottom_cone_height)
    const top_table4_2_1 = 3.1416 * (parseFloat(vessel_cylindrical_id) + parseFloat(D27)) * (parseFloat(bottom_cone_height) - (parseFloat(bottom_cone_bottom_lining_brick_length) + parseFloat(bottom_cone_safety_lining_brick_length))) / 2
    setTop_cone_table4_2_1((top_table4_2_1).toFixed(3))
    const top_table4_2_2 = safety_bricks_width * safety_bricks_length
    setTop_cone_table4_2_2(top_table4_2_2)
    const top_table4_2_0 = top_table4_2_1 / top_table4_2_2
    setTop_cone_table4_2_0(Math.round(top_table4_2_0))
    const top_table4_2_3 = safety_bricks_width * safety_bricks_length * safety_bricks_height * top_table4_2_0 * density_of_bricks / 1000000000
    setTop_cone_table4_2_3((top_table4_2_3).toFixed(3))

    const top_table4_3_1 = 3.1416 / 4 * (parseFloat(E27) + parseFloat(bottom_cone_bottom_lining_brick_length)) * (parseFloat(E27) + parseFloat(bottom_cone_bottom_lining_brick_length))
    setTop_cone_table4_3_1((top_table4_3_1).toFixed(3))
    const top_table4_3_2 = safety_bricks_width * safety_bricks_length
    setTop_cone_table4_3_2(top_table4_3_2)
    const top_table4_3_0 = top_table4_3_1 / top_table4_3_2
    setTop_cone_table4_3_0(Math.round(top_table4_3_0))
    const top_table4_3_3 = safety_bricks_width * safety_bricks_length * safety_bricks_height * top_table4_3_0 * density_of_bricks / 1000000000
    setTop_cone_table4_3_3((top_table4_3_3).toFixed(3))

    const top_table4_sum = parseFloat(top_table4_1_3) + parseFloat(top_table4_2_3) + parseFloat(top_table4_3_3)
    setTop_cone_table4_sum((top_table4_sum).toFixed(3))

    const weight = parseFloat(brick_weight) + parseFloat(safety_table_sum) + parseFloat(top_cone_table_3_24_t) + parseFloat(top_cone_table2_3_24_t) + parseFloat(top_table3_3) + parseFloat(top_table4_sum)
    Settotal_weight((weight).toFixed(3))

    // Fabrication
    const sizel1 = (parseFloat(vessel_cylindrical_id) + parseFloat(vessel_cylindrical_shell)) * 3.1428
    SetsizeL1(Math.round(sizel1))
    const sizew1 = vessel_cylindrical_height
    SetsizeW1(sizew1)
    const qty1t = 1;
    Setqty1(qty1t)
    const weight1 = sizel1 * sizew1 * vessel_cylindrical_shell * qty1t * 7.864 / 1000000
    Setweight1(Math.round(weight1))


    const F950 = parseFloat(vessel_cylindrical_id) + parseFloat(vessel_top_cone)
    const J953 = Math.tan(3.1416 / 180 * top_cone_angle)
    const J954 = Math.cos(3.1416 / 180 * top_cone_angle)
    const E955 = ((F950 / 2) / J953) / J954
    const H958 = ((F950 / 2) * 3.1428 * 360 / (E955 * 3.1428)) / 4
    const J958 = Math.sin(3.1416 / 180 * H958)
    const sizel2 = J958 * E955 * 2
    SetsizeL2(Math.round(sizel2))

    const E956 = (((parseFloat(D20) + parseFloat(vessel_top_cone)) / 2) / J953) / J954
    const G958 = E956 * J958
    const sizew2 = (parseFloat(E955) - parseFloat(E956)) + (parseFloat(E956) - parseFloat(G958))
    SetsizeW2(Math.round(sizew2))
    const qty2t = 2
    Setqty2(qty2t)
    const weight2 = sizel2 * sizew2 * vessel_top_cone * qty2t * 7.864 / 1000000
    Setweight2(Math.round(weight2))

    const H985 = parseFloat(vessel_cylindrical_id) + parseFloat(vessel_bottom_cone)
    const J988 = Math.sin(3.1416 / 180 * (90 - parseFloat(bottom_cone_angle)))
    const J990 = Math.tan(3.1416 / 180 * (90 - parseFloat(bottom_cone_angle)))
    const D990 = (((parseFloat(vessel_cylindrical_id) + parseFloat(vessel_bottom_cone)) / 2) * J990) / J988
    const G991 = (H985 * 3.1428) * 360 / (D990 * 2 * 3.1428)
    const J991 = Math.sin(3.1416 / 180 * (G991 / 4))
    let sizel3;
    if (top_cone_angle == 0) {
      sizel3 = 0
    }
    else {
      sizel3 = 2 * J991 * D990
    }
    SetsizeL3(Math.round(sizel3))

    const J992 = Math.cos(3.1416 / 180 * (G991 / 4))
    const D991 = D990 - (bottom_cone_height / J988)
    const F997 = J992 * D991
    const D989 = D990 - D991
    let sizew3;
    if (top_cone_angle == 0) {
      sizew3 = 0
    }
    else {
      sizew3 = (D991 - F997) + D989
    }
    SetsizeW3(Math.round(sizew3))

    let qty3t;
    if (top_cone_angle == 0) {
      qty3t = 0
    }
    else {
      qty3t = 2
    }
    Setqty3(qty3t)

    const weight3 = sizel3 * sizew3 * vessel_bottom_cone * qty3t * 7.864 / 1000000
    Setweight3(Math.round(weight3))

    const E976 = parseFloat(vessel_cylindrical_id / 2) + parseFloat(vessel_cylindrical_shell)
    const sizel4 = parseFloat(width_of_vessel_flange) + parseFloat(E976)
    SetsizeL4(sizel4)

    const L980 = (sizel4 * sizel4) - ((E976 / 2) * (E976 / 2))
    const K979 = Math.sqrt(L980)
    const K980 = sizel4 - K979
    const K978 = E976 - (0.866 * E976)
    const K981 = K978 - K980
    const K982 = (sizel4 - E976) + K981
    const sizew4 = parseFloat(K982 * 6) + parseFloat(K980)
    SetsizeW4(Math.round(sizew4))

    const qty4t = 1
    Setqty4(qty4t)
    const weight4 = sizel4 * sizew4 * cylindrical_shell_flange * qty4t * 7.864 / 1000000
    Setweight4(Math.round(weight4))


    const E973 = parseFloat(vessel_cylindrical_id / 2) + parseFloat(vessel_top_cone)
    const sizel5 = parseFloat(E973) + parseFloat(width_of_cone_flange)
    SetsizeL5(Math.round(sizel5))

    const K974 = Math.sqrt((sizel5 * sizel5) - ((E973 / 2) * (E973 / 2)))
    const K975 = sizel5 - K974
    const K973 = E973 - (0.866 * E973)
    const K976 = K973 - K975
    const L976 = sizel5 - E973 + K976
    const sizew5 = (L976 * 6) + K975
    SetsizeW5(Math.round(sizew5))

    const qty5t = 1
    Setqty5(qty5t)
    const weight5 = sizel5 * sizew5 * top_cone_flange * qty5t * 7.864 / 1000000
    Setweight5(Math.round(weight5))

    const sizel6 = 0
    const sizew6 = 0
    const qty6t = 1
    Setqty6(qty6t)
    const weight6 = sizel6 * sizew6 * top_cone_protection_flange * qty6t * 7.864 / 1000000
    Setweight6(Math.round(weight6))


    let F970
    const F968 = disc_end_height * 0.1
    const F969 = disc_end_height * 0.25
    const D966 = parseFloat(D27) + parseFloat(disc_end * 2)
    if (disc_end > 25) {
      F970 = parseFloat(D966) + parseFloat(D966 / 42) + parseFloat(2 * F968) + parseFloat(2 / 3 * (F969)) + parseFloat(disc_end)
    }
    else {
      F970 = parseFloat(D966) + parseFloat(D966 / 42) + parseFloat(2 * F968) + parseFloat(2 / 3 * (F969))
    }

    const I966 = parseFloat(disc_end_height) + (disc_end / 2)
    const H966 = parseFloat(D27) + parseFloat(disc_end)
    const I968 = parseFloat((H966 * H966) / (8 * I966)) + parseFloat(I966 / 2)
    const K966 = (I968 - I966) / I968
    const J966 = 2 * (57.2958 * Math.acos(K966))
    const J969 = 0.01745 * I968 * J966
    let sizel7;
    if (top_cone_angle == 0) {
      sizel7 = F970
    }
    else {
      sizel7 = J969
    }
    SetsizeL7(Math.round(sizel7))
    const sizew7 = 0
    SetsizeW7(sizew7)

    const qty7t = 1
    Setqty7(qty7t)
    const weight7 = 3.1416 / 4 * sizel7 * sizel7 * disc_end * 7.864 / 1000000
    Setweight7(Math.round(weight7))
    const sizel8 = 375
    SetsizeL8(375)

    const sizew8 = vessel_flanges_distance - cylindrical_shell_flange - cylinder_to_trunion_flange
    SetsizeW8(sizew8)

    const qty8t = 12
    Setqty8(qty8t)
    const weight8 = sizel8 * sizew8 * stiffner_cyl_flange * qty8t * 7.864 / 1000000
    Setweight8(Math.round(weight8))

    const sizel9 = 250
    SetsizeL9(sizel9)
    const sizew9 = 250
    SetsizeW9(sizew9)
    const qty9t = 24
    Setqty9(qty9t)
    const weight9 = sizel9 * sizew9 * stiffnertop_cone_flange * qty9t * 7.864 / 1000000
    Setweight9(Math.round(weight9))

    const sizel10 = sizel8 * 2
    const sizew10 = sizew8
    SetsizeL10(sizel10)
    SetsizeW10(sizew10)
    const qty10t = 6
    Setqty10(qty10t)
    const weight10 = sizel10 * sizew10 * lifting_hook * qty10t * 7.864 / 1000000
    Setweight10(Math.round(weight10))

    const sizel11 = 500
    const sizew11 = 300
    SetsizeL11(sizel11)
    SetsizeW11(sizew11)
    const qty11t = 12
    Setqty11(qty11t)
    const weight11 = sizel11 * sizew11 * legs * qty11t * 7.864 / 1000000
    Setweight11(Math.round(weight11))

    const sizel12 = (D20 + 400) - 300
    SetsizeL12(Math.round(sizel12))
    const sizew12 = (D20 + 400) / 2
    SetsizeW12(Math.round(sizew12))
    const qty12t = 1
    Setqty12(qty12t)
    const weight12 = sizel12 * sizew12 * cone_top_rim * qty12t * 7.864 / 1000000
    Setweight12(Math.round(weight12))

    const sizel13 = 3.1416 / 4 * pin_lifting_hook * pin_lifting_hook / 1000000
    SetsizeL13(sizel13)
    const sizew13 = 500
    SetsizeW13(sizew13)
    const qty13t = 3
    Setqty13(qty13t)
    const weight13 = sizel13 * sizew13 * qty13t * 7.864 / 1
    Setweight13(Math.round(weight13))

    const E979 = parseFloat(vessel_cylindrical_id / 2) + parseFloat(vessel_cylindrical_shell)
    const sizel14 = parseFloat(width_of_trunion_flange) + parseFloat(E979)
    SetsizeL14(Math.round(sizel14))

    const K984 = Math.sqrt((sizel14 * sizel14) - ((E979 / 2) * (E979 / 2)))
    const K985 = sizel14 - K984
    const K983 = E979 - (0.866 * E979)
    const L986 = (sizel14 - E979) + (K983 - K985)
    const sizew14 = (L986 * 6) + K985
    SetsizeW14(Math.round(sizew14))
    const qty14t = 1
    Setqty14(qty14t)
    const weight14 = sizel14 * sizew14 * qty14t * cylinder_to_trunion_flange * 7.864 / 1000000
    Setweight14(Math.round(weight14))

    const weight_sum = parseFloat(weight1) + parseFloat(weight2) + parseFloat(weight3) + parseFloat(weight4) + parseFloat(weight5) + parseFloat(weight6) + parseFloat(weight7) + parseFloat(weight8) + parseFloat(weight9) + parseFloat(weight10) + parseFloat(weight11) + parseFloat(weight12) + parseFloat(weight13) + parseFloat(weight14)
    Setweightsum(Math.round(weight_sum))

    let d1
    if (top_cone_angle == 0) {
      d1 = 0
    }
    else {
      d1 = vessel_top_cone
    }
    Setdia1(d1)


    let d2
    if (top_cone_angle == 0) {
      d2 = 0
    }
    else {
      d2 = vessel_cylindrical_shell
    }
    Setdia2(d2)

    let d3
    if (top_cone_angle == 0) {
      d3 = 0
    }
    else {
      d3 = vessel_bottom_cone
    }
    Setdia3(d3)

    let d4
    if (top_cone_angle == 0) {
      d4 = 0
    }
    else {
      d4 = disc_end
    }
    Setdia4(d4)

    let d5
    let d6
    let d7, d8, d9, d10, d11, d12, d13
    if (top_cone_angle == 0) {
      d5 = 0
      d6 = 0
      d7 = 0
      d8 = 0
      d9 = 0
      d10 = 0
      d11 = 0
      d12 = 0
      d13 = 0
    }
    else {
      d5 = vessel_cylindrical_id
      d6 = D20
      d7 = top_cone_height
      d8 = top_cone_flange
      d9 = cylindrical_shell_flange
      d10 = vessel_cylindrical_height
      d11 = parseFloat(bottom_cone_height) + parseFloat(disc_end_height)
      d12 = D27
      d13 = parseFloat(d7) + parseFloat(d10) + parseFloat(d11)
    }
    Setdia5(Math.round(d5))
    Setdia6(Math.round(d6))
    Setdia7(Math.round(d7))
    Setdia8(Math.round(d8))
    Setdia9(Math.round(d9))
    Setdia10(Math.round(d10))
    Setdia11(Math.round(d11))
    Setdia12(Math.round(d12))
    Setdia13(Math.round(d13))
    
    Setdia14(Math.round((parseFloat(vessel_cylindrical_id) + parseFloat(vessel_cylindrical_shell))*3.1428))
    Setdia15(vessel_cylindrical_height)
    Setdia16(Math.round(sizel2))
    Setdia17(Math.round(E955))
    Setdia18(Math.round(E956))
    Setdia19(Math.round(sizew2))
    Setdia20(Math.round(2*H958))
    Setdia21(Math.round(vessel_top_cone))
    Setdia22(Math.round(sizel7))
    Setdia23(Math.round(disc_end))
    Setdia24(Math.round(sizel3))
    Setdia25(Math.round(D990))
    Setdia26(Math.round(D991))
    Setdia27(Math.round(sizew3))
    Setdia28(Math.round((G991/4)*2))
    Setdia29(Math.round(vessel_bottom_cone))
    Setdia30(Math.round(sizel5))
    Setdia31(Math.round(sizel5))
    Setdia32(Math.round(sizew5))
    Setdia33(Math.round(E973))
    Setdia34(Math.round(top_cone_flange))
    Setdia35(Math.round(sizel4))
    Setdia36(Math.round(sizel4))
    Setdia37(Math.round(sizew4))
    Setdia38(Math.round(E976))
    Setdia39(Math.round(cylindrical_shell_flange))
    Setdisc_end_dia(Math.round(D27))
    const W21 = ((vessel_cylindrical_id)-2*(parseFloat(bottom_cone_side_lining_brick_length)+parseFloat(bottom_cone_safety_lining_brick_length)))/2000
    const W22 = ((D27)-2*(parseFloat(bottom_cone_side_lining_brick_length)+parseFloat(bottom_cone_safety_lining_brick_length)))/2000
    const W19 = (W21*W21)+(W21*W22)+(W22*W22)
    const AA19 = ((3.1416/3*(bottom_cone_height/1000))*W19)/0.49
    const W14 = ((vessel_cylindrical_id)-2*(parseFloat(top_cone_lining)+parseFloat(top_safety)))/2000
    const U12 = vessel_cylindrical_id - (Math.tan(3.1416*top_cone_angle/180)*2*top_cone_height)
    const W15 = ((U12)-2*(parseFloat(top_cone_lining)+parseFloat(top_safety)))/2000
    const W11 = 3.1416/3*(top_cone_height/1000)
    const W12 = (W14*W14)+(W14*W15)+(W15*W15)
    const AA12 = (W11*W12)/0.49

    const X7 =
      parseFloat(vessel_cylindrical_id) -
      parseFloat(parseFloat(size2_t) + parseFloat(safety_lining_length_t)) -
      parseFloat(parseFloat(size2_s) + parseFloat(safety_lining_length_s));

    const X8 =
      parseFloat(vessel_cylindrical_id) -
      parseFloat(parseFloat(size3_t) + parseFloat(safety_lining_length_t)) -
      parseFloat(parseFloat(size3_s) + parseFloat(safety_lining_length_s));

    const X9 =
      parseFloat(vessel_cylindrical_id) -
      parseFloat(parseFloat(size4_t) + parseFloat(safety_lining_length_t)) -
      parseFloat(parseFloat(size4_s) + parseFloat(safety_lining_length_s));

    const Y6 = 0.7854*X6*X6*F14/1000000000
    const Y7 = 0.7854*X7*X7*F15/1000000000
    const Y8 = 0.7854*X8*X8*F16/1000000000
    const Y9 = 0.7854*X9*X9*F17/1000000000
    const Z6 = parseFloat(Y6) + parseFloat(Y7) + parseFloat(Y8) + parseFloat(Y9)
    const AA6 = Z6/0.49
    const capacityaod = parseFloat(AA19) + parseFloat(AA12) + parseFloat(AA6)
    Setcapacity_aod((capacityaod).toFixed(2))

    const W18 = 3.1416/3*(bottom_cone_height/1000)
    const Z19 = W18*W19
    const Z12 = W11*W12
    const volumnaod = parseFloat(Z19)+parseFloat(Z12)+parseFloat(Z6)
    Setvolumn_aod((volumnaod).toFixed(2))

    const U33 = X6/2000
    const X33 = X9/2000
    const X12 = ((U12)-2*(parseFloat(top_cone_lining)+parseFloat(top_safety)))/2000

    const X34 = X33 - X12
    const X35 = 1-(X34/X33)
    const U35 = 1-((U33-X12)/U33)
    const Y35 = (U35+X35)/2
    const Y33 = (U33+X33)/2
    const Y36 = (2*Math.acos(Y35))/2*Y33*Y33

    const U34 = U33-X12
    const U45 = U33-U34
    const X45 = X33-X34
    const Y45 = (parseFloat(U45)+parseFloat(X45))/2
    const U37 = Math.sqrt((2*U33)-U34)
    const X37 = Math.sqrt((2*X33)-X34)
    const Y37 = (parseFloat(U37)+parseFloat(X37))/2
    const V31 = Y36-(Y45*Y37)
    const V30 = parseFloat(F14/1000) + parseFloat(F15/1000) + parseFloat(F16/1000) + parseFloat(F17/1000)
    const AA28 = 6.85*(V31*V30)
    
    const V49 = ((vessel_cylindrical_id)-2*(parseFloat(top_cone_lining)+parseFloat(top_safety)))/1000
    const V50 =((U12)-2*(parseFloat(top_cone_lining)+parseFloat(top_safety)))/1000
    const V51 = top_cone_height/1000
    const V52 = (V49-V50)/2
    const W49= 1/2*(V49+V50)*V51*V52
    const AA29 = 6.85*(Z12-W49)


    const U19 = vessel_cylindrical_id-(Math.tan(3.1416*bottom_cone_angle/180)*2*bottom_cone_height)
    const V55 = ((vessel_cylindrical_id)-2*(parseFloat(bottom_cone_side_lining_brick_length)+parseFloat(bottom_cone_safety_lining_brick_length)))/1000
    const V56 = ((U19)-2*(parseFloat(bottom_cone_side_lining_brick_length)+parseFloat(bottom_cone_safety_lining_brick_length)))/1000
    const V57 = bottom_cone_height/1000
    const W55 = 1/2*(parseFloat(V55)+parseFloat(V56))*V57*V52
    const AA30 = 6.85*(Z19-W55)
    const totalcapacity = parseFloat(AA28) + parseFloat(AA29) + parseFloat(AA30)
    Settotal_capacity((totalcapacity).toFixed(2))

    const Z28 = V31*V30
    const Z29 = Z12-W49
    const Z30 = Z19-W55
    const totalvolumn = parseFloat(Z28) + parseFloat(Z29) + parseFloat(Z30)
    Settotal_volumn((totalvolumn).toFixed(2))
    
    const tempw = (weight).toFixed(3)
    Setmetal((capacityaod).toFixed(2))
    Setlining_bricks(tempw)
    Setfabricated_vessel((weight_sum/1000).toFixed(2))
    Setslag((capacityaod*0.1).toFixed(2))
    Settotal((parseFloat(capacityaod)+parseFloat(tempw)+parseFloat(weight_sum/1000)+parseFloat(capacityaod*0.1)).toFixed(2))



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

  const [showComponent, setShowComponent] = useState(false); 
 
  useEffect(() => { 
    const timeout = setTimeout(() => { 
      setShowComponent(true); 
    }, 2000); 
 
    return () => clearTimeout(timeout); 
  }, []); 

  

  
  useEffect(() => {
    getUserData();
  }, []);

  const handleDownloadPDF = async () => {
      if (!download) {
        toast.error("Calculate First");
        return;
      }
      setload(true)

    // Capture the first div to an image
    const div1ImageData = await html2canvas(div1Ref.current);

    // Capture the second div to an image
    const div2ImageData = await html2canvas(div2Ref.current);
    const div3ImageData = await html2canvas(div3Ref.current);
    const div4ImageData = await html2canvas(div4Ref.current);
    const div5ImageData = await html2canvas(div5Ref.current);
    const div6ImageData = await html2canvas(div6Ref.current);
    const div7ImageData = await html2canvas(div7Ref.current);
    const div8ImageData = await html2canvas(div8Ref.current);
    const div9ImageData = await html2canvas(div9Ref.current);

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
      5,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-20
    );

    // Add a new page to the PDF document
    pdf.addPage();

    // Add the second image to the PDF document
    pdf.addImage(
      div2ImageData,
      "PNG",
      k3,
      5,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-20
    );
    pdf.addPage();

    // Add the second image to the PDF document
    pdf.addImage(
      div3ImageData,
      "PNG",
      k3,
      10,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-130
    );
    pdf.addPage();

    // Add the second image to the PDF document
    pdf.addImage(
      div4ImageData,
      "PNG",
      k3,
      10,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-20
    );
    pdf.addPage();

    // Add the second image to the PDF document
    pdf.addImage(
      div5ImageData,
      "PNG",
      k3,
      10,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-20
    );
    pdf.addPage();

    // Add the second image to the PDF document
    pdf.addImage(
      div6ImageData,
      "PNG",
      k3,
      10,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-50
    );
    pdf.addPage();

    // Add the second image to the PDF document
    pdf.addImage(
      div7ImageData,
      "PNG",
      k3,
      10,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-50
    );
    pdf.addPage();

    // Add the second image to the PDF document
    pdf.addImage(
      div8ImageData,
      "PNG",
      k3,
      10,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-20
    );
    pdf.addPage();

    // Add the second image to the PDF document
    pdf.addImage(
      div9ImageData,
      "PNG",
      k3,
      10,
      pdf.internal.pageSize.getWidth() - k4,
      pdf.internal.pageSize.getHeight()-130
    );
    
    
    

    

    // Save the PDF document
    pdf.save("aod.pdf");
    setload(false)
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

  const [windowWidth, setWindowWidth] = useState(0);

  // Function to update window width
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add an event listener to update the window width when the component mounts
  useLayoutEffect(() => {
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);


  // Calculate the image width based on screen size
  const imageWidth = windowWidth < 900 ? 300 : 550;
  const imageWidth2 = windowWidth < 900 ? 100 : 400;
  const imageWidth3 = windowWidth < 900 ? 100 : 800;
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
            className={userData.aod_ticket == 0 ? "dis" : "btn_cal"}
            onClick={result}
          >
            Calculate
          </button>
        </Box>
      </Modal>


      {showComponent&& 
      <Modal
        open={userData.aod_ticket==0?true:false}
        onClose={handleClosewar}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="cal_width">
          {userData.aod_ticket!=0?<Typography id="modal-modal-title" variant="h6" component="h2">
            Loading !!!
          </Typography>:<Typography id="modal-modal-title" variant="h6" component="h2">
            Warning !!!
          </Typography>}
          
          
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, marginBottom: "17px" }}
          >{userData.aod_ticket!=0?<p></p>:<div>
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
        <h6 className={load?"watermark":"watermark dis"}>The Design Engg</h6>
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
                            onChange={(e) =>{
                              settop_cone_bottom_id(e.target.value)
                              setVessel_cylindrical_id(e.target.value)
                              Setbottom_cone_top_id(e.target.value)
                            }
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
                            value={top_cone_bottom_id}
                            type="number"
                            defaultValue="Small"
                            disabled
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            // onChange={(e) =>
                            //   settop_cone_bottom_id(e.target.value)
                            // }
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
                            value={bottom_cone_top_id}
                            variant="outlined"
                            disabled
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            // onChange={(e) =>
                            //   Setbottom_cone_top_id(e.target.value)
                            // }
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
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 200 : 100 }}
                            label="Safety"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) => Settop_safety(e.target.value)}
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
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            
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
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
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
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
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
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
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
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
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
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
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
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
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
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
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
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
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
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={22}>22</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
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
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                            <MenuItem value={125}>125</MenuItem>
                            <MenuItem value={150}>150</MenuItem>
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
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                            <MenuItem value={125}>125</MenuItem>
                            <MenuItem value={150}>150</MenuItem>
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
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                            <MenuItem value={125}>125</MenuItem>
                            <MenuItem value={150}>150</MenuItem>
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
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={28}>28</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={32}>32</MenuItem>
                            <MenuItem value={36}>36</MenuItem>
                            <MenuItem value={40}>40</MenuItem>
                            <MenuItem value={45}>45</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                            <MenuItem value={125}>125</MenuItem>
                            <MenuItem value={150}>150</MenuItem>
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
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <TextField
                            required
                            className="textfield_ladle"
                            id="outlined-number"
                            sx={{ m: 1, minWidth: isMobile ? 220 : 100 }}
                            label="Vessel Flange Distance"
                            variant="outlined"
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            onChange={(e) =>
                              Setvessel_flanges_distance(e.target.value)
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
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Size1
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={size1_t}
                            label="Size 1"
                            onChange={(e) => Setsize1_t(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={225}>225</MenuItem>
                            <MenuItem value={250}>250</MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                            <MenuItem value={450}>450</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                            <MenuItem value={550}>550</MenuItem>
                            <MenuItem value={600}>600</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                    </TableCell>
                    <TableCell>
                    <div className="row_ladle flex-all">
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Size1
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={size1_s}
                            label="Size 1"
                            onChange={(e) => Setsize1_s(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={225}>225</MenuItem>
                            <MenuItem value={250}>250</MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                            <MenuItem value={450}>450</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                            <MenuItem value={550}>550</MenuItem>
                            <MenuItem value={600}>600</MenuItem>
                          </Select>
                        </FormControl>
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
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Size2
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={size2_t}
                            label="Size 2"
                            onChange={(e) => Setsize2_t(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={225}>225</MenuItem>
                            <MenuItem value={250}>250</MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                            <MenuItem value={450}>450</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                            <MenuItem value={550}>550</MenuItem>
                            <MenuItem value={600}>600</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                    </TableCell>
                    <TableCell>
                    <div className="row_ladle flex-all">
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Size2
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={size2_s}
                            label="Size 2"
                            onChange={(e) => Setsize2_s(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={225}>225</MenuItem>
                            <MenuItem value={250}>250</MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                            <MenuItem value={450}>450</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                            <MenuItem value={550}>550</MenuItem>
                            <MenuItem value={600}>600</MenuItem>
                          </Select>
                        </FormControl>
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
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Size3
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={size3_t}
                            label="Size 3"
                            onChange={(e) => Setsize3_t(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={225}>225</MenuItem>
                            <MenuItem value={250}>250</MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                            <MenuItem value={450}>450</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                            <MenuItem value={550}>550</MenuItem>
                            <MenuItem value={600}>600</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                    </TableCell>
                    <TableCell>
                    <div className="row_ladle flex-all">
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Size3
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={size3_s}
                            label="Size 3"
                            onChange={(e) => Setsize3_s(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={225}>225</MenuItem>
                            <MenuItem value={250}>250</MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                            <MenuItem value={450}>450</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                            <MenuItem value={550}>550</MenuItem>
                            <MenuItem value={600}>600</MenuItem>
                          </Select>
                        </FormControl>
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
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Size4
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={size4_t}
                            label="Size 4"
                            onChange={(e) => Setsize4_t(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={225}>225</MenuItem>
                            <MenuItem value={250}>250</MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                            <MenuItem value={450}>450</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                            <MenuItem value={550}>550</MenuItem>
                            <MenuItem value={600}>600</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                    </TableCell>
                    <TableCell>
                    <div className="row_ladle flex-all">
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Size4
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={size4_s}
                            label="Size 4"
                            onChange={(e) => Setsize4_s(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={225}>225</MenuItem>
                            <MenuItem value={250}>250</MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                            <MenuItem value={450}>450</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                            <MenuItem value={550}>550</MenuItem>
                            <MenuItem value={600}>600</MenuItem>
                          </Select>
                        </FormControl>
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
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Safety Lining Length
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={safety_lining_length_t}
                            label="Safety Lining Length"
                            onChange={(e) => Setsafety_lining_length_t(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={75}>75</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                    </TableCell>
                    <TableCell>
                    <div className="row_ladle flex-all">
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Safety Lining Length
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={safety_lining_length_s}
                            label="Safety Lining Length"
                            onChange={(e) => Setsafety_lining_length_s(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={75}>75</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                    </TableCell>
                    <TableCell>
                      {/* <div className="row_ladle flex-all">
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
                      </div> */}
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
                          onChange={(e) =>{
                            Setdegree_lining_for_trapping_t(e.target.value)
                            Setdegree_lining_for_trapping_s(360 - e.target.value)
                          }
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
                          value={degree_lining_for_trapping_s}
                          type="number"
                          disabled
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
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Top Cone Lining
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={top_cone_lining}
                            label="Top Cone Lining"
                            onChange={(e) => Settop_cone_lining(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={250}>250</MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                      </TableCell>
                      <TableCell>
                      <div className="row_ladle flex-all">
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Bottom Cone Side Lining Brick Length
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={bottom_cone_side_lining_brick_length}
                            label="Bottom Cone Side Lining Brick Length"
                            onChange={(e) => Setbottom_cone_side_lining_brick_length(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                            <MenuItem value={450}>450</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                            <MenuItem value={550}>550</MenuItem>
                            <MenuItem value={600}>600</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                      </TableCell>
                      <TableCell>
                      <div className="row_ladle flex-all">
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Bottom Cone Bottom Lining Brick Length
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={bottom_cone_bottom_lining_brick_length}
                            label="Bottom Cone Bottom Lining Brick Length"
                            onChange={(e) => Setbottom_cone_bottom_lining_brick_length(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={350}>350</MenuItem>
                            <MenuItem value={400}>400</MenuItem>
                            <MenuItem value={450}>450</MenuItem>
                            <MenuItem value={500}>500</MenuItem>
                            <MenuItem value={550}>550</MenuItem>
                            <MenuItem value={600}>600</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                      </TableCell>
                      <TableCell>
                      <div className="row_ladle flex-all">
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Bottom Cone Safety Lining Brick Length
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={bottom_cone_safety_lining_brick_length}
                            label="Bottom Cone Safety Lining Brick Length"
                            onChange={(e) => Setbottom_cone_safety_lining_brick_length(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={75}>75</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                          </Select>
                        </FormControl>
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
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Brick Std Width
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={bricks_std_width}
                            label="Bricks Std Width"
                            onChange={(e) => Setbricks_std_width(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                            <MenuItem value={150}>150</MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                          </Select>
                        </FormControl>
                        </div>
                      </TableCell>
                      <TableCell>
                      <div className="row_ladle flex-all">
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Brick Std Height
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={bricks_std_height}
                            label="Bricks Std Height"
                            onChange={(e) => Setbricks_std_height(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                            <MenuItem value={125}>125</MenuItem>
                            <MenuItem value={150}>150</MenuItem>
                          </Select>
                        </FormControl>
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
                            value={safety_bricks_width}
                            disabled
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            // onChange={(e) =>
                            //   Setsafety_bricks_width(e.target.value)
                            // }
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
                      <FormControl
                          sx={{ m: 0, minWidth: isMobile ? 220 : 100 }}
                          size="small"
                        // error={error_show.thickness4 && !thickness4}
                        >
                          <InputLabel id="demo-select-small-label">
                            Safety Bricks Height
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={safety_bricks_height}
                            label="Safety Bricks Height"
                            onChange={(e) => Setsafety_bricks_height(e.target.value)}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={75}>75</MenuItem>
                          </Select>
                        </FormControl>
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
                            value={safety_bricks_length}
                            disabled
                            type="number"
                            defaultValue="Small"
                            // error={error_show.topdiameter && !topdiameter}
                            size="small"
                            // onChange={(e) =>
                            //   Setsafety_bricks_length(e.target.value)
                            // }
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


      <div ref={div2Ref} className={output_show ? "main-box_ladle" : "dis"} style={{ marginBottom: "5vh" }}>
      <h6 className={load?"watermark2":"dis"}>The Design Engg</h6>
        <h2 className="head_ladle">Output</h2>
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
                          <p>Capacity of AOD Vessel</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{capacity_aod} MT</p>
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
                          <p>Volumn of AOD Vessel</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{volumn_aod} Cu.Mtr</p>
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
                          <p>Total Capacity @90 degree Tilt Vessel</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{total_capacity} MT</p>
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
                          <p>Total Volume @90 degree Tilt Vessel</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{total_volumn} Cu.Mtr</p>
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
                          <p>Disc End Dia</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{disc_end_dia}</p>
                        </div>
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>



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
                          <p>Perticulars</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Weight(MT)</p>
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
                          <p>Metal</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{metal}</p>
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
                          <p>Lining Bricks</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{lining_bricks}</p>
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
                          <p>Fabricated Vessel</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{fabricated_vessel}</p>
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
                          <p>Slag-10% of Metal</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{slag}</p>
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
                          <p>Total</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{total}</p>
                        </div>
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>


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
                          <p>{top_cone_table_0_1}</p>
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
                          <p>{top_cone_table2_0_1}</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
          <p className="aod_para">Bricks Quantity Total Weight of Bricks {total_weight} MT</p>
      </div>
      

      <div ref={div3Ref} className={output_show ? "main-box_ladle" : "dis"} style={{ marginBottom: "5vh" }}>
      <h6 className={load?"watermark2":"dis"}>The Design Engg</h6>
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
          <p className="aod_para">
          Safety Lining for Cylindrical portion of Vessel
        </p>

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



       <div ref={div4Ref} className={output_show ? "main-box_ladle" : "dis"} style={{ marginBottom: "5vh" }}>
       <h6 className={load?"watermark2":"dis"}>The Design Engg</h6>
            <p className="aod_para">Top Cone Bricks Details</p>
            <div className="ladle_first">
            <Paper sx={{ overflow: "hidden" }}>
              <TableContainer
                sx={{ maxHeight: 2500 }}
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_1}</p>
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
                          <p>{top_cone_table_3_24}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_1}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_2}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_3}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_4}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_6}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_6}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_5}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_7}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_7}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_6}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_6}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_8}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_8}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_7}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_7}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_9}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_9}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_8}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_8}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_10}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_10}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_9}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_9}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_11}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_11}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_10}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_10}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_12}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_12}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_11}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_11}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_13}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_13}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_12}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_12}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_14}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_14}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_13}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_13}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_15}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_15}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_14}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_14}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_16}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_16}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_15}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_15}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_17}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_17}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_16}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_16}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_18}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_18}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_17}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_17}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_19}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_19}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_18}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_18}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_20}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_20}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_19}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_19}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_21}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_21}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_20}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_20}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_22}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_22}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_21}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_21}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_23}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_23}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_22}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_22}</p>
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
                          <p>{top_cone_lining}</p>
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
                          <p>{top_cone_table_0_24}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_1_24}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_2_23}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table_3_23}</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
       </div>


       <div ref={div5Ref} className={output_show ? "main-box_ladle" : "dis"} style={{ marginBottom: "5vh" }}>
       <h6 className={load?"watermark2":"dis"}>The Design Engg</h6>
        <p className="aod_para">Vessel bottom Conical Portion</p>
        <div className="ladle_first">
            <Paper sx={{ overflow: "hidden" }}>
              <TableContainer
                sx={{ maxHeight: 2500 }}
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
                          <p>{top_cone_table2_0_1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_1}</p>
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
                          <p>{top_cone_table2_3_24}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_1}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_2}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_3}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_4}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_6}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_6}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_5}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_7}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_7}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_6}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_6}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_8}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_8}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_7}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_7}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_9}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_9}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_8}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_8}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_10}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_10}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_9}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_9}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_11}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_11}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_10}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_10}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_12}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_12}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_11}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_11}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_13}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_13}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_12}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_12}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_14}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_14}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_13}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_13}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_15}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_15}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_14}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_14}</p>
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table2_0_16}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_1_16}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_2_15}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p></p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table2_3_15}</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
          
        <p className="aod_para">Bottom Lining</p>
        <div className="ladle_first">

            <Paper sx={{ overflow: "hidden" }}>
              <TableContainer
                sx={{ maxHeight: 2500 }}
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
                          <p>{bottom_cone_side_lining_brick_length}</p>
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
                          <p>{top_cone_table3_0}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table3_1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table3_2}</p>
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
                          <p>{top_cone_table3_3}</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
          
        <p className="aod_para">Bottom Cone & Bottom Safety</p>
        <div className="ladle_first">
            <Paper sx={{ overflow: "hidden" }}>
              <TableContainer
                sx={{ maxHeight: 2500 }}
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
                          <p>{top_cone_table4_sum}</p>
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
                          <p>{safety_bricks_height}</p>
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
                          <p>{top_cone_table4_1_0}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Top Cone</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table4_1_1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table4_1_2}</p>
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
                          <p>{top_cone_table4_1_3}</p>
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
                          <p>{safety_bricks_height}</p>
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
                          <p>{top_cone_table4_2_0}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Bottom Cone</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table4_2_1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table4_2_2}</p>
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
                          <p>{top_cone_table4_2_3}</p>
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
                          <p>{safety_bricks_height}</p>
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
                          <p>{top_cone_table4_3_0}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Bottom Cone</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table4_3_1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_table4_3_2}</p>
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
                          <p>{top_cone_table4_3_3}</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>

       </div>

      

       <div ref={div6Ref} className={output_show ? "main-box_ladle" : "dis"} style={{ marginBottom: "5vh" }}>
       <h6 className={load?"watermark2":"dis"}>The Design Engg</h6>
          <p className="aod_para">Fabrication Approx. Weight for AOD Vessel - Above Dimensions: {weightsum} Kgs</p>
          <div className="ladle_first">
            <Paper sx={{ overflow: "hidden" }}>
              <TableContainer
                sx={{ maxHeight: 2500 }}
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
                          <p>Perticulars</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Plate Thick.</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Size-L</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Size-W</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Qty.</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>Weight</p>
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
                          <p>Cyl. Shell</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{vessel_cylindrical_shell}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty1}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight1}</p>
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
                          <p>Top Cone Shell</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{vessel_top_cone}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty2}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight2}</p>
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
                          <p>Bottom Cone Shell</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{vessel_bottom_cone}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty3}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight3}</p>
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
                          <p>Cyl. Shell Flange</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{cylindrical_shell_flange}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty4}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight4}</p>
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
                          <p>Top Cone Shell Flange</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_flange}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty5}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight5}</p>
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
                          <p>Top Cone Protection Flg</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{top_cone_protection_flange}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL6}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW6}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty6}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight6}</p>
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
                          <p>Disc End</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{disc_end}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL7}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW7}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty7}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight7}</p>
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
                          <p>Stiffner Cyl. Flange</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{stiffner_cyl_flange}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL8}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW8}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty8}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight8}</p>
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
                          <p>Stiffner Top Cone Flange</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{stiffnertop_cone_flange}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL9}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW9}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty9}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight9}</p>
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
                          <p>Lifting Hook</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{lifting_hook}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL10}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW10}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty10}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight10}</p>
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
                          <p>Legs</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{legs}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL11}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW11}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty11}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight11}</p>
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
                          <p>Cone Top Rim</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{cone_top_rim}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL12}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW12}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty12}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight12}</p>
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
                          <p>Pin Lifting Hook</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{pin_lifting_hook}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL13}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW13}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty13}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight13}</p>
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
                          <p>Cylinder to Trunion Flange</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{cylinder_to_trunion_flange}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeL14}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{sizeW14}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{qty14}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="row_ladle flex-all">
                          <p>{weight14}</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>

       </div>

       

      
       <div ref={div7Ref} className={output_show ? "" : "dis"}>
       <h6 className={load?"watermark2":"dis"}>The Design Engg</h6>
        <h2 className="dia_head1">Straight Vessel Without Bottom Cone</h2>
        <div
          className="flex-all img_ladle"
          style={{ gap: "50vh", marginTop: "10vh" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <h3 style={{ textAlign: "center", marginBottom: "1vh" }}>
              DEVELOPMENT OF LADLE TOP RIM PLATE
            </h3>
            <h5 style={{ textAlign: "center", marginBottom: "10vh" }}>
              SIX SECTOR PLATE @ 60 DEGREE EACH
            </h5> */}
            <div className="dia">
              <div className="dia_p_1aod">
                <p className="p1"> Cone Shell Thk. {dia1}</p>
              </div>
              <div className="dia_p_2aod">
                <p className="p1">Total Height of Vessel</p>
              </div>
              <div className="dia_p_3aod">
                <p className="p1">Vessel Shell Thk. {dia2}</p>
              </div>
              <div className="dia_p_4aod">
                <p className="p1">Bottom Cone Thk. {dia3}</p>
              </div>
              <div className="dia_p_5aod">
                <p className="p1">Disc End Thk. {dia4}</p>
              </div>
              <Image
                src="/aod6.jpeg"
                alt="My Image"
                width={imageWidth2}
                height={imageheight1}
                loading="eager" // Options: "eager", "lazy", or "auto"
                priority // Preload this image
                quality={80} // Set the image quality (0-100)
              />
            </div>
          </div>

          <div className="dia">
            <div className="dia_p_6aod">
              <p className="p1"> Vessel ID {dia5}</p>
            </div>
            <div className="dia_p_7aod">
              <p className="p1" style={{ fontSize: "10px" }}>
                Cone Top ID
              </p>
            </div>
            <div className="dia_p_8aod">
              <p className="p1" style={{ fontSize: "10px" }}>
                {dia6}
              </p>
            </div>
            <div className="dia_p_9aod">
              <p className="p1">Top Cone Height</p>
            </div>
            <div className="dia_p_10aod">
              <p className="p1">Cone Flange Thk.</p>
            </div>
            <div className="dia_p_11aod">
              <p className="p1">Vessel FLange Thk.</p>
            </div>
            <div className="dia_p_12aod">
              <p className="p1">Cyl. Shell Height</p>
            </div>
            <div className="dia_p_13aod">
              <p className="p1 p_temp">Bottom Cone with Disc end Height</p>
            </div>
            <div className="dia_p_14aod">
              <p className="p1">{dia7}</p>
            </div>
            <div className="dia_p_15aod">
              <p className="p1">{dia8}</p>
            </div>
            <div className="dia_p_16aod">
              <p className="p1">{dia9}</p>
            </div>
            <div className="dia_p_17aod">
              <p className="p1">{dia10}</p>
            </div>
            <div className="dia_p_18aod">
              <p className="p1">{dia11}</p>
            </div>
            <div className="dia_p_19aod">
              <p className="p1">Bottom Cone Dia</p>
            </div>
            <div className="dia_p_20aod">
              <p className="p1">{dia12}</p>
            </div>
            <div className="dia_p_21aod">
              <p className="p1">{dia13}</p>
            </div>
            <Image
              src="/aod1.png"
              alt="My Image"
              width={imageWidth2}
              height={imageheight1}
              loading="eager" // Options: "eager", "lazy", or "auto"
              priority // Preload this image
              quality={80} // Set the image quality (0-100)
            />
          </div>
        </div>

        <h2 className="dia_head1">Cylindrical Shell Plate</h2>
        <div
          className="flex-all img_ladle"
          style={{ gap: "50vh", marginTop: "10vh" }}
        >
          <div className="dia">
            <div className="dia_p_22aod">
              <p className="p1">{dia14}</p>
            </div>
            <div className="dia_p_23aod">
              <p className="p1">{dia15}</p>
            </div>
            <Image
              src="/aod7.png"
              alt="My Image"
              width={imageWidth}
              height={imageheight2}
              loading="eager" // Options: "eager", "lazy", or "auto"
              priority // Preload this image
              quality={80} // Set the image quality (0-100)
            />
          </div>
        </div>
        <h2 className="dia_head1">Top Cone Plate</h2>
        <div
          className="flex-all img_ladle"
          style={{ gap: "50vh", marginTop: "10vh" }}
        >
          <div className="dia">
            <div className="dia_p_24aod">
              <p className="p1">{dia16}</p>
            </div>
            <div className="dia_p_25aod">
              <p className="p1">{dia17} R</p>
            </div>
            <div className="dia_p_26aod">
              <p className="p1">{dia18} r</p>
            </div>
            <div className="dia_p_27aod">
              <p className="p1">{dia19}</p>
            </div>
            <div className="dia_p_28aod">
              <p className="p1">{dia20} Angle in Degree</p>
            </div>
            <div className="dia_p_29aod">
              <p className="p1">{dia21} Thk.</p>
            </div>
            <Image
              src="/aod2.png"
              alt="My Image"
              width={imageWidth3}
              height={imageheight2}
              loading="eager" // Options: "eager", "lazy", or "auto"
              priority // Preload this image
              quality={80} // Set the image quality (0-100)
            />
          </div>
        </div>
      </div>

      <div ref={div8Ref} className={output_show ? "" : "dis"}>
      <h6 className={load?"watermark2":"dis"}>The Design Engg</h6>
      <h2 className="dia_head1">Disc End</h2>
        <div
          className="flex-all img_ladle"
          style={{ gap: "50vh", marginTop: "10vh" }}
        >
          <div className="dia">
            <div className="dia_p_30aod">
              <p className="p1">{dia22} Dia</p>
            </div>
            <div className="dia_p_31aod">
              <p className="p1">{dia23} Thk.</p>
            </div>
            <Image
              src="/aod4.png"
              alt="My Image"
              width={imageWidth2}
              height={imageheight1}
              loading="eager" // Options: "eager", "lazy", or "auto"
              priority // Preload this image
              quality={80} // Set the image quality (0-100)
            />
          </div>
        </div>

        <h2 className="dia_head1">Bottom Cone Plate</h2>
        <div
          className="flex-all img_ladle"
          style={{ gap: "50vh", marginTop: "10vh" }}
        >
          <div className="dia">
            <div className="dia_p_24aod">
              <p className="p1">{dia24}</p>
            </div>
            <div className="dia_p_25aod">
              <p className="p1">{dia25} R</p>
            </div>
            <div className="dia_p_26aod">
              <p className="p1">{dia26} r</p>
            </div>
            <div className="dia_p_27aod">
              <p className="p1">{dia27}</p>
            </div>
            <div className="dia_p_28aod">
              <p className="p1">{dia28} Angle in Degree</p>
            </div>
            <div className="dia_p_29aod">
              <p className="p1">{dia29} Thk.</p>
            </div>
            <Image
              src="/aod2.png"
              alt="My Image"
              width={imageWidth3}
              height={imageheight2}
              loading="eager" // Options: "eager", "lazy", or "auto"
              priority // Preload this image
              quality={80} // Set the image quality (0-100)
            />
          </div>
        </div>

        <div
          className="flex-all img_ladle"
          style={{ gap: "50vh", marginTop: "15vh", marginBottom: "15vh" }}
        >
          <div className="dia">
            <div className="dia_p_32aod">
              <p className="p1">R {dia30}</p>
            </div>
            <div className="dia_p_33aod">
              <p className="p1">{dia31}</p>
            </div>
            <div className="dia_p_34aod">
              <p className="p1">{dia32}</p>
            </div>
            <div className="dia_p_35aod">
              <p className="p1">{dia33} r</p>
            </div>
            <div className="dia_p_36aod">
              <p className="p1">{dia34}</p>
            </div>
            <Image
              src="/aod3.jpeg"
              alt="My Image"
              width={imageWidth2}
              height={imageheight1}
              loading="eager" // Options: "eager", "lazy", or "auto"
              priority // Preload this image
              quality={80} // Set the image quality (0-100)
            />
          </div>
        </div>
      </div>

      <div ref={div9Ref} className={output_show ? "" : "dis"}>
      <h6 className={load?"watermark2":"dis"}>The Design Engg</h6>
        <div
          className="flex-all img_ladle"
          style={{ gap: "50vh", marginTop: "15vh", marginBottom: "15vh" }}
        >
          <div className="dia">
            <div className="dia_p_32aod">
              <p className="p1">R {dia35}</p>
            </div>
            <div className="dia_p_33aod">
              <p className="p1">{dia36}</p>
            </div>
            <div className="dia_p_34aod">
              <p className="p1">{dia37}</p>
            </div>
            <div className="dia_p_35aod">
              <p className="p1">{dia38} r</p>
            </div>
            <div className="dia_p_36aod">
              <p className="p1">{dia39}</p>
            </div>
            <Image
              src="/aod3.jpeg"
              alt="My Image"
              width={imageWidth2}
              height={imageheight1}
              loading="eager" // Options: "eager", "lazy", or "auto"
              priority // Preload this image
              quality={80} // Set the image quality (0-100)
            />
          </div>
        </div>

        <div
          className="flex-all img_ladle"
          style={{ gap: "50vh", marginTop: "15vh", marginBottom: "15vh" }}
        >
          <div className="dia">
            <div className="dia_p_32aod">
              <p className="p1">R {dia35}</p>
            </div>
            <div className="dia_p_37aod">
              <p className="p1">{dia36}</p>
            </div>
            <div className="dia_p_34aod">
              <p className="p1">{dia37}</p>
            </div>
            <div className="dia_p_35aod">
              <p className="p1">{dia38} r</p>
            </div>
            <div className="dia_p_36aod">
              <p className="p1">{dia39}</p>
            </div>
            <Image
              src="/aod5.jpeg"
              alt="My Image"
              width={imageWidth2}
              height={imageheight1}
              loading="eager" // Options: "eager", "lazy", or "auto"
              priority // Preload this image
              quality={80} // Set the image quality (0-100)
            />
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
          <div className={load ? "loader_load" : "loader_load dis_none"}><div><CircularProgress className="CircularProgress" color="inherit" /></div></div>
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
