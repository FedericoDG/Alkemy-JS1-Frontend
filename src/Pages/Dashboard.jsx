import {Container, Stack, Typography, Grid, Button} from '@mui/material'
import {Navigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import AddCardIcon from '@mui/icons-material/AddCard'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'

import CustomCard from '../components/ui/Card'
import ExpensesChart from '../components/charts/ExpensesChart'
import ExpensesTable from '../components/ui/ExpensesTable'
import TransactionsTable from '../components/ui/TransactionsTable'
import useGetBalance from '../hooks/useBalance'
import {useGetMe} from '../hooks/useUsers'
import {authLogout} from '../app/authSlice'

const Dashboard = () => {
  const {data, isLoading} = useGetBalance()

  const {data: me, isLoading: isLoadingMe} = useGetMe()

  const dispatch = useDispatch()

  if (isLoading || isLoadingMe) return <h1>ESTO DEBERÍA SER UN SPINNER</h1>

  if (me.status === 'blocked') return <h1>CUENTA BLOQUEADA</h1>

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
      <Grid
        container
        alignContent="stretch"
        direction="row"
        gap={1}
        justifyContent="flex-end"
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
        <div style={{marginTop: 16}}>
          <Grid container alignItems="flex-start">
            <Grid item lg={4} sm={6} xs={12}>
              <Stack>
                <Typography color="GrayColor" variant="button">
                  TOTAL DE GASTOS
                </Typography>
                <ExpensesChart obj={expenses.distribution} />
              </Stack>
            </Grid>
            <div style={{flex: 1}} />
            <Grid item lg={6} paddingY={3} sm={6} xs={12}>
              <ExpensesTable distribution={expenses.distribution} />
            </Grid>
          </Grid>
          <div className="balance-table-container" style={{marginTop: '15px'}}>
            <TransactionsTable transactions={transactions.details} />
          </div>
        </div>
      )}
    </Container>
  )
}

export default Dashboard
