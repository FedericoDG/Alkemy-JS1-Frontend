import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  adminDrawer: false,
  resetPasswordModal: false,
  activeUserId: null,
  addCreditDrawer: false,
  transferenceDrawer: false,
  addExpenseDrawer: false,
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
    toggleAddCreditDrawer: (state) => ({
      ...state,
      addCreditDrawer: !state.addCreditDrawer,
    }),
    toggleTransferenceDrawer: (state) => ({
      ...state,
      transferenceDrawer: !state.transferenceDrawer,
    }),
    toggleAddExpenseDrawer: (state) => ({
      ...state,
      addExpenseDrawer: !state.addExpenseDrawer,
    }),
  },
})

export const {
  togleAdminDrawer,
  setActiveUser,
  toggleResetPasswordModal,
  toggleAddCreditDrawer,
  toggleTransferenceDrawer,
  toggleAddExpenseDrawer,
} = uiSlice.actions

export default uiSlice.reducer
