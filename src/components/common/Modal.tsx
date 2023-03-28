import React, {FC, ReactNode} from 'react';
import styled, {css} from "styled-components";

type modalPropsType = {
    active: boolean
    setActive: (active: boolean) => void
    children: ReactNode
}

const Modal: FC<modalPropsType> = ({active, setActive, children}) => {

    const onClickHandler = () => {
        setActive(false)
    }
    console.log(children)
    return (
        <ModalWrapper active={active} onClick={onClickHandler}>
            <ModalContent active={active} onClick={(e => e.stopPropagation())}>
                {/*{children && <ModalImg src={children as string} alt={"Pictures"}/>}*/}
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;

type activeModalType = {
    active: boolean
}

const ModalWrapper = styled.div<activeModalType>`
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

  ${props => props.active && css`
    opacity: 1;
    pointer-events: all;
    z-index: 100;
  `}
`

const ModalContent = styled.div<activeModalType>`
  width: auto;
  height: 80%;
  padding: 20px;
  border-radius: 12px;
  transform: scale(0.1);
  transition: .4s all;
  -webkit-transition: .4s all;
  -moz-transition: .4s all;
  -o-transition: .4s all;

  @media (max-width: 700px) {
    width: 80%;
    height: auto;
  }

  ${props => props.active && css`
    transform: scale(1);
  `
  }`
