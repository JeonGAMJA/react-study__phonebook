import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import ContactItem from '../ContactItem/ContactItem'

const ContactListButton = () => {
  const contacts = useSelector((state: RootState) => state.contactList.contacts)
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            contactId={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
          />
        ))}
      </ul>
    </div>
  )
}

export default ContactListButton
