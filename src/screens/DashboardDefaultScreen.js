import React, { useCallback } from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { LoremIpsum } from "lorem-ipsum";
import ProjectCard from "../components/ProjectCard";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Reload from "../components/Reload";
import SkeletonCard from "../components/SkeletonCard";
import { getProjectsAction } from "../store/actions";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: { max: 16, min: 4 },
});
const sampleProjects = [];
for (let i = 0; i < 9; i++) {
  sampleProjects.push({
    id: i + 1,
    name: lorem.generateWords(2),
    projectIdentifier: lorem.generateWords(1),
    description: lorem.generateParagraphs(1),
    startDate: moment().subtract(2, "days").toISOString(),
    endDate: moment()
      .add(Math.random() + 5, "days")
      .toISOString(),
  });
}
const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    margin: theme.spacing(1),
    textTransform: "uppercase",
    fontWeight: 600,
    color: theme.palette.primary.dark,
  },
  skeleton: {
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
}));
const DashboardDefaultScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { error, loading, projects } = useSelector(
    (state) => state.getAllProjects
  );
  const getAllProjects = useCallback(() => {
    dispatch(getProjectsAction());
  }, [dispatch]);
  React.useEffect(() => {
    if (!projects && !loading && !error) {
      getAllProjects();
    }
  }, [projects, loading, error, getAllProjects]);
  return (
    <Container>
      <Typography variant={"h5"} className={classes.sectionTitle}>
        Projects
      </Typography>
      {error && (
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Reload error={error} reload={getAllProjects} />
          </Grid>
        </Grid>
      )}
      {loading && (
        <Grid
          container
          justifyContent={"center"}
          direction={"row"}
          alignContent={"center"}
        >
          {sampleProjects.map((pro, index) => (
            <Grid
              className={classes.skeleton}
              xs={"12"}
              sm={"12"}
              md={4}
              lg={"4"}
              item
              key={index}
            >
              <SkeletonCard />
            </Grid>
          ))}
        </Grid>
      )}
      {!error && projects && (
        <Grid container justifyContent={"center"} direction={"row"}>
          {projects.map((project, index) => (
            <ProjectCard loading={loading} key={index} project={project} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default DashboardDefaultScreen;
