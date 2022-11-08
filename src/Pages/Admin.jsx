import {Container, Typography} from '@mui/material'

import AdminDrawer from '../components/admin/AdminDrawer'
import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner'
import ResetPasswordDialog from '../components/admin/ResetPasswordDialog'
import userGetUsers from '../hooks/useUsers'
import UsersTable from '../components/admin/UsersTable'

const Admin = () => {
  const {data: users, isLoading} = userGetUsers()

  if (isLoading) return <LoadingSpinner />

  return (
    <>
      <Container maxWidth="xl" sx={{paddingY: 2, height: 'calc(100vh - 208px)'}}>
        <Typography color="GrayColor" variant="h4">
          Usuarios
        </Typography>
        <UsersTable users={users} />
      </Container>
      <AdminDrawer />
      <ResetPasswordDialog />
    </>
  )
}

export default Admin
