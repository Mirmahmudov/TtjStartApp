import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppStore } from "../appStore";
import GroupIcon from "@mui/icons-material/Group";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import AddCardIcon from "@mui/icons-material/AddCard";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

import LogoutIcon from "@mui/icons-material/Logout";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import "./Navbar.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenav() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(true);

  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);

  const [opens, setOpens] = React.useState(false);
  const [rooms, setRooms] = React.useState(false);

  const handleClick = () => {
    setOpens(!opens);
  };

  const roomClick = () => {
    setRooms(!rooms);
  };

  return (
    <div id="sidenav">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>

              <ListItemText primary="Talabalar" />
              {opens ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={opens} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to={"/students"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Barchasi" />
                  </ListItemButton>
                </NavLink>
                <NavLink to={"/studentwait"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <HourglassEmptyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Kutmoqda" />
                  </ListItemButton>
                </NavLink>
                <NavLink to={"/studentgiven"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Berildi" />
                  </ListItemButton>
                </NavLink>
                <NavLink to={"/studentout"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PersonRemoveIcon />
                    </ListItemIcon>
                    <ListItemText primary="Chiqib Ketdi" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={roomClick}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Xonalar" />
              {rooms ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={rooms} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <NavLink to={"/rooms"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Barchasi" />
                  </ListItemButton>
                </NavLink>

                <NavLink to={"/"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PanoramaFishEyeIcon />
                    </ListItemIcon>
                    <ListItemText primary="1-qavat" />
                  </ListItemButton>
                </NavLink>
                <NavLink to={"/"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PanoramaFishEyeIcon />
                    </ListItemIcon>
                    <ListItemText primary="2-qavat" />
                  </ListItemButton>
                </NavLink>
                <NavLink to={"/"}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PanoramaFishEyeIcon />
                    </ListItemIcon>
                    <ListItemText primary="3-qavat" />
                  </ListItemButton>
                </NavLink>
              </List>
            </Collapse>
          </List>
          <List>
            <NavLink to={"/paymet"}>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.3,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3.5 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AddCardIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="To'lovlar"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to={"/fkjfjfd"}>
              <ListItem
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  navigate();
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.3,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3.5 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Long Out"
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Drawer>
      </Box>
    </div>
  );
}
