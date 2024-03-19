import React from 'react'

interface ContactProps {
  firstName: string
  lastName: string
}

const ContactItem = ({ firstName, lastName }: ContactProps) => {
  return (
    <div>
      <span>{lastName + firstName}</span>
    </div>
  )
}

export default ContactItem
