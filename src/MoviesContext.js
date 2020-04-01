import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MoviesContext = React.createContext();

function MoviesContextProvider(props) {
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
    <MoviesContext.Provider
      value={{
        state,
        search,
        handleInput,
        openPopup,
        closePopup
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}

export { MoviesContextProvider, MoviesContext };
