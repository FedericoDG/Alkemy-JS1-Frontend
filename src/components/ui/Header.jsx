import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu'

import {authLogout} from '../../app/authSlice'

const ResponsiveAppBar = () => {
  const [drawerState, setDrawerState] = useState(false)
  const {user} = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const handleLogout = () => dispatch(authLogout())

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    if (!open) {
      console.log()
    }

    setDrawerState(open)
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            variant="h6"
          >
            ALKYBANK
          </Typography>
          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            variant="h5"
          >
            ALKYBANK
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} />

          <Box sx={{flexGrow: 0, alignItems: 'center'}}>
            <Typography color="inherit" variant="button">
              {user.firstName} {user.lastName}
            </Typography>
            <Tooltip title="Abrir configuración">
              <IconButton color="inherit" size="large" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <Drawer anchor="bottom" open={drawerState} onClose={toggleDrawer(false)}>
        <Box m={2} role="presentation" sx={{height: 500}}>
          Editar perfil desde acá? Hacer transferencias? Hacer Pagos? Todo?
          <Button type="button" onClick={() => handleLogout()}>
            Salir
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default ResponsiveAppBar
