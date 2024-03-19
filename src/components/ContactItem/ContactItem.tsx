import React from 'react'

interface ContactProps {
  firstName: string | undefined
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
