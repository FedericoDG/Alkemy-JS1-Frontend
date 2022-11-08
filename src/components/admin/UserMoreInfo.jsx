import {
  Container,
  Box,
  TableContainer,
  Grid,
  Drawer,
  Table,
  TableRow,
  TableCell,
  Stack,
  Button,
  Typography,
  TableHead,
  TableBody,
  Paper,
} from '@mui/material'

const UserMoreInfo = ({user}) => (
  <TableContainer component={Paper}>
    <Table>
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
              <Typography color="red" variant="button">
                bloqueado
              </Typography>
            ) : (
              <Typography color="green" variant="button">
                activo
              </Typography>
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
)

export default UserMoreInfo
