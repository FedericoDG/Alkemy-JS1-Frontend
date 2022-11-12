import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Dialog,
  DialogContent,
  Typography,
  InputAdornment,
} from '@mui/material'
import {Form, Formik, ErrorMessage} from 'formik'
import {io} from 'socket.io-client'
import {useSelector} from 'react-redux'
import {useState} from 'react'
import * as Yup from 'yup'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'

import CustomSelect from '../Forms/CustomSelect'
import CustomTextField from '../Forms/CustomTextField'
import FormError from '../Forms/FormError'
import socketIO from '../../services/socket'
import useAddCredit from '../../hooks/useTransactions'
import userGetUsers from '../../hooks/useUsers'

const validationSchema = Yup.object().shape({
  amount: Yup.number().positive('El monto debe ser mayor a 0').required('Este campo es requerido'),
  user: Yup.string().required('Este campo es requerido'),
  concept: Yup.string(),
})

const TransactionDialog = () => {
  const {user} = useSelector((state) => state.auth)
  const [openIncome, setOpenIncome] = useState(false)

  const {data: users} = userGetUsers()

  const {mutate: transferTo, isLoading} = useAddCredit()

  const socket = socketIO()

  const handleClickOpenIncome = () => {
    setOpenIncome(true)
  }

  const handleCloseIncome = () => {
    setOpenIncome(false)
  }

  return (
    <>
      <Button
        color="secondary"
        size="small"
        startIcon={<CurrencyExchangeIcon />}
        sx={{width: 145}}
        variant="contained"
        onClick={handleClickOpenIncome}
      >
        Transferir
      </Button>
      <Dialog open={openIncome} onClose={handleCloseIncome}>
        <DialogContent>
          <Formik
            initialValues={{amount: 0, user: '', concept: '', categoryId: 1}}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              socket.emit('join_channel', values.user)
              socket.emit('send_transaction', {
                message: 'Transferencia recibida',
                channel: values.user,
              })
              socket.emit('join_channel', user.id)
              transferTo({...values, destinationUserId: values.user})
              setOpenIncome(false)
            }}
          >
            <Container
              maxWidth="sm"
              sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                  <CurrencyExchangeIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Realizar Transferencia
                </Typography>
                <Box sx={{mt: 1}}>
                  <Form style={{width: '100%'}}>
                    <Stack p={1} spacing={1}>
                      <CustomTextField
                        autoFocus
                        InputProps={{
                          startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        label="Monto"
                        name="amount"
                        style={{width: 250}}
                        type="number"
                      />
                      <ErrorMessage component={FormError} name="amount" />
                      <CustomSelect label="Usuario" name="user" options={users} />
                      <CustomTextField label="Concepto" name="concept" style={{width: 250}} />
                      <ErrorMessage component={FormError} name="concept" />
                      <Button disabled={isLoading} type="submit" variant="contained">
                        Aceptar
                      </Button>
                    </Stack>
                  </Form>
                </Box>
              </Box>
            </Container>
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TransactionDialog
