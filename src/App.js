import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';

function App() {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
    selected: {}
  });
  const apiUrl = 'http://www.omdbapi.com/?apikey=69ddb86f';

  const search = e => {
    if (e.key === 'Enter') {
      axios
        .get(`${apiUrl}&s=${state.searchQuery}`)
        .then(response => console.log(response))
        .catch(error => console.log('api error is', error));
    }
  };

  const handleInput = e => {
    let searchQuery = e.target.value;
    setState(prevState => {
      return { ...prevState, searchQuery };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
