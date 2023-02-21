import React from 'react';
import logo from "./img/Pontus.jpg"
import {StyledImg} from "../../../../styled-components/Header/Logo/StyledImg";
import {NavLink} from "react-router-dom";



export const Logo = () => {
    return (
        <NavLink to={"/"}>
            <StyledImg src={logo} alt="Logo" width={"150px"}/>
            {/*<Title asType={"h2"} color={"white"}>PONTUS</Title>*/}
        </NavLink>
    );
};


