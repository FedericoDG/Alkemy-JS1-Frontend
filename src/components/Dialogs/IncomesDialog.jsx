import {Box, Button, Dialog, DialogContent, DialogTitle} from '@mui/material'
import {useState} from 'react'
import AddCardIcon from '@mui/icons-material/AddCard'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'

import Input from '../Shared/Input'
import styles from '../Shared/reusable.module.css'
import {postRequest} from '../../services/httpRequest'
import useGetCategory from '../../hooks/useCategory'
import NumberInput from '../Shared/NumberInput'

const IncomesDialog = () => {
  const [openIncome, setOpenIncome] = useState(false)
  const {data} = useGetCategory()
  const handleClickOpenIncome = () => {
    setOpenIncome(true)
  }

  const handleCloseIncome = () => {
    setOpenIncome(false)
  }

  const handleSubmit = (values) => {
    postRequest('/transactions', values)
    console.log(values)
  }

  const validationSchema = Yup.object().shape({
    concept: Yup.string().required('Required'),
    amount: Yup.number().positive().required('Required'),
  })

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
        <DialogTitle>Cargar Saldo</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              categoryId: data && data[1].id,
              concept: '',
              amount: '',
              destinationId: 1,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {() => (
              <Box
                component={Form}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 1,
                  pt: 2,
                }}
              >
                <Input label="Concepto" name="concept" placeholder="Concepto" />
                <NumberInput label="Valor" name="amount" placeholder="Valor" type="number" />

                <Button
                  className={styles.button}
                  disabled={false}
                  type="submit"
                  variant="contained"
                >
                  Cargar Saldo
                </Button>
              </Box>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default IncomesDialog
