import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
  },
  appBarWidth: {
    transition: theme.transitions.create("width"),
    backgroundColor: theme.palette.background.default,
  },
}));

const Header = ({ toggleDashboard }) => {
  const classes = useStyles();
  return (
    <AppBar
      color={"inherit"}
      position={"fixed"}
      className={classes.appBarWidth}
    >
      <Toolbar>
        <IconButton size="small" onClick={toggleDashboard}>
          <Menu color={"secondary"} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  toggleDashboard: PropTypes.func,
};
export default Header;
