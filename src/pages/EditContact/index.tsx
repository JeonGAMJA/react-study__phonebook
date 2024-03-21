import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useDispatch } from 'react-redux';
import { Profile, editContact } from '../../redux/contactSlice';

const EditContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contact = useLocation().state;

  const handleEditProfile = (profileInfo: Profile) => {
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
    navigate(`/${contact.id}`);
  };

  return (
    <div>
      <ContactForm mode="edit" contact={contact} handleSubmit={handleEditProfile} />
    </div>
  );
};

export default EditContact;
