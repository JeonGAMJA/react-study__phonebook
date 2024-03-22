import React, { ChangeEvent, useState } from 'react';
import { Profile } from '../../redux/contactSlice';

interface SearchBarProps {
  contacts: Profile[];
  searchContacts: (searchInput: string) => Profile[];
}

const SearchBar = ({ contacts, searchContacts }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    searchContacts(e.target.value);
  };

  return (
    <>
      <div>
        <input onChange={handleSearch} value={searchInput} />
      </div>
    </>
  );
};

export default SearchBar;
