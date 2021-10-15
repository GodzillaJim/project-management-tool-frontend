import React from "react";
import {
  Chip,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap-css-only/css/bootstrap.css";

const useStyles = makeStyles((theme) => ({
  listIcon: {
    minWidth: "18px",
    marginTop: "auto",
    marginBottom: "auto",
  },
  listCustomIconSub: {
    width: "6px",
    height: "6px",
  },
  listCustomIconSubActive: {
    width: "8px",
    height: "8px",
  },
  listItem: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    paddingTop: theme.spacing(1),
  },
  listItemActive: {
    margin: "auto",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    alignItems: "center",
    borderRadius: "20px",
    paddingTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
  },
  listItemNoBack: {
    marginBottom: "5px",
    backgroundColor: "transparent !important",
    paddingTop: "8px",
    paddingBottom: "8px",
    alignItems: "flex-start",
  },
  subMenuCaption: {
    ...theme.typography.subMenuCaption,
  },
  icon: {
    color: theme.palette.error.dark,
  },
}));
const NavItem = ({ item }) => {
  const location = useLocation();
  const classes = useStyles();
  const navigate = useNavigate();
  const { Icon } = item;
  return (
    <ListItem
      button={true}
      className={
        location.pathname === item.href
          ? classes.listItemActive
          : classes.listItem
      }
      disabled={item.disabled}
      onClick={() => navigate(item.href)}
    >
      {Icon && (
        <ListItemIcon>
          <Icon className={classes.icon} />
        </ListItemIcon>
      )}
      <ListItemText
        primary={
          <Typography color={"inherit"} variant={"h5"}>
            {item.title}
          </Typography>
        }
      />
      {item.chip && (
        <Chip
          color={"default"}
          variant={"default"}
          size={"small"}
          label={item.chip.label}
        />
      )}
    </ListItem>
  );
};
NavItem.propTypes = {
  item: PropTypes.object,
};
export default NavItem;
