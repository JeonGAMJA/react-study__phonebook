import React from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import ProfileImg from '../../components/ProfileImg/ProfileImg'

const EditContact = () => {
  const contact = useLocation().state
  console.log(contact)
  // const { firstName, lastName, office, phoneNumber, adress, id } = contact
  const handleSaveChange = () => {
    console.log('변경완료')
  }
  return (
    <div>
      <Nav prevButtonText="취소" buttonText="완료" onButtonClick={handleSaveChange} />
      <section>
        <ProfileImg />
        <button type="button">사진변경</button>
      </section>
      <section>
        <input />
        <input />
        <input />
      </section>
    </div>
  )
}

export default EditContact
