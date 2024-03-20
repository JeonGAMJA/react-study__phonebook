import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

export interface Profile {
  firstName?: string;
  lastName: string;
  office?: string;
  phoneNumber: number;
  adress?: string;
  id?: string;
}

export interface ContactState {
  contacts: Profile[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Profile>) => {
      const profile: Profile = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        office: action.payload.office,
        phoneNumber: action.payload.phoneNumber,
        adress: action.payload.adress,
        id: uuid(),
      };
      state.contacts.push(profile);
    },
    deleteContact: (state, action) => {},
    editContact: (state, action) => {},
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
