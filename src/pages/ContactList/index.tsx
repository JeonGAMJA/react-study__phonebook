import React from 'react';
import { useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import ContactListButton from '../../components/ContactListButton/ContactListButton';
import { useDispatch, useSelector } from 'react-redux';
import { Profile, addContact } from '../../redux/contactSlice';
import { RootState } from '@reduxjs/toolkit/query';

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contactList.contacts);
  const dispatch = useDispatch();
  const [addContactModalOpen, setAddContactModalOpen] = useState(false);

  const handleAddContactButton = () => {
    setAddContactModalOpen(true);
  };

  const handleSubmit = (profileInfo: Profile) => {
    dispatch(
      addContact({
        firstName: profileInfo.firstName,
        lastName: profileInfo.lastName,
        office: profileInfo.office,
        phoneNumber: profileInfo.phoneNumber,
        adress: profileInfo.adress,
      }),
    );
    setAddContactModalOpen ? setAddContactModalOpen(false) : null;
  };

  const searchContacts = (searchInput: string) => {};
  return (
    <div>
      {addContactModalOpen && (
        <ContactForm
          setAddContactModalOpen={setAddContactModalOpen}
          mode="create"
          handleSubmit={handleSubmit}
        />
      )}
      <Nav
        prevButtonText="&larr;"
        buttonText="+"
        onButtonClick={handleAddContactButton}
        mode=""
      />
      <SearchBar contacts={contacts} searchContacts={searchContacts} />
      <ContactListButton contacts={contacts} />
    </div>
  );
};

export default ContactList;
