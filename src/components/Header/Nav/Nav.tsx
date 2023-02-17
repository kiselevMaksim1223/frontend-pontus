import React from 'react';
import {LiStyled, UlStyled} from "../../../styled-components/Header/Nav/ULStyled";
import {LinkStyled} from "../../../styled-components/Header/Nav/LinkStyled";

export const Nav = () => {
    return (
        <UlStyled>
            <LiStyled><LinkStyled linkStyle={"secondary"}>About</LinkStyled></LiStyled>
            <LiStyled><LinkStyled linkStyle={"secondary"}>Rooms</LinkStyled></LiStyled>
            <LiStyled><LinkStyled linkStyle={"secondary"}>Price</LinkStyled></LiStyled>
            <LiStyled><LinkStyled linkStyle={"secondary"}>Gallery</LinkStyled></LiStyled>
            <LiStyled><LinkStyled linkStyle={"secondary"}>Contacts</LinkStyled></LiStyled>
        </UlStyled>
    );
};




