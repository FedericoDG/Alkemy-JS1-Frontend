import {Grid} from '@mui/material'

import useGetCategory from '../../hooks/useCategory'

import ExpensesDialog from './ExpensesDialog'
import IncomesDialog from './IncomesDialog'
import TransactionDialog from './TransactionDialog'

const Dialogs = () => {
  const {data} = useGetCategory()

  return (
    <Grid
      container
      alignContent="stretch"
      direction="row"
      gap={1}
      justifyContent="flex-end"
      my={1}
      wrap="wrap"
    >
      <IncomesDialog />
      <TransactionDialog data={data} />
      <ExpensesDialog />
    </Grid>
  )
}

export default Dialogs
