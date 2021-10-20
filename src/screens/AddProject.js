import React, { useState } from 'react'
import { MDBModal, MDBModalBody } from 'mdbreact'
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import moment from 'moment'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { addProjectAction } from '../store/actions'
import Loading from '../components/Loading'

const useStyles = makeStyles(theme => ({
  modalRoot: {},
  textField: {
    marginBottom: theme.spacing(3),
    minWidth: 300
  },
  title: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    fontWeight: 'bolder'
  },
  closeButton: {
    color: theme.palette.error.main,
    fontWeight: 'bolder'
  },
  addButton: {
    fontWeight: 'bolder'
  },
  clearButton: {
    fontWeight: 'bolder'
  },
  error: {
    color: theme.palette.error.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  success: {
    color: theme.palette.success.main,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
}))
const AddProject = ({ open, handleClose }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [projectName, setProjectName] = useState('')
  const [startDate, setStartDate] = useState(moment().format('yyyy-MM-DD'))
  const [endDate, setEndDate] = useState(moment().add(7, 'days').format('yyy-MM-DD'))
  const [projectIdentifier, setProjectIdentifier] = useState('')
  const [description, setDescription] = useState('')
  const { loading, error, project } = useSelector(state => state.addProject)
  const handleAddProject = (e) => {
    e.preventDefault()
    const newProject = {
      projectName, projectIdentifier, description, startDate, endDate
    }
    dispatch(addProjectAction(newProject))
  }
  React.useEffect(() => {
    console.log(error)
  }, [loading, error])
  const reset = () => {
    setProjectName('')
    setProjectIdentifier('')
    setDescription('')
    setStartDate(moment().format('yyyy-MM-DD'))
    setEndDate(moment().add(7, 'days').format('yyy-MM-DD'))
  }
  return (
        <MDBModal className={classes.modalRoot} size={'md'}
                  isOpen={open} toggle={handleClose} centered>
            <MDBModalBody>
                {project && <Grid container>
                    <Grid item>
                        <Typography className={classes.success}
                                    variant={'h5'}>Project Added
                            Successfully!</Typography>

                    </Grid>
                </Grid>}
                {error &&
                <Grid container>
                    <Grid item>
                        <Typography className={classes.error}
                                    variant={'h5'}>{error.message}</Typography>

                    </Grid>
                </Grid>}
                {loading && <Loading/>}
                {!loading &&
                <Grid container={true} spacing={3} direction={'row'}>
                    <Grid
                        item={true}>
                        <Typography variant={'h5'} className={classes.title}>Create
                            Project</Typography>
                    </Grid>
                    <Grid item={true}>
                        <form onSubmit={handleAddProject}>
                            <Grid item={true} className={'form-group'}>
                                <TextField value={projectName} required
                                           className={classes.textField}
                                           onChange={e => setProjectName(e.target.value)}
                                           size={'small'}
                                           color={'primary'}
                                           variant={'outlined'}
                                           label={'Project Name'}/>
                            </Grid>
                            <Grid item={true}>
                                <TextField label={'Project ID'}
                                           required
                                           variant={'outlined'}
                                           size={'small'}
                                           color={'primary'}
                                           value={projectIdentifier}
                                           onChange={e => setProjectIdentifier(e.target.value)}
                                           className={classes.textField}
                                           helperText={'Use 4 or 5 characters'}/>
                            </Grid>
                            <Grid item={true}>
                                <TextField color={'primary'} required
                                           multiline={true}
                                           minRows={6}
                                           className={classes.textField}
                                           label={'Description'}
                                           size={'small'}
                                           value={description}
                                           onChange={e => setDescription(e.target.value)}
                                           variant={'outlined'}/>
                            </Grid>
                            <Grid item={true}>
                                <TextField type={'date'} value={startDate}
                                           onChange={e => setStartDate(e.target.value)}
                                           label={'Start Date'}
                                           className={classes.textField}
                                           variant={'outlined'} size={'small'}/>
                            </Grid>
                            <Grid item={true}>
                                <TextField type={'date'}
                                           size={'small'}
                                           variant={'outlined'}
                                           className={classes.textField}
                                           label={'Completion Date'}
                                           value={endDate}
                                           onChange={e => setEndDate(e.target.value)}/>
                            </Grid>
                            <Grid className={'text-right'}
                                  item>
                                <Button
                                    onClick={reset}
                                    className={classes.clearButton}>Clear</Button>
                                <Button
                                    className={classes.closeButton}
                                    onClick={() => handleClose()}>Cancel</Button>
                                <Button className={classes.addButton}
                                        color={'primary'}
                                        type={'submit'}>Add</Button>

                            </Grid>
                        </form>
                    </Grid>
                </Grid>}
            </MDBModalBody>
        </MDBModal>
  )
}

AddProject.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
}
export default AddProject
