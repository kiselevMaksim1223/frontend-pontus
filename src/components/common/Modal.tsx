import React, {FC, ReactNode, useEffect} from 'react';
import {ModalWrapperStyled} from "../../styled-components/common/Modal/ModalWrapper";
import {ModalContentStyled} from "../../styled-components/common/Modal/ModalContent";

export type modalPropsType = {
    active: boolean
    setActive: (active: boolean) => void
    children: ReactNode
}

export const Modal: FC<modalPropsType> = ({active, setActive, children}) => {

    const onMouseDownHandler = () => {
        setActive(false)
    }

    //scroll disable then modal window open
    useEffect(() => {
        active && (document.body.style.overflow = "hidden")
        !active && (document.body.style.overflow = "overlay")
    }, [active])


    return (
        <ModalWrapperStyled active={active} onMouseDown={onMouseDownHandler}>
            <ModalContentStyled active={active} onMouseDown={(e => e.stopPropagation())}>
                {children}
            </ModalContentStyled>
        </ModalWrapperStyled>
    );
};



