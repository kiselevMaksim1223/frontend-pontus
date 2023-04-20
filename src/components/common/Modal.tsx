import React, {FC, ReactNode, useEffect} from 'react';
import styled, {css} from "styled-components";

type modalPropsType = {
    active: boolean
    setActive: (active: boolean) => void
    children: ReactNode
}

const Modal: FC<modalPropsType> = ({ active, setActive, children}) => {

    const onMouseDownHandler = () => {
        setActive(false)
    }

    useEffect(()=>{                      //scroll disable then modal window open
        active && (document.body.style.overflow = "hidden")
        !active && (document.body.style.overflow = "overlay")
    }, [active])


    // console.log(children)
    return (
        <ModalWrapper active={active} onMouseDown={onMouseDownHandler}>
            <ModalContent active={active} onMouseDown={(e => e.stopPropagation())}>
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

const ModalContent = styled.div<activeModalType>`
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

  ${props => props.active && css`
    transform: scale(1);
  `
  }`
