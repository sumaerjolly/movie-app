import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MoviesContextProvider } from './MoviesContext';

ReactDOM.render(
  <MoviesContextProvider>
    <App />
  </MoviesContextProvider>,
  document.getElementById('root')
);
