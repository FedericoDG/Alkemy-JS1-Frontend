import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'

import generateColor from '../../utils/generateColor'
import transformCurrency from '../../utils/transformCurrency'

const ExpensesTable = ({distribution}) => (
  <TableContainer component={Paper}>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Gastos</TableCell>
          <TableCell align="right">Total</TableCell>
          <TableCell align="right">Porcentaje</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {distribution.map((row, index) => {
          const color = generateColor(index)

          return (
            <TableRow key={row.name} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              <TableCell component="th" scope="row" style={{display: 'flex', alignItems: 'center'}}>
                <Box
                  component="div"
                  mr={1}
                  style={{
                    backgroundColor: color,
                    width: 15,
                    height: 15,
                    borderRadius: 15,
                  }}
                />
                <Tooltip title={row.description}>
                  <Typography color="initial" variant="body1">
                    {row.name}
                  </Typography>
                </Tooltip>
              </TableCell>
              <TableCell align="right">{transformCurrency(row.total)}</TableCell>
              <TableCell align="right">{Number(row.percentage).toFixed(2)} %</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </TableContainer>
)

export default ExpensesTable
