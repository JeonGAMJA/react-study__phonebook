import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
import { useNavigate } from 'react-router-dom';

interface DeleteButtonProps {
  id: string;
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    navigate('/');
  };

  return <button onClick={handleDeleteContact}>연락처 삭제</button>;
};

export default DeleteButton;
