import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  resetPasswordModal: false,
  profileDrawer: false,
}

export const uiSlice = createSlice({
  name: '[ui]',
  initialState,
  reducers: {
    toggleResetPasswordModal: (state) => ({
      ...state,
      resetPasswordModal: !state.resetPasswordModal,
    }),
    setActiveUser: (state, action) => ({
      ...state,
      activeUserId: action.payload,
    }),
    toggleProfileDrawer: (state) => ({
      ...state,
      profileDrawer: !state.profileDrawer,
    }),
  },
})

export const {
  togleAdminDrawer,
  setActiveUser,
  toggleResetPasswordModal,
  toggleAddCreditDrawer,
  toggleTransferenceDrawer,
  toggleProfileDrawer,
} = uiSlice.actions

export default uiSlice.reducer
