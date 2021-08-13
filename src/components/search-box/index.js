const SearchBox = ({ handleSubmit, handleChange, query }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input name="query" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
