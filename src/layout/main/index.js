import Header from './Header.js'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { CssBaseline, makeStyles } from '@material-ui/core'
import SideBar from './SideBar'

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    backgroundColor: theme.palette.background.default
  },
  appBarWidth: {
    transition: theme.transitions.create('width'),
    backgroundColor: theme.palette.background.default
  },
  content: {
    ...theme.typography.mainContent,
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: '20px',
      padding: '8px'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: '10px'
    }
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px'
    }
  }
}))

const MainLayout = () => {
  const classes = useStyles()
  const [drawer, openDrawer] = React.useState(true)
  const toggleDrawer = () => {
    openDrawer(!drawer)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header toggleDashboard={toggleDrawer} />
      <SideBar open={drawer} />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
