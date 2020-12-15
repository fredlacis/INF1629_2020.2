import styled from 'styled-components'

// The styles used by the ResultList component.
// Using the styled-components library to be able to give representative names for every style.

export const ResultContainer = styled.div`
  width: 50%;
  margin-top: 25px;
  min-width: 800px;
  height: 100%;
  border-radius: 30px 30px 0 0;
  background: #000;
  overflow: hidden;

  @media(max-width: 841px) {
    min-width: 0;
    width: 100%;
  }

  h1 {
    width: 100%;
    height: 40px;
    text-align: center;
    background-color: #B0B0B0;
    color: #2A2A2A;
    margin: 0;
  }
`
export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 41px;
`

export const TableLine = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-bottom: 0;
`

export const TableCell = styled.div`
  width: 100%;
  height: 100%;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #575757;
  margin-right: 1px;
  margin-bottom: 0%;
`