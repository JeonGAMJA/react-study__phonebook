import React from 'react'
import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import ContactItem from '../../components/ContactItem/ContactItem'

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contactList.contacts)

  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
          />
        ))}
      </ul>
    </div>
  )
}

export default ContactList
