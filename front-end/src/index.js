import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header'
import { GlobalStyles } from "./styles/GlobalStyles"
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
