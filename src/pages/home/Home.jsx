import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Home.css";
import Sidenav from "../../components/Sidenav";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Students from "../students/Students";

function Home() {
  return (
    <>
      <div className="home">
        {/* <Navbar /> */}
        {/* <Box height={70} /> */}

        <Students />
      </div>
    </>
  );
}

export default Home;
