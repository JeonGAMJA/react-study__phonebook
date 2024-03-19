import React from 'react'
import Nav from '../../components/Nav/Nav'
import ProfileImg from '../../components/ProfileImg/ProfileImg'

const ContactDetail = () => {
  return (
    <div>
      <Nav />
      <div>
        <ProfileImg />
        <span>{office}</span>
        <h1>{lastName + firstName}</h1>
        <section>
          <button>메시지</button>
          <button>휴대전화</button>
          <button>비디오</button>
          <button>Mail</button>
        </section>
      </div>
      <section>
        <div>
          <span>휴대전화</span>
          <span>{phoneNumber}</span>
        </div>
        <div>
          <span>주소</span>
          <span>{adress}</span>
        </div>
      </section>
    </div>
  )
}

export default ContactDetail
