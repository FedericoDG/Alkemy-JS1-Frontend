import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  adminDrawer: false,
  resetPasswordModal: false,
  activeUserId: null,
}

export const uiSlice = createSlice({
  name: '[ui]',
  initialState,
  reducers: {
    togleAdminDrawer: (state) => ({
      ...state,
      adminDrawer: !state.adminDrawer,
    }),
    toggleResetPasswordModal: (state) => ({
      ...state,
      resetPasswordModal: !state.resetPasswordModal,
    }),
    setActiveUser: (state, action) => ({
      ...state,
      activeUserId: action.payload,
    }),
  },
})

export const {togleAdminDrawer, setActiveUser, toggleResetPasswordModal} = uiSlice.actions

export default uiSlice.reducer
