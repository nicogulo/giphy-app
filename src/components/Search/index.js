import React from 'react';

const Search = ({ handleSubmit, handleQueryChanges, query }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        onChange={handleQueryChanges}
        placeholder="Search..."
        value={query}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default Search;
