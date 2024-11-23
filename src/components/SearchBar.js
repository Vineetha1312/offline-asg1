import React from 'react';
import { Input } from '../styles';

const SearchBar = ({ setSearchQuery }) => {
  return (
    <Input
      type="text"
      placeholder="Search by title or category..."
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ marginBottom: '10px', width:'50%', textAlign:'center', display:'flex', alignSelf:'center', justifySelf:'center' }}
    />
  );
};

export default SearchBar;
