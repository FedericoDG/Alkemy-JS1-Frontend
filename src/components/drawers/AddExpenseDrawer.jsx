import {Box, Drawer} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'

import {toggleAddExpenseDrawer} from '../../app/uiSlice'

const AddExpenseDrawer = () => {
  const {addExpenseDrawer} = useSelector((state) => state.ui)

  const dispatch = useDispatch()

  const toggleDrawer = () => dispatch(toggleAddExpenseDrawer())

  return (
    <Drawer anchor="right" open={addExpenseDrawer} onClose={toggleDrawer}>
      <Box m={2} role="presentation" sx={{width: 360}}>
        ADD EXPENSE
      </Box>
    </Drawer>
  )
}

export default AddExpenseDrawer
