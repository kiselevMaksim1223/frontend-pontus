import React, {FC} from 'react';
import logo from "./img/Pontus.jpg"
import {StyledImg} from "../../../../../styled-components/Header/Logo/StyledImg";
import {NavLink} from "react-router-dom";

type logoPropsType = {
    width:string
    margin?:string
    onClick?:() => void
}

export const Logo:FC<logoPropsType> = ({width, margin, onClick}) => {
    return (
        <NavLink to={"/"}>
            <StyledImg src={logo} alt="Logo" width={width} margin={margin} onClick={onClick}/>
        </NavLink>
    );
};


