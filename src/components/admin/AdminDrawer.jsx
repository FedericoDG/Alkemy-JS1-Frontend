import {Container, Grid, Drawer} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'

import {setActiveUser, togleAdminDrawer} from '../../app/uiSlice'
import {useGetUserDetails} from '../../hooks/useUsers'

import UserBalance from './UserBalance'
import UserInfo from './UserInfo'
import UserMoreInfo from './UserMoreInfo'

const AdminDrawer = () => {
  const {adminDrawer, activeUserId} = useSelector((state) => state.ui)

  const dispatch = useDispatch()

  const {data: userDetails, isLoading} = useGetUserDetails(activeUserId)

  const handleClose = () => {
    dispatch(togleAdminDrawer())
    dispatch(setActiveUser(null))
  }

  if (!userDetails) return null

  const {user, expenses, incomes, balance, transactions} = userDetails

  return (
    <Drawer anchor="bottom" open={adminDrawer} onClose={handleClose}>
      <Container maxWidth="xl" sx={{marginY: 2}}>
        <Grid container justifyContent="space-between">
          <Grid item xs={6}>
            <UserInfo user={user} />
          </Grid>
          <Grid item xs={5}>
            <Grid container gap={1}>
              <Grid item xs={12}>
                <UserBalance
                  balance={balance}
                  expenses={expenses}
                  incomes={incomes}
                  transactions={transactions}
                />
              </Grid>
              <div style={{height: 21}} />
              <Grid item xs={12}>
                <UserMoreInfo user={user} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Drawer>
  )
}

export default AdminDrawer
