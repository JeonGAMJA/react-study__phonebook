import React from 'react'
import { useState } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import Nav from '../../components/Nav/Nav'
import SearchBar from '../../components/SearchBar/SearchBar'
import ContactListButton from '../../components/ContactListButton/ContactListButton'

const ContactList = () => {
  const [addContactModalOpen, setAddContactModalOpen] = useState(false)

  const handleAddContactButton = () => {
    setAddContactModalOpen(true)
  }

  return (
    <div>
      {addContactModalOpen && (
        <ContactForm setAddContactModalOpen={setAddContactModalOpen} />
      )}
      <Nav
        prevButtonText="&larr;"
        buttonText="+"
        onButtonClick={handleAddContactButton}
      />
      <SearchBar />
      <ContactListButton />
    </div>
  )
}

export default ContactList
