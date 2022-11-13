import {Container, Stack, Typography, Grid} from '@mui/material'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'

import {useGetMe} from '../hooks/useUsers'
import CustomCard from '../components/ui/Card'
import Dialogs from '../components/Dialogs/Dialogs'
import ExpensesChart from '../components/charts/ExpensesChart'
import ExpensesTable from '../components/ui/ExpensesTable'
import LoadingSpinner from '../components/ui/LoadingSpinner/LoadingSpinner'
import notification from '../utils/notification'
import ProfileDrawer from '../components/drawers/UserDrawer/UserDrawar'
import socketIO from '../services/socket'
import TransactionsTable from '../components/ui/TransactionsTable'
import useGetBalance from '../hooks/useBalance'

const Dashboard = () => {
  const {user} = useSelector((state) => state.auth)

  const {data: me, isLoading: isLoadingMe} = useGetMe()

  const {data, isLoading} = useGetBalance()

  const socket = socketIO()

  useEffect(() => {
    socket.emit('join_channel', user.id)

    socket.on('income_transaction', (data) => {
      notification('success', data)
    })

    return () => {
      socket.off('join_channel')
      socket.off('income_transaction')
    }
  }, [])

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
