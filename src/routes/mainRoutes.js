import React from 'react'
import MainLayout from '../layout/main/index.js'
import DashboardDefaultScreen from "../screens/DashboardDefaultScreen";

const MainRoutes = {
    path:'/',
    element: <MainLayout/>,
    children: [
        {
            path:'',
            element: <DashboardDefaultScreen/>
        }
    ]

}
export default MainRoutes