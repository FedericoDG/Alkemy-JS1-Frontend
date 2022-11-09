import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoutes = ({children}) => {
  const {auth} = useSelector((state) => state)
  const role = auth.user?.roleId

  // eslint-disable-next-line no-nested-ternary
  return role ? role === 1 ? <Navigate to="/admin" /> : children : <Navigate to="/" />
}

export default PrivateRoutes
