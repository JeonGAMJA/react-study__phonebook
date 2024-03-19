import { createSlice } from '@reduxjs/toolkit'

export interface Profile {
  firstName: string
  lastName: string
  phoneNumber: number
  adress: string
  id: string
}

export interface ContactState {
  contacts: Profile[]
}

const initialState: ContactState = {
  contacts: [],
}

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {},
    deleteContact: {},
    editContact: {},
  },
})

export const { addContact, deleteContact, editContact } = contactSlice.actions

export default contactSlice.reducer
