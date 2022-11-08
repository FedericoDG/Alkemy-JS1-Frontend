import {Box, Drawer} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'

import {toggleAddCreditDrawer} from '../../app/uiSlice'

const AddCreditDrawer = () => {
  const {addCreditDrawer} = useSelector((state) => state.ui)

  const dispatch = useDispatch()

  const toggleDrawer = () => dispatch(toggleAddCreditDrawer())

  return (
    <Drawer anchor="right" open={addCreditDrawer} onClose={toggleDrawer}>
      <Box m={2} role="presentation" sx={{width: 360}}>
        ADD CREDIT
      </Box>
    </Drawer>
  )
}

export default AddCreditDrawer
