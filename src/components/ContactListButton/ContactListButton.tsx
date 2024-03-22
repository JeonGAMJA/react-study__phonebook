import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import ContactItem from '../ContactItem/ContactItem';
import SearchBar from '../SearchBar/SearchBar';

const ContactListButton = () => {
  const contacts = useSelector((state: RootState) => state.contactList.contacts);

  return (
    <div>
      <SearchBar contacts={contacts} />

      <ul>
        {contacts.map((contact) => (
          <ContactItem
            contactId={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            key={contact.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactListButton;
