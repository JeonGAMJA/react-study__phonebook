import React from 'react';
import { Profile } from '../../redux/contactSlice';

interface SearchBarProps {
  contacts: Profile;
}

const SearchBar = ({ contacts }) => {
  return (
    <>
      <div>
        <input />
        <button></button>
      </div>
    </>
  );
};

export default SearchBar;
