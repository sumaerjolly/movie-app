import React, { useContext } from 'react';
import { MoviesContext } from '../MoviesContext';

function Search() {
  const { handleInput, search } = useContext(MoviesContext);

  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for any movie..."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
