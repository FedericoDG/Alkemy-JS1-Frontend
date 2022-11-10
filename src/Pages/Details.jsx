import {Container, Grid, Button, Stack, Typography} from '@mui/material'
import {Link, useParams} from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

import {useGetUserDetails} from '../hooks/useUsers'
import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner'
import TransactionsTable from '../components/ui/TransactionsTable'
import UserBalance from '../components/admin/UserBalance'
import UserInfo from '../components/admin/UserInfo'
import UserMoreInfo from '../components/admin/UserMoreInfo'

const Details = () => {
  const {id} = useParams()

  const {data: userDetails, isLoading} = useGetUserDetails(id)

  if (isLoading) return <LoadingSpinner />

  const {user, expenses, incomes, balance, transactions} = userDetails

  return (
    <Container maxWidth="xl">
      <Link to="/admin">
        <Button color="primary" startIcon={<KeyboardBackspaceIcon />} sx={{m: 2}} variant="text">
          Volver
        </Button>
      </Link>
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          <UserInfo user={user} />
        </Grid>
        <Grid item xs={5}>
          <Grid container gap={1}>
            <Grid item xs={12}>
              <UserBalance
                balance={balance}
                expenses={expenses}
                incomes={incomes}
                transactions={transactions}
              />
            </Grid>
            <div style={{height: 1}} />
            <Grid item xs={12}>
              <UserMoreInfo user={user} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item py={1} xs={12}>
          <Stack>
            <Typography color="initial" variant="h6">
              Transacciones
            </Typography>
            <TransactionsTable height={500} rows={20} transactions={transactions.details} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Details
