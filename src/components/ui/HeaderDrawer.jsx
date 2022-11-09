import {Box, Button, Drawer} from '@mui/material'
import {useDispatch} from 'react-redux'

import {authLogout} from '../../app/authSlice'

const HeaderDrawer = ({drawerState, toggleDrawer}) => {
  const handleLogout = () => useDispatch(authLogout())

  return (
    <Drawer anchor="right" open={drawerState} onClose={toggleDrawer(false)}>
      <Box m={2} role="presentation">
        Editar perfil desde acá? Hacer transferencias? Hacer Pagos? Todo?
        <Button type="button" onClick={() => handleLogout()}>
          Salir
        </Button>
      </Box>
    </Drawer>
  )
}

export default HeaderDrawer
