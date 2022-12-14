import {Drawer, Button, Grid} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import LogoutIcon from '@mui/icons-material/Logout'

import {authLogout} from '../../app/authSlice'
import {toggleProfileDrawer} from '../../app/uiSlice'

const AdminDrawer = () => {
  const {profileDrawer} = useSelector((state) => state.ui)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(toggleProfileDrawer())
    dispatch(authLogout())
  }

  const toggleDrawer = () => dispatch(toggleProfileDrawer())

  return (
    <Drawer anchor="right" open={profileDrawer} onClose={toggleDrawer}>
      <Grid container flexDirection="column" justifyContent="space-between" sx={{height: '100vh'}}>
        <Grid item>
          <div style={{flex: 1}} />
          <Button
            color="primary"
            size="large"
            startIcon={<LogoutIcon />}
            sx={{margin: 1}}
            variant="text"
            onClick={handleLogout}
          >
            salir
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default AdminDrawer
