import React, { useContext } from 'react';
import { MoviesContext } from '../MoviesContext';

function Results() {
  const { state, openPopup } = useContext(MoviesContext);
  const results = state.results;
  return (
    <section className="results">
      {results.map((result, id) => (
        <div
          className="result"
          key={id}
          onClick={() => openPopup(result.imdbID)}
        >
          <img src={result.Poster} alt={result.Title} />
          <h3>{result.Title}</h3>
        </div>
      ))}
    </section>
  );
}

export default Results;
