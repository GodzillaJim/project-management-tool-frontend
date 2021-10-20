import React from 'react'
import MainLayout from '../layout/main/index.js'
import DashboardDefaultScreen from '../screens/DashboardDefaultScreen'
import ViewEdit from '../screens/ViewEdit'

const MainRoutes = {
  path: '/',
  element: <MainLayout/>,
  children: [
    { path: '', element: <DashboardDefaultScreen/> },
    { path: '/:pid', element: <ViewEdit/> }
  ]
}
export default MainRoutes
