import { configureStore } from '@reduxjs/toolkit'
import contactReducer from '../redux/contactSlice'

export const store = configureStore({
  reducer: {
    contactList: contactReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
