import React, {FC} from 'react';
import {ImgStyled} from "../../../styled-components/Header/Logo/ImgStyled";
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
            <ImgStyled src={src} alt="Logo" width={width} margin={margin} onClick={onClick}/>
        </NavLink>
    );
};


