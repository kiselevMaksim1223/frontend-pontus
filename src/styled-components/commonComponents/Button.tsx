import styled, {css} from "styled-components";
import {propsType} from "../../components/common/Button";

export const StyledButton = styled.button<propsType>`
  min-height: 2.5em;
  background-color: #2a2e49;
  color: #fff;
  border: none;
  padding: 0.5em 1.5em;
  border-radius: 0.5em;
  font-size: 1.1rem;
  cursor: pointer;
  margin: ${(props) => props.margin};

  &:hover {
    background-color: white;
    color: #2a2e49;
    border: 1px solid #2a2e49;
  }

  &:active {
    background-color: #2a2e49;
    color: white;
    border: 1px solid #2a2e49;
  }

  ${(props) =>
          props.buttonType === "secondary" &&
          css`
            background-color: white;
            color: #2a2e49;
            border: 1px solid #2a2e49;

            &:hover {
              background-color: #2a2e49;
              color: #fff;
              border: 1px solid #fff;
            }

            &:active {
              background-color: white;
              color: #2a2e49;
            }
          `}
  ${(props) =>
          props.buttonType === "burger" &&
          css<propsType>`
            background: url("${props => props.bcImg}") no-repeat center / contain;
            align-self: flex-end;
            &:active {
              border: 1px solid white;
              color: #2a2e49;
              background: white;
            }
            &:hover{
              border: 1px solid white;
              
            }
          `
  }
`