import React, { useContext } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import { MoviesContext } from './MoviesContext';

function App() {
  const { state } = useContext(MoviesContext);

  return (
    <div className="App">
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
        <Search />
        <Results />
        {typeof state.selected.Title !== 'undefined' ? <Popup /> : false}
      </main>
    </div>
  );
}

export default App;
