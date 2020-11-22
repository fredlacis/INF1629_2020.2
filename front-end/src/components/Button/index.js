import React from 'react'

import { Container } from './styles'

export default function Button({text, backgroundColor = '#fff', isBig = false}) {
  return (
    <Container background={backgroundColor} isBig={isBig}>
      {text}
    </Container>
  )
}