import React from 'react'

import { GlobalStyles } from "../../styles/GlobalStyles"
import Header from '../../components/Header'

import { Container } from './styles';
// import Button from '../../components/Button';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <h1>Result</h1>
      </Container>
      <GlobalStyles />
    </>
  )
}