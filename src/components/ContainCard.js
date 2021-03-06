import React from 'react'
import MainCard from './MainCard'
import {
  Avatar,
  Grid,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Snackbar,
  Typography
} from '@material-ui/core'

import EarningIcon from '../assets/images/icons/earning.svg'
import {
  CalendarToday,
  Delete,
  Details,
  Edit,
  MoreHoriz
} from '@material-ui/icons'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useLocation, useNavigate } from 'react-router-dom'
import View from './View'
import { deleteProjectAction } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'
import { Alert } from '@mui/material'
import { DELETE_PROJECT_RESET } from '../store/constants'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '210px',
      height: '210px',
      background: theme.palette.secondary[800],
      borderRadius: '50%',
      top: '-85px',
      right: '-95px',
      [theme.breakpoints.down('xs')]: {
        top: '-105px',
        right: '-140px'
      }
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '210px',
      height: '210px',
      background: theme.palette.secondary[800],
      borderRadius: '50%',
      top: '-125px',
      right: '-15px',
      opacity: 0.5,
      [theme.breakpoints.down('xs')]: {
        top: '-155px',
        right: '-70px'
      }
    }
  },
  content: {
    padding: '20px !important'
  },
  avatar: {
    ...theme.typography.commonAvatar,
    ...theme.typography.largeAvatar,
    backgroundColor: theme.palette.secondary[800],
    marginTop: '8px'
  },
  avatarRight: {
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary[200],
    zIndex: 1
  },
  cardHeading: {
    fontSize: '2.125rem',
    fontWeight: 500,
    marginRight: '8px',
    marginTop: '14px',
    marginBottom: '6px'
  },
  subHeading: {
    fontSize: '1rem',
    fontWeight: 500,
    color: theme.palette.secondary[200],
    fontFamily: 'sans-serif',
    textTransform: 'capitalize'
  },
  avatarCircle: {
    cursor: 'pointer',
    ...theme.typography.smallAvatar,
    backgroundColor: theme.palette.secondary[200],
    color: theme.palette.secondary.dark
  },
  circleIcon: {
    transform: 'rotate3d(1, 1, 1, 45deg)'
  },
  menuItem: {
    marginRight: '14px',
    fontSize: '1.25rem'
  },
  Time: {
    color: theme.palette.primary.light,
    margin: theme.spacing(2)
  },
  menuText: {
    fontSize: '0.6rem',
    color: theme.palette.secondary.dark
  },
  menu: {}
}))
const ContainCard = ({ project }) => {
  const classes = useStyles()
  useNavigate()
  useLocation()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [deadline, setDeadline] = React.useState(null)
  const [view, setView] = React.useState(false)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = (e) => {
    e.preventDefault()
    setAnchorEl(null)
    setView(!view)
  }
  const { loading, error, success } = useSelector(state => state.deleteProject)
  React.useEffect(() => {
    if (!deadline) {
      let days = moment(project.endDate).diff(moment(), 'day')
      setDeadline(days)
      if (parseInt(days) < 1) {
        days = days * 24
        setDeadline(days + ' Hours remaining')
      } else {
        setDeadline(days + ' Days remaining')
      }
    }
  }, [project, deadline, error, success, loading])
  const handleDeleteProject = () => {
    dispatch(deleteProjectAction(project.projectIdentifier))
  }
  const handleResetValues = () => {
    dispatch({ type: DELETE_PROJECT_RESET })
  }
  return (
        <MainCard
            border={false}
            className={classes.card}
            contentClass={classes.content}
        >
            <Snackbar key={'top' + 'center'}
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      open={Boolean(error)}
                      autoHideDuration={6000} onClick={handleResetValues}
                      onClose={handleResetValues}>
                <Alert severity={'error'} onClose={handleResetValues}
                       onClick={handleResetValues}>{error && error.message}</Alert>
            </Snackbar>
            <Snackbar key={'top' + 'center' + project.projectIdentifier}
                      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                      open={Boolean(success)}
                      autoHideDuration={6000} onClick={handleResetValues}
                      onClose={handleResetValues}>
                <Alert severity={'success'} onClick={handleResetValues}
                       onClose={handleResetValues}>Project deleted
                    successfully!</Alert>

            </Snackbar>
            <View project={project} open={view} toggle={setView}/>
            {loading && <Loading/>}
            {!loading && <Grid container direction={'column'}>
                <Grid item>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item>
                            <Avatar variant={'rounded'}
                                    className={classes.avatar}>
                                <img src={EarningIcon} alt={'Earning Icon'}/>
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Avatar
                                variant={'rounded'}
                                className={classes.avatarRight}
                                aria-controls={'menu-earning-card'}
                                aria-haspopup={'true'}
                                onClick={handleClick}
                            >
                                <MoreHoriz fontSize={'inherit'}/>
                            </Avatar>
                            <Menu
                                open={Boolean(anchorEl)}
                                className={classes.menu}
                                id={'menu-earning-card'}
                                anchorEl={anchorEl}
                                keepMounted
                                onClose={handleClose}
                                variant={'selectedMenu'}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'right'
                                }}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right'
                                }}
                            >
                                <MenuItem name={'view'}
                                          onClick={handleClose}
                                          className={classes.menuText}>
                                    <Details
                                        color={'secondary'}
                                        fontSize={'inherit'}
                                        className={classes.menuItem}
                                    />
                                    View Details
                                </MenuItem>
                                <MenuItem onClick={handleClose} name={'edit'}>
                                    <Edit
                                        color={'secondary'}
                                        fontSize={'inherit'}
                                        className={classes.menuItem}
                                    />
                                    <Typography className={classes.menuText}>
                                        Edit Details
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleClose} name={'extend'}
                                          className={classes.menuText}>
                                    <CalendarToday
                                        color={'secondary'}
                                        fontSize={'inherit'}
                                        className={classes.menuItem}
                                    />
                                    Extend Deadline
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignContent={'center'}>
                        <Grid item>
                            <Typography variant={'h3'} className={classes.Time}>
                                {deadline}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{ mb: 1.25 }}>
                    <Grid container justifyContent={'space-between'}
                          direction={'row'}>
                        <Grid item><Typography
                            className={classes.subHeading}>{project.projectName}</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={handleDeleteProject}>
                                <Delete className={'text-light'}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>}
        </MainCard>
  )
}

ContainCard.propTypes = {
  project: PropTypes.object
}
export default ContainCard
