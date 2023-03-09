import { createSlice, configureStore } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'config',
  initialState: {
    leftSideMenuOpened: true
  },
  reducers: {
    openLeftSideMenu: (state) => {
      state.leftSideMenuOpened = true
    },
    closeLeftSideMenu: (state) => {
      state.leftSideMenuOpened = false
    }
  }
})

export const { openLeftSideMenu, closeLeftSideMenu } = configSlice.actions
export default configSlice
