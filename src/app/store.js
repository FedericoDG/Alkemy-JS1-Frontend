/* eslint-disable import/no-named-as-default */
import {configureStore} from '@reduxjs/toolkit'

import authSlice from './authSlice'
import uiSlice from './uiSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
  },
})

export default store
