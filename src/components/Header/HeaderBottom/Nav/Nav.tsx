import React from 'react';
import {LiStyled, UlStyled} from "../../../../styled-components/Header/Nav/ULStyled";
import {NavLinkStyled} from "../../../../styled-components/commonComponents/NavLink";

export const Nav = () => {
    return (
        <UlStyled>
            <LiStyled><NavLinkStyled to={"/about"} linkStyle={"secondary"}>About</NavLinkStyled></LiStyled>
            <LiStyled><NavLinkStyled to={"/rooms"} linkStyle={"secondary"}>Rooms</NavLinkStyled></LiStyled>
            <LiStyled><NavLinkStyled to={"/price"} linkStyle={"secondary"}>Price</NavLinkStyled></LiStyled>
            <LiStyled><NavLinkStyled to={"/gallery"} linkStyle={"secondary"}>Gallery</NavLinkStyled></LiStyled>
            <LiStyled><NavLinkStyled to={"/contacts"} linkStyle={"secondary"}>Contacts</NavLinkStyled></LiStyled>
        </UlStyled>
    );
};




