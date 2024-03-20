import React from 'react';
import { useState } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Nav from '../../components/Nav/Nav';
import SearchBar from '../../components/SearchBar/SearchBar';
import ContactListButton from '../../components/ContactListButton/ContactListButton';
import { useDispatch } from 'react-redux';
import { Profile, addContact } from '../../redux/contactSlice';

const ContactList = () => {
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
      />
      <SearchBar />
      <ContactListButton />
    </div>
  );
};

export default ContactList;
