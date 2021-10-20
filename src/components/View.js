import React, { useState } from 'react'
import { MDBCol, MDBContainer, MDBModal, MDBModalBody, MDBRow } from 'mdbreact'
import PropTypes from 'prop-types'
import {
  Button,
  makeStyles,
  Snackbar,
  TextField,
  Typography
} from '@material-ui/core'
import moment from 'moment'
import { addProjectAction } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'
import { Alert } from '@mui/material'
import { ADD_PROJECT_RESET } from '../store/constants'

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(3),
    textTransform: 'uppercase'
  },
  modal: {
    width: 'auto',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    height: 'fit-content'
  },
  row: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2)
  },
  cancelButton: {
    color: theme.palette.error.main,
    fontWeight: 'bolder',
    fontSize: 'smaller'
  },
  modalBody: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1),
    height: 'fit-content',
    fontSize: 'smaller'
  },
  buttonText: {
    fontWeight: 'bolder'
  }
}))

const View = ({ project, open, toggle }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [projectName, setProjectName] = useState(null)
  const [projectIdentifier, setProjectIdentifier] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState(moment().format('yyyy-MM-DD'))
  const [endDate, setEndDate] = useState(moment().add(7, 'days').format('yyyy-MM-DD'))
  const [update, setUpdate] = useState(false)
  const {
    loading,
    error,
    project: newPro
  } = useSelector(state => {
    return state.addProject
  })
  React.useEffect(() => {
    if (!projectName && project) {
      setProjectName(project.projectName)
      setProjectIdentifier(project.projectIdentifier)
      setDescription(project.description)
      setStartDate(project.startDate)
      setEndDate(project.endDate)
    }
  }, [loading, error, newPro])
  const handleChangeDetails = (e) => {
    e.preventDefault()
    const newProject = {
      ...project, projectName, description, startDate, endDate
    }
    dispatch(addProjectAction(newProject))
  }
  const handleResetValues = () => {
    dispatch({ type: ADD_PROJECT_RESET })
  }
  return (
        <MDBContainer>
            <MDBModal className={classes.modal} centered={true} isOpen={open}
                      toggle={toggle}>

                <MDBModalBody className={classes.modalBody}>

                    {loading && <Loading/>}
                    <Snackbar key={'top' + 'center'}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                              }}
                              open={Boolean(error)}
                              autoHideDuration={6000}
                              onClick={handleResetValues}
                              onClose={handleResetValues}>
                        <Alert severity={'error'} onClose={handleResetValues}
                               onClick={handleResetValues}>{error && error.message}</Alert>
                    </Snackbar>
                    <Snackbar key={'top' + 'center' + project.projectIdentifier}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center'
                              }}
                              open={Boolean(newPro)}
                              autoHideDuration={6000}
                              onClick={handleResetValues}
                              onClose={handleResetValues}>
                        <Alert severity={'success'} onClick={handleResetValues}
                               onClose={handleResetValues}>Project updated
                            successfully!</Alert>

                    </Snackbar>
                    {!loading && !error && <form onSubmit={handleChangeDetails}
                                                 onChange={() => setUpdate(true)}>
                        <>
                            <MDBRow>
                                <MDBCol className={classes.title}>
                                    <Typography color={'secondary'}>Project
                                        Details</Typography>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={classes.row}>
                                <MDBCol className={'text-center'}>
                                    <TextField color='secondary' required={true}
                                               label={'Project Name'}
                                               variant={'outlined'}
                                               size={'small'}
                                               value={projectName}
                                               onChange={e => setProjectName(e.target.value)}
                                               name={'projectName'}
                                               style={{ width: '400px' }}/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={classes.row}>
                                <MDBCol className={'text-center'}>
                                    <TextField color='secondary' required
                                               disabled size={'small'}
                                               variant={'outlined'}
                                               label={'Project Identifier'}
                                               value={projectIdentifier}
                                               name={'pid'}
                                               style={{ width: '400px' }}/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={classes.row}>
                                <MDBCol
                                    className={'text-center'}>
                                    <TextField color='secondary' required
                                               size={'small'}
                                               style={{ width: '400px' }}
                                               variant={'outlined'}
                                               label={'Project Description'}
                                               value={description}
                                               multiline
                                               minRows={5}
                                               name={'description'}
                                               onChange={e => setDescription(e.target.value)}/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className={classes.row}>
                                <MDBCol
                                    className={'my-2 text-center col-md-6 col-lg-6 col-sm-12 col-xs-12'}>
                                    <TextField color='secondary'
                                               type={'date'}
                                               label={'Start Date'}
                                               variant={'outlined'}
                                               size={'small'}
                                               value={startDate}
                                               onChange={e => setStartDate(e.target.value)}/>
                                </MDBCol>

                                <MDBCol
                                    className={'my-2 text-center col-md-6 col-lg-6 col-sm-12 col-xs-12'}>
                                    <TextField color='secondary'
                                               label={'End Date'}
                                               type={'date'}
                                               variant={'outlined'}
                                               size={'small'}
                                               value={endDate}
                                               error={moment(endDate).isBefore(moment(startDate))}
                                               helperText={moment(endDate).isBefore(moment(startDate)) && 'End date cannot be before start date'}
                                               onChange={e => setEndDate(e.target.value)}/>

                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol className={'text-right'}>
                                    <Button className={classes.cancelButton}
                                            onClick={() => toggle(false)}>Cancel</Button>
                                    <Button type={'submit'}
                                            className={classes.buttonText}
                                            color={'secondary'}
                                            disabled={!update}>Update</Button>
                                </MDBCol>
                            </MDBRow>
                        </>
                    </form>}
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>
  )
}

View.propTypes = {
  project: PropTypes.object,
  open: PropTypes.bool,
  toggle: PropTypes.func
}
export default View
