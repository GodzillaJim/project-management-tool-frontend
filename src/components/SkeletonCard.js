import React from 'react'
import { Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import { Skeleton } from '@mui/material'

const useStyles = makeStyles({
  cardHeading: {
    marginRight: '8px',
    marginTop: '18px',
    marginBottom: '14px'
  }
})
const SkeletonCard = () => {
  const classes = useStyles()
  return (
    <Card>
      <CardContent>
        <Grid container direction={'column'}>
          <Grid item>
            <Grid container justifyContent={'space-between'}>
              <Grid item>
                <Skeleton variant={'rectangular'} width={44} height={44} />
              </Grid>
              <Grid item>
                <Skeleton variant={'rectangular'} width={34} height={34} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Skeleton
              variant={'rectangular'}
              className={classes.cardHeading}
              height={40}
            />
          </Grid>
          <Grid item>
            <Skeleton variant={'rectangular'} height={30} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default SkeletonCard
