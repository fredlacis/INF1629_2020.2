import React from 'react'

import { Container } from './styles'

// The component is a reusable button for multiple purposes.
export default function Button({text, backgroundColor = '#fff', isBig = false, disabled = false, handleClick}) {
  return (
    <Container background={backgroundColor} isBig={isBig} disabled={disabled} onClick={handleClick} type='button'>
      {text}
    </Container>
  )
}