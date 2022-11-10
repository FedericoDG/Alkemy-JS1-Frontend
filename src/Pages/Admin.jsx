import {Container, Typography} from '@mui/material'

import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner'
import userGetUsers from '../hooks/useUsers'
import UsersTable from '../components/admin/UsersTable'
import useGetCategory from '../hooks/useCategory'

const Admin = () => {
  const {data: users, isLoading} = userGetUsers()

  const {data: categories, isLoading: isLoadingCategories} = useGetCategory()

  if (isLoading || isLoadingCategories) return <LoadingSpinner />

  return (
    <Container maxWidth="xl" sx={{paddingY: 2, height: 'calc(100vh - 120px)'}}>
      <Typography color="GrayColor" variant="h4">
        Usuarios
      </Typography>
      <UsersTable users={users} />
    </Container>
  )
}

export default Admin
