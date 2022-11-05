import {Card, CardContent, Container, Typography, Grid} from '@mui/material'
import {blue, cyan, green, pink} from '@mui/material/colors'

import useGetBalance from '../hooks/useBalance'

const colorLightBlue = blue[500]
const colorCyan = cyan.A400
const colorPink = pink[300]
const colorGreen = green[300]

const Dashboard = () => {
  const {data, isLoading, isError, error} = useGetBalance()

  if (isLoading) return <h1>ESTO DEBERÍA SER UN SPINNER</h1>

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
        <Grid item md={3} xs={6}>
          <Card sx={{minWidth: 200}}>
            <CardContent>
              <Typography color={colorLightBlue} component="div" textAlign="center" variant="h6">
                $ {data.incomes.total}
              </Typography>
              <Typography color="GrayText" component="div" textAlign="center" variant="body2">
                Ingresos
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card sx={{minWidth: 200}}>
            <CardContent>
              <Typography color={colorPink} component="div" textAlign="center" variant="h6">
                $ {data.expenses.total}
              </Typography>
              <Typography color="GrayText" component="div" textAlign="center" variant="body2">
                Gastos
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card sx={{minWidth: 200}}>
            <CardContent>
              <Typography color={colorGreen} component="div" textAlign="center" variant="h6">
                $ {data.balance}
              </Typography>
              <Typography color="GrayText" component="div" textAlign="center" variant="body2">
                Balance
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={6}>
          <Card sx={{minWidth: 200}}>
            <CardContent>
              <Typography color={colorCyan} component="div" textAlign="center" variant="h6">
                {data.transactions.amount}
              </Typography>
              <Typography color="GrayText" component="div" textAlign="center" variant="body2">
                Transaciones
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard
