import React from 'react';
import { Link } from 'react-router-dom';

interface ContactProps {
  firstName?: string;
  lastName: string;
  contactId?: string;
}

const ContactItem = ({ firstName, lastName, contactId }: ContactProps) => {
  return (
    <div>
      <Link to={`/${contactId}`}>
        <div>{lastName + firstName}</div>
      </Link>
    </div>
  );
};

export default ContactItem;
