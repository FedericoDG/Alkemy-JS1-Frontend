import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
  Chip,
} from '@mui/material'

const UserMoreInfo = ({user}) => (
  <TableContainer component={Paper}>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell align="left">Email</TableCell>
          <TableCell align="left">Dirección</TableCell>
          <TableCell align="center">Estado</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="left">{user.email}</TableCell>
          <TableCell align="left">{user.address}</TableCell>
          <TableCell align="center">
            {user.status === 'blocked' ? (
              <Chip color="error" label="bloqueado" size="small" />
            ) : (
              <Chip color="default" label="activo" size="small" />
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
)

export default UserMoreInfo
