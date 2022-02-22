import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { SearchContextProvider } from './contexts/SearchContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <Router> <App /></Router>
    </SearchContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
