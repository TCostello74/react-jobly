import React, { useState } from 'react';

function SearchForm({ searchFor }) {
  const [term, setTerm] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(term);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="term" 
        value={term} 
        onChange={e => setTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
