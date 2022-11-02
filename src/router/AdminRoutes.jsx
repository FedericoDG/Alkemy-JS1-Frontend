import {Navigate} from 'react-router-dom'

const AdminRoutes = ({children}) => {
  // TODO: Get token and user rol from Redux Strore.
  const auth = ''

  return auth === 'ADMIN' ? children : <Navigate to="/dashboard" />
}

export default AdminRoutes
