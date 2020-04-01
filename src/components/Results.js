import React from 'react';
import Result from './Result';

function Results({ results, openPopup }) {
  return (
    <section className="results">
      {results.map((result, id) => (
        <Result result={result} key={id} openPopup={openPopup} />
      ))}
    </section>
  );
}

export default Results;
