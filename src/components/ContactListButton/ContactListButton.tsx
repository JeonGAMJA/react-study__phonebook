import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import ContactItem from '../ContactItem/ContactItem';
import SearchBar from '../SearchBar/SearchBar';
import { Profile } from '../../redux/contactSlice';

interface ContactListButtonProps {
  contacts: Profile[];
  contact: Profile;
}

const ContactListButton = ({ contacts }: ContactListButtonProps) => {
  return (
    <div>
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
