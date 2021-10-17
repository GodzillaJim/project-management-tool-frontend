import React from 'react'
import { Alarm, Home } from '@material-ui/icons'
import { List, makeStyles } from '@material-ui/core'
import NavItem from './NavItem'

const items = [
  {
    id: '1',
    Icon: Home,
    title: 'Home',
    caption: 'Dashboard',
    chip: { label: '5+', avatar: Alarm },
    href: '/',
    level: '1'
  }
]
const useStyles = makeStyles((theme) => ({
  sideBarMenu: {
    paddingLeft: '5px',
    paddingRight: '5px',
    top: theme.spacing(3)
  }
}))
const Menu = () => {
  const classes = useStyles()
  return (
    <List className={classes.sideBarMenu} title={'Dashboard'}>
      {items.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
    </List>
  )
}

export default Menu
