import React, { useEffect } from 'react'
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.error.main,
    justifyContent: 'center',
    alignContent: 'center'
  },
  content: {},
  root: {
    minWidth: 400
  },
  reloadButton: {
    color: theme.palette.error.main,
    fontWeight: 650,
    fontFamily: 'sans-serif',
    margin: theme.spacing(2)
  }
}))
const Reload = ({ error, reload }) => {
  const classes = useStyles()
  useEffect(() => {
    console.log(error.message)
  })
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Grid
          alignItems={'center'}
          container={true}
          justifyContent={'center'}
          alignContent={'center'}
          direction={'column'}
        >
          <Grid item>
            <Typography color={'inherit'} variant={'body2'}>
              {error.message}
            </Typography>
          </Grid>
          <Divider />
          <Grid item>
            <Button className={classes.reloadButton} onClick={reload}>
              Reload
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

Reload.propTypes = {
  error: PropTypes.object,
  reload: PropTypes.func
}
export default Reload
