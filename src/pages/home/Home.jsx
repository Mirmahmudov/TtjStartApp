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

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <Box height={70} />

        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div style={{ marginBottom: "20px" }} className="box">
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Talabalar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="box">
                      <div className="box_body">
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>Barchasi</p>
                        </Link>
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>Kutmoqda</p>
                        </Link>
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>Berildi</p>
                        </Link>
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>Chiqib ketdi</p>
                        </Link>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div style={{ marginBottom: "20px" }} className="box">
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Xonalar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="box">
                      <div className="box_body">
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>Barchasi</p>
                        </Link>
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>1-qavat</p>
                        </Link>
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>2-qavat</p>
                        </Link>
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>3-qavat</p>
                        </Link>
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>3-qavat</p>
                        </Link>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div style={{ marginBottom: "20px" }} className="box">
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>To'lovlar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="box">
                      <div className="box_body">
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>Barchasi</p>
                        </Link>
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>Kutmoqda</p>
                        </Link>
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>Bezildi</p>
                        </Link>
                        <Link className="smalL_box">
                          <div className="icon">
                            <img src="" alt="" />
                          </div>
                          <p>Chiqib ketdi</p>
                        </Link>
                      </div>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Home;
