import React, { useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import ProfileImg from '../../components/ProfileImg/ProfileImg';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { Profile } from '../../redux/contactSlice';

const ContactDetail = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const contacts = useSelector((state: RootState) => state.contactList.contacts);
  const contact: Profile | undefined = contacts.find(
    (contact) => contact.id === contactId,
  );
  const navigate = useNavigate();

  if (!contact) {
    return <div>Contact not found</div>;
  }

  const { firstName, lastName, office, phoneNumber, adress } = contact;

  const handleEditButton = () => {
    navigate(`/${contactId}/edit`, { state: { ...contact } });
  };

  return (
    <div>
      <Nav
        prevButtonText="&larr;"
        buttonText="편집"
        onButtonClick={handleEditButton}
        mode=""
      />
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
  );
};

export default ContactDetail;
