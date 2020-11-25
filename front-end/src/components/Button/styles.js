import styled, { css } from "styled-components";

export const Container = styled.button`
  border: none;
  background: ${props => props.background};
  color: black;
  font-weight: 100;
  cursor: pointer;

  &:hover{
    transition-property: opacity letter-spacing;
    transition-duration: 0.5s;
    opacity: 0.7;
    ${props =>
    props.isBig ?
      css`
      letter-spacing: 4px;
    `  : css`
      letter-spacing: 1px;
    `
    }
  }

  ${props =>
    props.isBig ?
      css`
        font-size: 22px;
        padding: 20px 50px;
        border-radius: 30px;
        letter-spacing: 3px;
        width: 50%;
        min-height: 62px;
        width: 50%;
        min-width: 800px;
        @media(max-width: 841px) {
          min-width: 0;
          width: 100%;
        }
    `  : css`
        font-size: 16px;
        padding: 5px 50px;
        border-radius: 20px;
        min-height: 26px;
    `
    }
`