import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PublicRoutes = ({children}) => {
  const {auth} = useSelector((state) => state)
  const {logged} = auth

  return logged ? <Navigate to="/dashboard" /> : children
}

export default PublicRoutes
