import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {setActiveUser, toggleResetPasswordModal} from '../../app/uiSlice'
import {useResetUserPassword} from '../../hooks/useUsers'

const ResetPasswordDialog = () => {
  const [password, setPassword] = useState('')

  const {resetPasswordModal, activeUserId} = useSelector((state) => state.ui)

  const dispatch = useDispatch()

  const {mutate: resetPassword} = useResetUserPassword()

  const handleClose = (boolean) => {
    dispatch(toggleResetPasswordModal())

    if (!boolean) return null

    resetPassword({id: activeUserId, password: {password}})
    dispatch(setActiveUser(null))

    return null
  }

  return (
    <Dialog open={resetPasswordModal} onClose={() => dispatch(toggleResetPasswordModal())}>
      <DialogTitle>Resetear Contraseña</DialogTitle>
      <DialogContent>
        <DialogContentText>Puesea asignarle una nueva contraseña a este usuario.</DialogContentText>
        <TextField
          autoFocus
          fullWidth
          label="Nueva contraseña"
          margin="dense"
          name="password"
          type="text"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)}>Cancelar</Button>
        <Button onClick={() => handleClose(true)}>Resetear</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ResetPasswordDialog
