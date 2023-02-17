import React from 'react';
import styled, {css} from "styled-components";

type propsType ={
    children?:React.ReactNode
    buttonType?: "primary" | "secondary"
    onClick: () => void
    margin?:string
}

export const Button:React.FC<propsType> = ({onClick, ...props}) => {
    const onClickHandler = () => {
        onClick()
    }
    return (
        <StyledButton onClick={onClickHandler} {...props}/>
    );
};

const StyledButton = styled.button<propsType>`
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
`