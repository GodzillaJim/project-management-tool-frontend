import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core'

const Loading = () => {
  return (
        <Grid container={true} justifyContent={'center'} alignContent={'center'}
              alignItems={'center'}>
            <Grid item={true}
            >
                <CircularProgress color={'secondary'}/>
            </Grid>
        </Grid>
  )
}

export default Loading
