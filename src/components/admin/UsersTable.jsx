import {DataGrid, esES} from '@mui/x-data-grid'
import {IconButton, Tooltip} from '@mui/material'
import {useDispatch} from 'react-redux'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LockResetIcon from '@mui/icons-material/LockReset'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import styled from '@emotion/styled'

import {setActiveUser, toggleResetPasswordModal, togleAdminDrawer} from '../../app/uiSlice'
import {useBlockUser, useUnblockUser} from '../../hooks/useUsers'

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

  const handleShowAdminDrawer = (id) => {
    dispatch(togleAdminDrawer())
    dispatch(setActiveUser(id))
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
    {field: 'lastName', headerName: 'Apellido', width: 200},
    {field: 'firstName', headerName: 'Nombre', width: 200},
    {
      flex: 1,
      field: 'email',
      headerName: 'Email',
      width: 250,
    },
    {
      flex: 1,
      field: 'address',
      headerName: 'Dirección',
      description: 'This column has a value getter and is not sortable.',
      width: 250,
    },
    {
      field: 'balance',
      headerName: 'Balance',
      description: 'This column has a value getter and is not sortable.',
      width: 150,
      type: 'number',
    },
    {
      field: 'action',
      headerName: 'Acciones Rápidas',
      align: 'center',
      headerAlign: 'center',
      width: 200,
      sortable: false,
      renderCell: (obj) => (
        <>
          <Tooltip title="Bloquear usuario">
            <span>
              <IconButton
                color="warning"
                disabled={obj.row.status === 'blocked'}
                onClick={() => handleBlock(obj.row.id)}
              >
                <CancelIcon />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Desbloquear usuario">
            <span>
              <IconButton
                color="success"
                disabled={obj.row.status !== 'blocked'}
                onClick={() => hanbleUnblock(obj.row.id)}
              >
                <CheckCircleIcon />
              </IconButton>
            </span>
          </Tooltip>
          <Tooltip title="Resetear contraseña">
            <span>
              <IconButton color="secondary" onClick={() => handleOpenDialog(obj.row.id)}>
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
      renderCell: (obj) => (
        <Tooltip title="Ver detalles del usuario">
          <IconButton color="info" onClick={() => handleShowAdminDrawer(obj.row.id)}>
            <PersonSearchIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      ),
    },
  ]

  return (
    <div style={{height: 525, width: '100%'}}>
      <StyledDataGrid
        disableSelectionOnClick
        columns={columns}
        getRowHeight={() => 41}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        pageSize={10}
        rows={users}
        rowsPerPageOptions={[10]}
      />
    </div>
  )
}

export default UsersTable
