import React from 'react'

interface ContactProps {
  firstName: string | undefined
  lastName: string
}

const ContactItem = ({ firstName, lastName }: ContactProps) => {
  return (
    <div>
      <button>{lastName + firstName}</button>
    </div>
  )
}

export default ContactItem
