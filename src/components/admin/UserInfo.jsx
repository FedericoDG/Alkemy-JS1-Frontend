import {
  Box,
  TableContainer,
  Grid,
  Table,
  TableRow,
  TableCell,
  Stack,
  Button,
  TableHead,
  TableBody,
  Paper,
} from '@mui/material'
import {useDispatch} from 'react-redux'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import LockResetIcon from '@mui/icons-material/LockReset'

import {useBlockUser, useDeleteUser, useUnblockUser} from '../../hooks/useUsers'
import {setActiveUser, toggleResetPasswordModal, togleAdminDrawer} from '../../app/uiSlice'
import avatar from '../../assets/avatar.svg'

const UserInfo = ({user}) => {
  const {mutate: blockUser} = useBlockUser()
  const {mutate: unblockUser} = useUnblockUser()
  const {mutate: deleteUser} = useDeleteUser()

  const dispatch = useDispatch()

  const handleBlock = (id) => {
    blockUser(id)
  }

  const hanbleUnblock = (id) => {
    unblockUser(id)
  }

  const handleDelete = (id) => {
    deleteUser(id)
    dispatch(setActiveUser(null))
    dispatch(togleAdminDrawer())
  }

  const handleOpenDialog = (id) => {
    dispatch(toggleResetPasswordModal())
    dispatch(setActiveUser(id))
  }

  return (
    <Stack>
      <Grid container>
        <Grid item>
          <Box
            alt="avatar"
            component="img"
            src={user.avatar ? user.avatar : avatar}
            sx={{
              height: 200,
              width: 200,
              margin: '0 auto',
              borderRadius: 50,
            }}
          />
        </Grid>
        <Grid item sx={{marginLeft: 7}}>
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell variant="head">ID</TableCell>
                  <TableCell variant="head">Apellido</TableCell>
                  <TableCell variant="head">Nombre</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell variant="head">{user.id}</TableCell>
                  <TableCell variant="head">{user.lastName}</TableCell>
                  <TableCell variant="head">{user.firstName}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" width={474}>
        <Grid item sx={{padding: 1}} xs={6}>
          <Button
            fullWidth
            color="warning"
            disabled={user.status === 'blocked'}
            size="small"
            startIcon={<LockPersonIcon />}
            variant="contained"
            onClick={() => handleBlock(user.id)}
          >
            bloquear
          </Button>
        </Grid>
        <Grid item sx={{padding: 1}} xs={6}>
          <Button
            fullWidth
            color="success"
            disabled={user.status === 'active'}
            size="small"
            startIcon={<LockOpenIcon />}
            variant="contained"
            onClick={() => hanbleUnblock(user.id)}
          >
            desbloquear
          </Button>
        </Grid>
        <Grid item sx={{padding: 1}} xs={6}>
          <Button
            fullWidth
            color="secondary"
            size="small"
            startIcon={<LockResetIcon />}
            variant="contained"
            onClick={() => handleOpenDialog(user.id)}
          >
            reset password
          </Button>
        </Grid>
        <Grid item sx={{padding: 1}} xs={6}>
          <Button
            fullWidth
            color="error"
            size="small"
            startIcon={<DeleteForeverIcon />}
            variant="contained"
            onClick={() => handleDelete(user.id)}
          >
            eliminar
          </Button>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default UserInfo
