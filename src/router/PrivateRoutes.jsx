import {Navigate} from 'react-router-dom'

const PrivateRoutes = ({children}) => {
  // TODO: Get token and user rol from Redux Strore.
  const auth = ''

  // eslint-disable-next-line no-nested-ternary
  return auth ? auth === 'ADMIN' ? <Navigate to="/admin" /> : children : <Navigate to="/" />
}

export default PrivateRoutes
