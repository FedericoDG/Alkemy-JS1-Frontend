import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
} from '@mui/material'

const UserBalance = ({incomes, expenses, balance, transactions}) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">Balance</TableCell>
          <TableCell align="center">Ingresos</TableCell>
          <TableCell align="center">Gastos</TableCell>
          <TableCell align="center">Operaciones</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">$ {balance}</TableCell>
          <TableCell align="center">$ {incomes.total}</TableCell>
          <TableCell align="center">$ {expenses.total}</TableCell>
          <TableCell align="center">{transactions.amount}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
)

export default UserBalance
