import {Container, Stack, Typography, Grid} from '@mui/material'

import {useGetMe} from '../hooks/useUsers'
import CustomCard from '../components/ui/Card'
import Dialogs from '../components/dialogs/Dialogs'
import ExpensesChart from '../components/charts/ExpensesChart'
import ExpensesTable from '../components/ui/ExpensesTable'
import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner'
import ProfileDrawer from '../components/drawers/UserDrawer/UserDrawar'
import TransactionsTable from '../components/ui/TransactionsTable'
import useGetBalance from '../hooks/useBalance'

const Dashboard = () => {
  const {data: me, isLoading: isLoadingMe} = useGetMe()

  const {data, isLoading} = useGetBalance()

  if (isLoading || isLoadingMe) return <LoadingSpinner />

  if (me.status === 'blocked') return <h1>CUENTA BLOQUEADA</h1>

  const {incomes, expenses, balance, transactions} = data

  return (
    <>
      <Container maxWidth="xl" sx={{paddingY: 2}}>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={1}
          wrap="wrap"
        >
          <CustomCard amount={incomes.total} text="Ingresos" />
          <CustomCard amount={expenses.total} text="Gastos" />
          <CustomCard amount={balance} text="Balance" />
          <CustomCard amount={transactions.amount} text="Transacciones" />
        </Grid>
        <Dialogs />
        {expenses.amount > 0 && (
          <>
            <Typography color="GrayColor" variant="h4">
              Gastos
            </Typography>
            <Grid container alignItems="flex-start" mt={2}>
              <Grid item lg={4} sm={6} xs={12}>
                <Stack>
                  <ExpensesChart obj={expenses.distribution} />
                </Stack>
              </Grid>
              <div style={{flex: 1}} />
              <Grid item lg={6} sm={6} xs={12}>
                <ExpensesTable distribution={expenses.distribution} />
              </Grid>
            </Grid>
          </>
        )}
        <Stack mt={4}>
          <Typography color="GrayColor" variant="h4">
            Transacciones
          </Typography>
          <TransactionsTable transactions={transactions.details} />
        </Stack>
      </Container>
      <ProfileDrawer />
    </>
  )
}

export default Dashboard
