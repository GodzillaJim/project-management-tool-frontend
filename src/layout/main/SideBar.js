import React from "react";
import { Box, Drawer, makeStyles } from "@material-ui/core";
import Menu from "./components/Menu";
import PropTypes from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import { BrowserView } from "react-device-detect";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      flexShrink: 0,
    },
  },

  drawerPaper: {
    width: 240,
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRight: "none",
    [theme.breakpoints.up("md")]: {
      top: "88px",
    },
  },
  scrollHeight: {
    height: "calc(100vh - 88px)",
    paddingLeft: "16px",
    paddingRight: "16px",
    [theme.breakpoints.down("sm")]: { height: "calc(100vh - 56px)" },
  },
  boxContainer: {
    display: "flex",
    padding: "16px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
const SideBar = ({ open }) => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        className={classes.drawer}
        style={{ width: open ? "240px" : "fit-content" }}
        classes={{ paper: classes.drawerPaper }}
        open={open}
        variant={"persistent"}
        title={"PMS"}
      >
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <div className={classes.boxContainer}>PROJECT</div>
        </Box>
        <PerfectScrollbar component={"div"} className={classes.scrollHeight}>
          <BrowserView>
            <Menu />
          </BrowserView>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

SideBar.propTypes = {
  open: PropTypes.bool,
};
export default SideBar;
