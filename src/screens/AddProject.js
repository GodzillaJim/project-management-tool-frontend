import React from "react";
import PropTypes from "prop-types";
import { Container, Grid, Modal } from "@material-ui/core";
import { Typography } from "@mui/material";

const AddProject = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Container>
        <Grid container direction={"row"}>
          <Grid item>
            <Typography color={"steelblue"}>Create Project</Typography>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
};
AddProject.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
export default AddProject;
