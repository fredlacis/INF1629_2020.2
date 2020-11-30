import React from 'react'

import { Container } from './styles'

export default function Button({text, backgroundColor = '#fff', isBig = false, disabled = false, handleClick}) {
  return (
    <Container background={backgroundColor} isBig={isBig} disabled={disabled} onClick={handleClick}>
      {text}
    </Container>
  )
}