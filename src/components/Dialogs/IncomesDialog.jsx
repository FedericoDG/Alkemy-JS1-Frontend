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
import {useState} from 'react'
import * as Yup from 'yup'
import AddCardIcon from '@mui/icons-material/AddCard'

import CustomTextField from '../Forms/CustomTextField'
import FormError from '../Forms/FormError'
import useAddCredit from '../../hooks/useTransactions'

const validationSchemaIncomes = Yup.object().shape({
  amount: Yup.number().positive('El monto debe ser mayor a 0').required('Este campo es requerido'),
  concept: Yup.string(),
})

const IncomesDialog = () => {
  const [openIncome, setOpenIncome] = useState(false)

  const {mutate: addCredit, isLoading} = useAddCredit()

  const handleClickOpenIncome = () => {
    setOpenIncome(true)
  }

  const handleCloseIncome = () => {
    setOpenIncome(false)
  }

  return (
    <>
      <Button
        color="primary"
        size="small"
        startIcon={<AddCardIcon />}
        variant="contained"
        onClick={handleClickOpenIncome}
      >
        CARGAR SALDO
      </Button>
      <Dialog open={openIncome} onClose={handleCloseIncome}>
        <DialogContent>
          <Formik
            initialValues={{amount: 0, concept: '', categoryId: 2}}
            validationSchema={validationSchemaIncomes}
            onSubmit={(values) => {
              addCredit(values)
              setTimeout(() => {
                setOpenIncome(false)
              }, 1000)
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
                <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                  <AddCardIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Cargar saldo
                </Typography>
                <Box sx={{mt: 1}}>
                  <Form style={{width: '100%'}}>
                    <Stack p={1} spacing={1}>
                      <CustomTextField
                        InputProps={{
                          startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        label="Monto"
                        name="amount"
                        style={{width: 250}}
                        type="number"
                      />
                      <ErrorMessage component={FormError} name="amount" />
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

export default IncomesDialog
