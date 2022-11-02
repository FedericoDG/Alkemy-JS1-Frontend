import {Navigate} from 'react-router-dom'

const PublicRoutes = ({children}) => {
  // TODO: Get token and user rol from Redux Strore.
  const auth = ''

  return auth ? <Navigate to="/dashboard" /> : children
}

export default PublicRoutes
