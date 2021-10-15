import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import ContainCard from "./ContainCard";

const useStyles = makeStyles((theme) => ({
  item: {
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
}));
const ProjectCard = ({ project }) => {
  const classes = useStyles();
  return (
    <Grid item xs={"12"} sm={"12"} className={classes.item} md={"4"} lg={"4"}>
      <ContainCard project={project} />
    </Grid>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};
export default ProjectCard;
