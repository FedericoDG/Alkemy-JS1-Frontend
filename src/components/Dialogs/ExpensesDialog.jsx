import {Box, Button, Dialog, DialogContent, DialogTitle, MenuItem} from '@mui/material'
import {useState} from 'react'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'

import Input from '../Shared/Input'
import styles from '../Shared/reusable.module.css'
import useGetCategory from '../../hooks/useCategory'
import {postRequest} from '../../services/httpRequest'
import Select from '../Shared/Select'
import NumberInput from '../Shared/NumberInput'

const ExpensesDialog = () => {
  const [openExpense, setOpenExpense] = useState(false)
  const {data} = useGetCategory()
  const filteredCategories = data && data.filter((category) => category.type === 'out')
  const filteredCategoriesId =
    filteredCategories && filteredCategories.map((category) => category.id)

  const handleClickOpenExpense = () => {
    setOpenExpense(true)
  }

  const handleCloseExpense = () => {
    setOpenExpense(false)
  }

  const handleSubmit = (values) => {
    postRequest('/transactions', values)
  }

  const validationSchema = Yup.object().shape({
    categoryId: Yup.number().oneOf([filteredCategoriesId]).required(),
    concept: Yup.string().required('Required'),
    amount: Yup.number().positive().required('Required'),
  })

  return (
    <>
      <Button
        color="info"
        size="small"
        startIcon={<RequestQuoteIcon />}
        variant="contained"
        onClick={handleClickOpenExpense}
      >
        CARGAR GASTO
      </Button>
      <Dialog open={openExpense} onClose={handleCloseExpense}>
        <DialogTitle>Cargar Gasto</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              categoryId: {},
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
                <Select label="Categoría" name="categoryId" placeholder="Categoría">
                  {filteredCategories &&
                    filteredCategories.map((expense) => (
                      <MenuItem key={expense.id} value={expense.id}>
                        {expense.name}
                      </MenuItem>
                    ))}
                </Select>
                <Input label="Concepto" name="concept" placeholder="Concepto" />
                <NumberInput label="Valor" name="amount" placeholder="Valor" type="number" />

                <Button
                  className={styles.button}
                  disabled={false}
                  type="submit"
                  variant="contained"
                >
                  Cargar Gasto
                </Button>
              </Box>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ExpensesDialog
