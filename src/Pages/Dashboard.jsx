import {Container, Stack, Typography, Grid, Button} from '@mui/material'
import AddCardIcon from '@mui/icons-material/AddCard'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'

import {useGetMe} from '../hooks/useUsers'
import CustomCard from '../components/ui/Card'
import ExpensesChart from '../components/charts/ExpensesChart'
import ExpensesTable from '../components/ui/ExpensesTable'
import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner'
import TransactionsTable from '../components/ui/TransactionsTable'
import useGetBalance from '../hooks/useBalance'

const Dashboard = () => {
  const {data: me, isLoading: isLoadingMe} = useGetMe()

  const {data, isLoading} = useGetBalance()

  if (isLoading || isLoadingMe) return <LoadingSpinner />

  if (me.status === 'blocked') return <h1>CUENTA BLOQUEADA</h1>

  const {incomes, expenses, balance, transactions} = data

  return (
    <Container maxWidth="xl" sx={{paddingY: 2, height: 'calc(100vh - 208px)'}}>
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
      <Grid
        container
        alignContent="stretch"
        direction="row"
        gap={1}
        justifyContent="flex-end"
        mt={2}
        my={1}
        wrap="wrap"
      >
        <Button color="info" size="small" startIcon={<AddCardIcon />} variant="contained">
          CARGAR SALDO
        </Button>
        <Button
          color="secondary"
          size="small"
          startIcon={<CurrencyExchangeIcon />}
          variant="contained"
        >
          TRANSFERIR
        </Button>
        <Button color="error" size="small" startIcon={<RequestQuoteIcon />} variant="contained">
          CARGAR GASTO
        </Button>
      </Grid>
      {expenses.amount > 0 && (
        <Grid container alignItems="flex-start" mt={2}>
          <Grid item lg={4} sm={6} xs={12}>
            <Stack>
              <Typography color="GrayColor" variant="h4">
                Gastos
              </Typography>
              <ExpensesChart obj={expenses.distribution} />
            </Stack>
          </Grid>
          <div style={{flex: 1}} />
          <Grid item lg={6} paddingY={3} sm={6} xs={12}>
            <ExpensesTable distribution={expenses.distribution} />
          </Grid>
        </Grid>
      )}
      <Stack mt={10}>
        <Typography color="GrayColor" variant="h4">
          Transacciones
        </Typography>
        <TransactionsTable transactions={transactions.details} />
      </Stack>
    </Container>
  )
}

export default Dashboard
