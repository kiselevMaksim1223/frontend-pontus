import React from 'react';
import {LiStyled, UlStyled} from "../../../../styled-components/Header/Nav/ULStyled";
import {NavLinkStyled} from "../../../../styled-components/commonComponents/NavLink";

export const Nav = () => {
    return (
        <UlStyled>
            <LiStyled><NavLinkStyled to={"/about"} linktype={"secondary"}>About</NavLinkStyled></LiStyled>
            <LiStyled><NavLinkStyled to={"/rooms"} linktype={"secondary"}>Rooms</NavLinkStyled></LiStyled>
            <LiStyled><NavLinkStyled to={"/price"} linktype={"secondary"}>Price</NavLinkStyled></LiStyled>
            <LiStyled><NavLinkStyled to={"/gallery"} linktype={"secondary"}>Gallery</NavLinkStyled></LiStyled>
            <LiStyled><NavLinkStyled to={"/contacts"} linktype={"secondary"}>Contacts</NavLinkStyled></LiStyled>
        </UlStyled>
    );
};




