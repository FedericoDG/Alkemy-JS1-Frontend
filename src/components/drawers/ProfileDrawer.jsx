import {Box, Drawer, Button} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'

import {authLogout} from '../../app/authSlice'
import {toggleProfileDrawer} from '../../app/uiSlice'

const ProfileDrawer = () => {
  const {profileDrawer} = useSelector((state) => state.ui)
  const {user} = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(toggleProfileDrawer())
    dispatch(authLogout())
  }

  const toggleDrawer = () => dispatch(toggleProfileDrawer())

  return (
    <Drawer anchor="right" open={profileDrawer} onClose={toggleDrawer}>
      <Box m={2} role="presentation" sx={{width: 360}}>
        <Button color="primary" variant="text" onClick={handleLogout}>
          salir
        </Button>
        <pre>{JSON.stringify(user, 0, 2)}</pre>
      </Box>
    </Drawer>
  )
}

export default ProfileDrawer
