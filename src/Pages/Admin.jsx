import {Container} from '@mui/material'

import userGetUsers from '../hooks/useUsers'
import UsersTable from '../components/admin/UsersTable'

const Admin = () => {
  const {data: users, isLoading} = userGetUsers()

  if (isLoading) return <h1>ESTO DEBERÍA SER UN SPINNER</h1>

  return (
    <Container maxWidth="xl" sx={{marginY: 2}}>
      <UsersTable users={users} />
    </Container>
  )
}

export default Admin
