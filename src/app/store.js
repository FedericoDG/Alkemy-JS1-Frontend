import {configureStore} from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-named-as-default
import authSlice from './authSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})

export default store
