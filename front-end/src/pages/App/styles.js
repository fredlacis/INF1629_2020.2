import styled from 'styled-components'

// The styles used by the App class.
// Using the styled-components library to be able to give representative names for every style.

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  * {
    margin-bottom: 25px;
  }
`

export const Disclaimer = styled.p`
  margin-top: 25px;
  font-weight: 100;
`