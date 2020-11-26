import React from 'react'

import { ResultContainer, TableCell, TableLine, ListContainer } from './styles'

export default function ResultList({resultDictionary}) {
  return (
    <ResultContainer>
      <h1>Resultado</h1>
      <ListContainer>
        {Object.keys(resultDictionary).map((term, index) => (
          <TableLine key={index}>
            <TableCell>{term}</TableCell>
            <TableCell>{resultDictionary[term]}</TableCell>
          </TableLine>
        ))}
      </ListContainer>
    </ResultContainer>
  )
}