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
      state.contacts.sort((a: any, b: any) =>
        a.lastName < b.lastName ? -1 : a.lastName > b.lastName ? 1 : 0,
      );
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    editContact: (state, action: PayloadAction<Profile>) => {
      state.contacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact,
      );
      state.contacts.sort((a: any, b: any) =>
        a.lastName < b.lastName ? -1 : a.lastName > b.lastName ? 1 : 0,
      );
    },
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
