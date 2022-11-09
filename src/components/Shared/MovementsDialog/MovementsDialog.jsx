import {Grid} from '@mui/material'

import useGetCategory from '../../../hooks/useCategory'

import ExpensesDialog from './ExpensesDialog/ExpensesDialog'
import IncomesDialog from './IncomesDialog/IncomesDialog'
import TransactionDialog from './TransactionsDialog/TransactionDialog'

const MovementsDialog = () => {
  const {data, isLoading, isError, error} = useGetCategory()

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

export default MovementsDialog
