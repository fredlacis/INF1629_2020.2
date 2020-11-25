import React from 'react'
import  {Route, BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Header'
import { GlobalStyles } from "./styles/GlobalStyles"

import Home from './pages/Home';
import Result from './pages/Result';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/result" exact component={Result} />
      </Router>
      <GlobalStyles />
    </>
  )
}