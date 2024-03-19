import React from 'react'
import { Link } from 'react-router-dom'

interface ContactProps {
  firstName: string | undefined
  lastName: string
  contactId: string | undefined
}

const ContactItem = ({ firstName, lastName, contactId }: ContactProps) => {
  return (
    <div>
      <Link to={`http://localhost:5173/${contactId}`}>
        <div>{lastName + firstName}</div>
      </Link>
    </div>
  )
}

export default ContactItem
