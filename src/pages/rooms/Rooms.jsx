import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";

function Rooms() {
  return (
    <>
      <Navbar />
      <Box height={70} />

      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <h1>Room</h1>
      </Box>
    </>
  );
}

export default Rooms;
