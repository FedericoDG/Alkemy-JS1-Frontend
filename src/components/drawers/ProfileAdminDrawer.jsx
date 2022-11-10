import {Box, Drawer, Button} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'

import {authLogout} from '../../app/authSlice'
import {toggleProfileDrawer} from '../../app/uiSlice'

const ProfileAdminDrawer = () => {
  const {profileDrawer} = useSelector((state) => state.ui)

  const dispatch = useDispatch()

  const handleLogout = () => dispatch(authLogout())

  const toggleDrawer = () => dispatch(toggleProfileDrawer())

  return (
    <Drawer anchor="right" open={profileDrawer} onClose={toggleDrawer}>
      <Box m={2} role="presentation" sx={{width: 360}}>
        <p>PARA SER USADO POR EL ADMIN</p>
        <Button color="primary" variant="text" onClick={handleLogout}>
          salir
        </Button>
      </Box>
    </Drawer>
  )
}

export default ProfileAdminDrawer
