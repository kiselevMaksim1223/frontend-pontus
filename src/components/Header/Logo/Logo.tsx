import React from 'react';
import logo from "./img/Pontus.jpg"
import {StyledImg} from "../../../styled-components/Header/Logo/StyledImg";



export const Logo = () => {
    return (
        <a href={"/dsa"}>
            <StyledImg src={logo} alt="Logo"/>
            {/*<Title asType={"h2"} color={"white"}>PONTUS</Title>*/}
        </a>
    );
};


