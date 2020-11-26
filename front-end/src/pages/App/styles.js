import styled from 'styled-components'

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