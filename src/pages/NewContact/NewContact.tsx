import React, { ChangeEvent, forwardRef, useState } from 'react'
import Nav from '../../components/Nav/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { addContact } from '../../redux/contactSlice'

const NewContact = forwardRef((ref) => {
  const contacts = useSelector((state: RootState) => state.contactList.contacts)
  const dispatch = useDispatch()

  const [profileInfo, setProfileInfo] = useState({
    firstName: '',
    lastName: '',
    office: '',
    phoneNumber: '',
    adress: '',
  })

  const { firstName, lastName, office, phoneNumber, adress } = profileInfo

  const profileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setProfileInfo({
      ...profileInfo,
      [name]: value,
    })
  }

  const handleNewContactSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(
      addContact({
        firstName: firstName,
        lastName: lastName,
        office: office,
        phoneNumber: phoneNumber,
        adress: adress,
      }),
    )
  }

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          width: `20%`,
          height: '80%',
          zIndex: 2000,
          backgroundColor: 'rgba(0,0,0,0.5)',
          left: '40vw',
          top: '10vh',
        }}
      >
        <form
          onSubmit={handleNewContactSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Nav
            onButtonClick={handleNewContactSubmit}
            prevButtonText="취소"
            buttonText="완료"
            buttonType="submit"
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '2rem',
            }}
          >
            <img
              style={{
                backgroundColor: 'lightgray',
                width: '7rem',
                height: '7rem',
                borderRadius: '50%',
                marginBottom: '1rem',
              }}
            />
            <button type="button">사진추가</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}>
            <input
              type="text"
              name="firstName"
              placeholder="성"
              value={firstName}
              onChange={profileInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="이름"
              value={lastName}
              onChange={profileInputChange}
            />
            <input
              type="text"
              name="office"
              placeholder="직장"
              value={office}
              onChange={profileInputChange}
            />
          </div>
          <input
            type="number"
            name="phoneNumber"
            placeholder="전화번호"
            value={phoneNumber}
            onChange={profileInputChange}
          />
          <input
            type="text"
            name="adress"
            placeholder="주소"
            value={adress}
            onChange={profileInputChange}
          />
        </form>
      </div>
    </div>
  )
})

export default NewContact
