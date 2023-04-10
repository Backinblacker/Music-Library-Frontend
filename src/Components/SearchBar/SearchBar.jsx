import React, { useState } from 'react';

const SearchBar = ({ searchSongs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('title');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchSongs(searchQuery, filter);
  };
  
  const handleReset = () => {
    setSearchQuery('');
    setFilter('title');
    searchSongs('', 'title');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search..." />
      <select value={filter} onChange={handleFilterChange}>
        <option value="title">Title</option>
        <option value="album">Album</option>
        <option value="artist">Artist</option>
        <option value="genre">Genre</option>
        <option value="release_date">Release Date</option>
      </select>
      <button type="submit">Search</button>
      <button type='button'onClick={handleReset}>Reset Filters</button>
    </form>
  );
};

export default SearchBar;
