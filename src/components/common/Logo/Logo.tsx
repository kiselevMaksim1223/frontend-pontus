import React, {FC} from 'react';
import {StyledImg} from "../../../styled-components/Header/Logo/StyledImg";
import {NavLink} from "react-router-dom";

type logoPropsType = {
    src:string
    width:string
    margin?:string
    onClick?:() => void
}

export const Logo:FC<logoPropsType> = ({src, width, margin, onClick}) => {
    return (
        <NavLink to={"/"}>
            <StyledImg src={src} alt="Logo" width={width} margin={margin} onClick={onClick}/>
        </NavLink>
    );
};


