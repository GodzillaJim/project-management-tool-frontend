import React, { useCallback, useState } from 'react'
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { LoremIpsum } from 'lorem-ipsum'
import ProjectCard from '../components/ProjectCard'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import Reload from '../components/Reload'
import SkeletonCard from '../components/SkeletonCard'
import { getProjectsAction } from '../store/actions'
import { Add } from '@material-ui/icons'
import { Card, CardContent, Fab } from '@mui/material'
import AddProject from './AddProject'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: { max: 16, min: 4 }
})
const sampleProjects = []
for (let i = 0; i < 9; i++) {
  sampleProjects.push({
    id: i + 1,
    name: lorem.generateWords(2),
    projectIdentifier: lorem.generateWords(1),
    description: lorem.generateParagraphs(1),
    startDate: moment().subtract(2, 'days').toISOString(),
    endDate: moment()
      .add(Math.random() + 5, 'days')
      .toISOString()
  })
}
const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    margin: theme.spacing(1),
    textTransform: 'uppercase',
    fontWeight: 600,
    color: theme.palette.primary.dark
  },
  skeleton: {
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1)
  },
  addProjectButton: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.primary.light,
    borderRadius: theme.spacing(20),
    border: 'none',
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    },
    '&.active': {
      border: '0px solid'
    },
    marginBottom: theme.spacing(1)
  }
}))
const DashboardDefaultScreen = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [addProject, setAddProject] = useState(false)
  const handleCloseAddProjectPopup = () => setAddProject(!addProject)
  const { error, loading, projects } = useSelector(
    (state) => state.getAllProjects
  )
  const getAllProjects = useCallback(() => {
    dispatch(getProjectsAction())
  }, [dispatch])
  React.useEffect(() => {
    if (!projects && !loading && !error) {
      getAllProjects()
    }
  }, [projects, loading, error, getAllProjects])
  return (
        <Container>
            <Grid container justifyContent={'space-between'}>
                <Grid item>
                    <Typography variant={'h5'} className={classes.sectionTitle}>
                        Projects
                    </Typography>
                </Grid>
                <Grid item>
                    {!isMobile && (
                        <Button
                            onClick={handleCloseAddProjectPopup}
                            className={classes.addProjectButton}
                            variant={'contained'}
                            startIcon={<Add/>}
                        >
                            Add Project
                        </Button>
                    )}
                    {isMobile && (
                        <Fab onClick={handleCloseAddProjectPopup}
                             className={classes.addProjectButton}>
                            <Add color={'inherit'}/>
                        </Fab>
                    )}
                </Grid>
                <AddProject
                    open={addProject}
                    handleClose={handleCloseAddProjectPopup}
                />
            </Grid>
            {projects && projects.length === 0 && (
                <Grid container justifyContent={'center'}>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography variant={'body1'}>You have no
                                    projects</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}
            {error && (
                <Grid container justifyContent={'center'}>
                    <Grid item>
                        <Reload error={error} reload={getAllProjects}/>
                    </Grid>
                </Grid>
            )}
            {loading && (
                <Grid
                    container
                    justifyContent={'center'}
                    direction={'row'}
                    alignContent={'center'}
                >
                    {sampleProjects.map((pro, index) => (
                        <Grid
                            className={classes.skeleton}
                            xs={12}
                            sm={12}
                            md={4}
                            lg={4}
                            item
                            key={index}
                        >
                            <SkeletonCard/>
                        </Grid>
                    ))}
                </Grid>
            )}
            {!error && projects && projects.length > 0 && (
                <Grid container justifyContent={'center'} direction={'row'}>
                    {projects.map((project, index) => (
                        <ProjectCard loading={loading} key={index}
                                     project={project}/>
                    ))}
                </Grid>
            )}
        </Container>
  )
}

export default DashboardDefaultScreen
