import {Container, Typography, Grid} from '@mui/material'

import useGetBalance from '../hooks/useBalance'
import ExpensesChart from '../components/charts/ExpensesChart'
import CustomCard from '../components/ui/Card'
import ExpensesTable from '../components/ui/ExpensesTable'

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
      {expenses.amount > 0 && (
        <div style={{marginTop: 16}}>
          <Typography color="GrayColor" variant="button">
            TOTAL DE GASTOS
          </Typography>
          <Grid container alignItems="center" mx={1}>
            <Grid item lg={4} md={5} xs={12}>
              <ExpensesChart obj={expenses.distribution} />
            </Grid>
            <div style={{flex: 1}} />
            <Grid item lg={6} md={7} xs={12}>
              <ExpensesTable distribution={expenses.distribution} />
            </Grid>
          </Grid>
        </div>
      )}
    </Container>
  )
}

export default Dashboard
