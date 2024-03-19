import React from 'react'
import { Link } from 'react-router-dom'

interface ContactProps {
  firstName: string | undefined
  lastName: string
  key: string | undefined
}

const ContactItem = ({ firstName, lastName, key }: ContactProps) => {
  return (
    <div>
      <Link to={`http://localhost:5173/${key}`}>
        <div>{lastName + firstName}</div>
      </Link>
    </div>
  )
}

export default ContactItem
