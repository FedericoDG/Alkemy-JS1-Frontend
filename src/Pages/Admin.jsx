import {Container, Typography, Box} from '@mui/material'

import CreateCategoryDialog from '../components/dialogs/CreateCategoryDialog'
import EditCategoryDialog from '../components/dialogs/EditCategoryDialog'
import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner'
import userGetUsers from '../hooks/useUsers'
import UsersTable from '../components/admin/UsersTable'

const Admin = () => {
  const {data: users, isLoading} = userGetUsers()

  if (isLoading) return <LoadingSpinner />

  return (
    <Container maxWidth="xl" sx={{paddingY: 2, height: 'calc(100vh - 120px)'}}>
      <Box
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1, mb: 1}}
      >
        <Typography color="GrayColor" variant="h4">
          Usuarios
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 1,
          }}
        >
          <CreateCategoryDialog />
          <EditCategoryDialog />
        </Box>
      </Box>
      <UsersTable users={users} />
    </Container>
  )
}

export default Admin
