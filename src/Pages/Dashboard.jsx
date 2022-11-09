import {Container, Stack, Typography, Grid, Button} from '@mui/material'

import CustomCard from '../components/ui/Card'
import ExpensesChart from '../components/charts/ExpensesChart'
import ExpensesTable from '../components/ui/ExpensesTable'
import useGetBalance from '../hooks/useBalance'
import MovementsDialog from '../components/Shared/MovementsDialog/MovementsDialog'

const Dashboard = () => {
  const {data, isLoading, isError, error} = useGetBalance()

  if (isLoading) return <h1>ESTO DEBERÍA SER UN SPINNER</h1>

  const {incomes, expenses, balance, transactions} = data

  return (
    <Container maxWidth="xl" sx={{marginY: 2}}>
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
      <MovementsDialog />
      {expenses.amount > 0 && (
        <div style={{marginTop: 16}}>
          <Grid container alignItems="flex-start" mx={1}>
            <Grid item lg={4} sm={6} xs={12}>
              <Stack>
                <Typography color="GrayColor" variant="button">
                  TOTAL DE GASTOS
                </Typography>
                <ExpensesChart obj={expenses.distribution} />
              </Stack>
            </Grid>
            <div style={{flex: 1}} />
            <Grid item lg={6} sm={6} xs={12}>
              <ExpensesTable distribution={expenses.distribution} />
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  )
}

export default Dashboard
