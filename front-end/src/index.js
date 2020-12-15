import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header'
import { GlobalStyles } from "./styles/GlobalStyles"
import App from './pages/App';

// This is where the app is set up
ReactDOM.render(
  <React.StrictMode>
    { /* Every page of the app has the Header in it, so putting it here makes it global. */ }
    <Header />
    { /* The App class is the main class of the app, and its where all the app logic is contained. */ }
    <App />
    {/* A reference to the Global Styles (CSS) for the app. */}
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
