import React from "react";
import { useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Nav from "../../components/Nav/Nav";
import SearchBar from "../../components/SearchBar/SearchBar";
import ContactListButton from "../../components/ContactListButton/ContactListButton";
import { useDispatch, useSelector } from "react-redux";
import { Profile, addContact } from "../../redux/contactSlice";
import { RootState } from "@reduxjs/toolkit/query";

const ContactList = () => {
  const contacts = useSelector(
    (state: RootState) => state.contactList.contacts
  );
  const dispatch = useDispatch();
  const [addContactModalOpen, setAddContactModalOpen] = useState(false);

  const handleAddContactButton = () => {
    setAddContactModalOpen(true);
  };

  const handleSubmit = (profileInfo: Profile) => {
    dispatch(addContact(profileInfo));
    setAddContactModalOpen ? setAddContactModalOpen(false) : null;
  };

  const searchContacts = (searchInput: string) => {
    return contacts.filter((contact) => {
      const { firstName, lastName } = contact;

      return `${lastName}${firstName}`
        .replace(/ /g, "")
        .includes(searchInput.trim().replace(/ /g, ""));
    });
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {addContactModalOpen && (
        <ContactForm
          setAddContactModalOpen={setAddContactModalOpen}
          mode="create"
          handleSubmit={handleSubmit}
        />
      )}
      <Nav
        prevButtonText="&larr;"
        customButton={
          <button type="button" onClick={handleAddContactButton}>
            +
          </button>
        }
        mode=""
      />
      <SearchBar contacts={contacts} searchContacts={searchContacts} />
      <ContactListButton contacts={contacts} />
    </div>
  );
};

export default ContactList;
