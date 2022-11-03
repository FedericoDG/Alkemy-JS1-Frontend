import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import auth from '../services/auth'
import localStorage from '../utils/localStorage'

const initialState = () => {
  if (!localStorage.read('alkybank')) {
    return {
      logged: false,
      loading: false,
      user: null,
      token: null,
    }
  }
  const data = localStorage.read('alkybank')

  return {
    logged: true,
    loading: false,
    user: data.user,
    token: data.token,
  }
}

export const authLogin = createAsyncThunk('[auth]/login', ({email, password}, thunkAPI) =>
  auth.login(email, password, thunkAPI)
)

export const authSlice = createSlice({
  name: '[auth]',
  initialState: initialState(),
  reducers: {
    logout: (state) => ({
      ...state,
      logged: false,
      loading: false,
      user: null,
      token: null,
    }),
  },
  extraReducers: {
    [authLogin.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [authLogin.fulfilled]: (state, action) => ({
      ...state,
      loading: false,
      logged: true,
      user: {...action.payload.user},
      token: action.payload.token,
    }),
    [authLogin.rejected]: (state) => ({
      ...state,
      loading: false,
    }),
  },
})

const {logout} = authSlice.actions

export const authLogout = () => (dispatch) => {
  auth.logout()
  dispatch(logout())
}

export default authSlice.reducer
