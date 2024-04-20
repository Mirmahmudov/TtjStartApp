import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";

function Paymet() {
  return (
    <>
      <Navbar />
      <Box height={70} />

      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <h1>Paymet</h1>
      </Box>
    </>
  );
}

export default Paymet;
