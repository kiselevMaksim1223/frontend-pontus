import styled, {css} from "styled-components";
import {modalPropsType} from "../../../components/common/Modal";

export const ModalContentStyled = styled.div<Pick<modalPropsType, 'active'>>`
  width: auto;
  height: 80%;
  padding: 20px;
  border-radius: 12px;
  transform: scale(0.1);
  transition: .4s all;

  @media (max-width: 700px) {
    //width: auto;
    height: auto;
  }

  ${({active}) => active && css`
    transform: scale(1);
  `
}`