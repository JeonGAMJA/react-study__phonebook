import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../components/ProfileImg/ProfileImg';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
import { Profile, editContact } from '../../redux/contactSlice';

const EditContact = () => {
  const dispatch = useDispatch();
  const contact = useLocation().state;

  const handleEditProfile = (profileInfo: Profile) => {
    console.log(profileInfo);
    dispatch(
      editContact({
        firstName: profileInfo.firstName,
        lastName: profileInfo.lastName,
        office: profileInfo.office,
        phoneNumber: profileInfo.phoneNumber,
        adress: profileInfo.adress,
        id: profileInfo.id,
      }),
    );
  };

  return (
    <div>
      <ContactForm mode="edit" contact={contact} handleSubmit={handleEditProfile} />
    </div>
  );
};

export default EditContact;