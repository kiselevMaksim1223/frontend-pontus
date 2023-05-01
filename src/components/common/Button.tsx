import React from "react";
import {ButtonStyled} from "../../styled-components/common/Button";


export type propsType ={
    children?:React.ReactNode
    buttonType?: "primary" | "secondary" | "burger"
    margin?:string
    bcImg?:string

    onClick: () => void
}

export const Button:React.FC<propsType> = ({onClick, ...props}) => {
    const onClickHandler = () => {
        onClick()
    }
    return (
        <ButtonStyled onClick={onClickHandler} {...props}/>
    );
};