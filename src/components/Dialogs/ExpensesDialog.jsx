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
import LocalAtmIcon from '@mui/icons-material/LocalAtm'

import CustomSelect from '../Forms/CustomSelect'
import CustomTextField from '../Forms/CustomTextField'
import FormError from '../Forms/FormError'
import useAddCredit from '../../hooks/useTransactions'
import useGetCategory from '../../hooks/useCategory'

const validationSchema = Yup.object().shape({
  amount: Yup.number().positive('El monto debe ser mayor a 0').required('Este campo es requerido'),
  category: Yup.string().required('Este campo es requerido'),
  concept: Yup.string(),
})

const TransactionDialog = () => {
  const [openIncome, setOpenIncome] = useState(false)

  const {data: categories} = useGetCategory()

  const {mutate: transferTo, isLoading} = useAddCredit()

  const handleClickOpenIncome = () => {
    setOpenIncome(true)
  }

  const handleCloseIncome = () => {
    setOpenIncome(false)
  }

  return (
    <>
      <Button
        color="error"
        size="small"
        startIcon={<LocalAtmIcon />}
        sx={{width: 145}}
        variant="contained"
        onClick={handleClickOpenIncome}
      >
        Cargar Gasto
      </Button>
      <Dialog open={openIncome} onClose={handleCloseIncome}>
        <DialogContent>
          <Formik
            initialValues={{amount: 0, category: '', concept: '', categoryId: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              transferTo({...values, categoryId: values.category})
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
                <Avatar sx={{m: 1, bgcolor: 'error.main'}}>
                  <LocalAtmIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Cargar Gasto
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
                      <CustomSelect label="Categoría" name="category" options={categories} />
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
