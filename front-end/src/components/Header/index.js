import React from 'react'

import { Container } from './styles'

// The component responsible for displaying the header of the website.
export default function Header() {
  return (
    <Container>
      <img src='/TFCLogo.png' alt='Term Frequency Calculator'/>
    </Container>
  )
}