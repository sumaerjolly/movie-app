import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

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
        .then(({ data }) => {
          let results = data.Search;
          setState(prevState => {
            return { ...prevState, results };
          });
        })
        .catch(error => console.log('api error is', error));
    }
  };

  const handleInput = e => {
    let searchQuery = e.target.value;
    setState(prevState => {
      return { ...prevState, searchQuery };
    });
  };

  const openPopup = id => {
    axios
      .get(`${apiUrl}&i=${id}`)
      .then(({ data }) => {
        let result = data;
        setState(prevState => {
          return { ...prevState, selected: result };
        });
      })
      .catch(error => console.log('api request', error));
  };

  const closePopup = () => {
    setState(prevState => {
      return {
        ...prevState,
        selected: {}
      };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {typeof state.selected.Title !== 'undefined' ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
