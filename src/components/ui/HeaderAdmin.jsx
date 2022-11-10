import {AppBar, Box, Container, IconButton, Toolbar, Tooltip, Typography} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu'

import {toggleProfileDrawer} from '../../app/uiSlice'

const HeaderAdmin = () => {
  const {user} = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const handleOpenDrawer = () => dispatch(toggleProfileDrawer())

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
              <IconButton color="inherit" size="large" onClick={handleOpenDrawer}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default HeaderAdmin
