import {blue, cyan, green, pink} from '@mui/material/colors'
import {Card, CardContent, Grid, Typography} from '@mui/material'

import transformCurrency from '../../utils/transformCurrency'

const colorCyan = cyan.A400
const colorGreen = green[300]
const colorLightBlue = blue[500]
const colorPink = pink[300]

const CustomCard = ({amount, text}) => {
  let color

  switch (text) {
    case 'Ingresos':
      color = colorLightBlue
      break
    case 'Gastos':
      color = colorPink
      break
    case 'Balance':
      color = colorGreen
      break
    case 'Transacciones':
      color = colorCyan
      break

    default:
      color = colorLightBlue
      break
  }

  return (
    <Grid item md={3} xs={6}>
      <Card sx={{minWidth: 160}}>
        <CardContent>
          <Typography color={color} component="div" textAlign="center" variant="h6">
            {text === 'Transacciones' ? amount : transformCurrency(amount)}
          </Typography>
          <Typography color="GrayText" component="div" textAlign="center" variant="body2">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CustomCard
