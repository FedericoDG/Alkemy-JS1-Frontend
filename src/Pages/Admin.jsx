import {Container, Typography, Box} from '@mui/material'

import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner'
import userGetUsers from '../hooks/useUsers'
import UsersTable from '../components/admin/UsersTable'
import useGetCategory from '../hooks/useCategory'
import CreateCategoryDialog from '../components/Dialogs/CreateCategoryDialog'
import EditCategoryDialog from '../components/Dialogs/EditCategoryDialog'

const Admin = () => {
  const {data: users, isLoading} = userGetUsers()

  const {data: categories, isLoading: isLoadingCategories} = useGetCategory()

  if (isLoading || isLoadingCategories) return <LoadingSpinner />

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
