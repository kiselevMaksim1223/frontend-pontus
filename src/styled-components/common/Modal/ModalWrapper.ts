import styled, {css} from "styled-components";
import {modalPropsType} from "../../../components/common/Modal";

export const ModalWrapperStyled = styled.div<Pick<modalPropsType, 'active'>>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;

  ::after, ::before {
    content: "";
    position: absolute;
    top: 7%;
    right: 12%;
    width: 40px;
    height: 3px;
    transform: rotate(45deg);
    background: #ffffff;
    cursor: pointer;
  }

  ::before {
    transform: rotate(-45deg);
  }

  ${({active}) => active && css`
    opacity: 1;
    pointer-events: all;
    z-index: 100;
  `}
`