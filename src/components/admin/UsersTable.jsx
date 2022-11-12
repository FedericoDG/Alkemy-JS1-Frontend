import {Chip, IconButton, Paper, Tooltip, Typography} from '@mui/material'
import {DataGrid, esES} from '@mui/x-data-grid'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import LockResetIcon from '@mui/icons-material/LockReset'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import styled from '@emotion/styled'

import {setActiveUser, toggleResetPasswordModal} from '../../app/uiSlice'
import {useBlockUser, useUnblockUser} from '../../hooks/useUsers'
import transformCurrency from '../../utils/transformCurrency'

const StyledDataGrid = styled(DataGrid)`
  &.MuiDataGrid-root .MuiDataGrid-columnHeader,
  &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  &.MuiDataGrid-root .MuiDataGrid-cell,
  &.MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none;
  }
`

const UsersTable = ({users}) => {
  const dispatch = useDispatch()

  const {mutate: blockUser} = useBlockUser()
  const {mutate: unblockUser} = useUnblockUser()

  const navigate = useNavigate()

  const handleShowAdminDrawer = (id) => {
    navigate(`/admin/user/${id}`)
  }

  const handleOpenDialog = (id) => {
    dispatch(toggleResetPasswordModal())
    dispatch(setActiveUser(id))
  }

  const handleBlock = (id) => {
    blockUser(id)
  }

  const hanbleUnblock = (id) => {
    unblockUser(id)
  }

  const columns = [
    {field: 'id', headerName: 'ID', width: 50},
    {field: 'lastName', headerName: 'Apellido', width: 150},
    {field: 'firstName', headerName: 'Nombre', width: 150},
    {
      flex: 1,
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      flex: 1,
      field: 'address',
      headerName: 'Dirección',
      width: 350,
    },
    {
      field: 'balance',
      headerName: 'Balance',
      width: 120,
      type: 'number',
      renderCell: ({row}) => (
        <Typography variant="body2">{transformCurrency(row.balance)}</Typography>
      ),
    },
    {
      field: 'status',
      headerName: 'Estado',
      width: 100,
      align: 'center',
      headerAlign: 'center',
      renderCell: ({row}) => (
        <div>
          {row.status === 'blocked' ? (
            <Chip color="error" label="bloqueado" size="small" />
          ) : (
            <Chip color="default" label="activo" size="small" />
          )}
        </div>
      ),
    },
    {
      field: 'action',
      headerName: 'Acciones Rápidas',
      align: 'center',
      headerAlign: 'center',
      width: 150,
      sortable: false,
      renderCell: ({row}) => (
        <>
          <Tooltip title="Bloquear usuario">
            <span>
              <IconButton
                color="warning"
                disabled={row.status === 'blocked'}
                onClick={() => handleBlock(row.id)}
              >
                <LockPersonIcon />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Desbloquear usuario">
            <span>
              <IconButton
                color="success"
                disabled={row.status !== 'blocked'}
                onClick={() => hanbleUnblock(row.id)}
              >
                <LockOpenIcon />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Resetear contraseña">
            <span>
              <IconButton color="secondary" onClick={() => handleOpenDialog(row.id)}>
                <LockResetIcon />
              </IconButton>
            </span>
          </Tooltip>
        </>
      ),
    },
    {
      field: 'details',
      headerName: 'Detalles',
      align: 'center',
      headerAlign: 'center',
      width: 100,
      sortable: false,
      renderCell: ({row}) => (
        <Tooltip title="Ver detalles del usuario">
          <IconButton color="info" onClick={() => handleShowAdminDrawer(row.id)}>
            <PersonSearchIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      ),
    },
  ]

  return (
    <Paper style={{height: 570, width: '100%'}}>
      <StyledDataGrid
        disableSelectionOnClick
        columns={columns}
        getRowHeight={() => 45}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        pageSize={10}
        rows={users}
        rowsPerPageOptions={[10]}
      />
    </Paper>
  )
}

export default UsersTable
