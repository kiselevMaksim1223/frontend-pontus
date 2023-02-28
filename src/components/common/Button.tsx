import React from "react";
import {StyledButton} from "../../styled-components/commonComponents/Button";


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
        <StyledButton onClick={onClickHandler} {...props}/>
    );
};