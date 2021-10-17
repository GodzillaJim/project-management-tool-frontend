import { useRoutes } from 'react-router-dom'
import MainRoutes from './mainRoutes'

const CustomRoutes = () => {
  return useRoutes([MainRoutes])
}

export default CustomRoutes
