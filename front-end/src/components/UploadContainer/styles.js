import styled, { css } from "styled-components";

const dragActive = css`
  border-style: solid;
  border-width: 1px;
  border-color: #00C8FF;
`

export const Container = styled.div`
  width: 50%;
  height: 40%;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 60px;
  background: ${props => props.background};

  ${props => props.isDragActive && dragActive}

  @media(max-width: 841px) {
    width: 100%;
  }
`

export const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

export const SubDescription = styled.p`
  font-size: 20px;
  font-weight: 100;
  text-align: center;
`