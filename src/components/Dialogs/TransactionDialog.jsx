import {Box, Button, Dialog, DialogContent, DialogTitle, MenuItem} from '@mui/material'
import {useState} from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import {Form, Formik} from 'formik'
import * as Yup from 'yup'

import Input from '../Shared/Input'
import styles from '../Shared/reusable.module.css'
import Select from '../Shared/Select'
import userGetUsers from '../../hooks/useUsers'
import {postRequest} from '../../services/httpRequest'

const TransactionDialog = () => {
  const [openTransaction, setOpenTransaction] = useState(false)
  const {data} = userGetUsers()
  const filteredUsersId = data && data.map((user) => user.id)
  const handleClickOpenTransaction = () => {
    setOpenTransaction(true)
  }

  const handleCloseTransaction = () => {
    setOpenTransaction(false)
  }

  const handleSubmit = (values) => {
    postRequest('/transactions', values)
  }

  const validationSchema = Yup.object().shape({
    destinationUserId: Yup.number().oneOf([filteredUsersId]).required(),
    concept: Yup.string().required('Required'),
    amount: Yup.number().positive().required('Required'),
  })

  return (
    <>
      <Button
        color="secondary"
        size="small"
        startIcon={<CurrencyExchangeIcon />}
        variant="contained"
        onClick={handleClickOpenTransaction}
      >
        TRANSFERIR
      </Button>
      <Dialog open={openTransaction} onClose={handleCloseTransaction}>
        <DialogTitle>Transferir</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{categoryId: 1, concept: '', amount: '', destinationUserId: {}}}
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
                <Select label="Contacto" name="destinationUserId" placeholder="Contacto">
                  {data &&
                    data.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user.firstName} {user.lastName}
                      </MenuItem>
                    ))}
                </Select>
                <Input label="Concepto" name="concept" placeholder="Concepto" />
                <Input label="Valor" name="amount" placeholder="Valor" type="number" />
                <Button
                  className={styles.button}
                  disabled={false}
                  type="submit"
                  variant="contained"
                >
                  Transferir
                </Button>
              </Box>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default TransactionDialog
