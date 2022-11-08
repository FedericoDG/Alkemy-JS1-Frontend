import {Box, Drawer} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'

import {toggleTransferenceDrawer} from '../../app/uiSlice'

const TransferenceDrawer = () => {
  const {transferenceDrawer} = useSelector((state) => state.ui)

  const dispatch = useDispatch()

  const toggleDrawer = () => dispatch(toggleTransferenceDrawer())

  return (
    <Drawer anchor="right" open={transferenceDrawer} onClose={toggleDrawer}>
      <Box m={2} role="presentation" sx={{width: 360}}>
        TRANSFERENCE
      </Box>
    </Drawer>
  )
}

export default TransferenceDrawer
