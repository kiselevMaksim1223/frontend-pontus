import React, {useState} from 'react';
import {StyledWrapper} from "../../../styled-components/Wrapper";
import {StyledTitle} from "../../../styled-components/Title";
import {Button} from "../../common/Button";
import burgerIcon from "../HeaderMobile/img/burger.svg"
import closeIcon from "../HeaderMobile/img/close.svg"
import {FlexStyled} from "../../../styled-components/Flex";
import {OpenedMenu} from "../../../styled-components/Header/MobileHeader/OpenedMenu";
import {LiStyled, UlStyled} from "../../../styled-components/Header/Nav/ULStyled";
import {NavLinkStyled} from "../../../styled-components/commonComponents/NavLink";
import {Logo} from "../HeaderDesktop/HeaderBottom/Logo/Logo";

export const HeaderMobile = () => {
    const [open, setOpen] = useState<boolean>(false)
    const openHandler = () => {
        setOpen(true)
        document.body.style.overflow = "hidden"
    }
    const closeHandler = () => {
        setOpen(false)
        document.body.style.overflow = "visible"
    }

    return (<>
            {
                open
                    ? <OpenedMenu>
                        <Button onClick={closeHandler} bcImg={closeIcon} buttonType={"burger"} margin={"15px"}/>
                        <Logo width={"220px"} margin={"5px"} onClick={closeHandler}/>
                        <UlStyled isColumn>
                            <LiStyled isColumn><NavLinkStyled to={"/about"} linktype={"primary"} onClick={closeHandler}
                                                              fontSize={"large"}>About</NavLinkStyled></LiStyled>
                            <LiStyled isColumn><NavLinkStyled to={"/rooms"} linktype={"primary"} onClick={closeHandler}
                                                              fontSize={"large"}>Rooms</NavLinkStyled></LiStyled>
                            <LiStyled isColumn><NavLinkStyled to={"/price"} linktype={"primary"} onClick={closeHandler}
                                                              fontSize={"large"}>Price</NavLinkStyled></LiStyled>
                            <LiStyled isColumn><NavLinkStyled to={"/gallery"} linktype={"primary"} onClick={closeHandler}
                                                              fontSize={"large"}>Gallery</NavLinkStyled></LiStyled>
                            <LiStyled isColumn><NavLinkStyled to={"/contacts"} linktype={"primary"} onClick={closeHandler}
                                                              fontSize={"large"}>Contacts</NavLinkStyled></LiStyled>
                        </UlStyled>
                    </OpenedMenu>
                    : <StyledWrapper padding={"0.5em 0.2em"} backgroundColor={"#2A2E49"}>
                        <FlexStyled justify={"space-between"}>
                            <StyledTitle color={"white"}>Hotel Pontus</StyledTitle>
                            <Button onClick={openHandler} bcImg={burgerIcon} buttonType={"burger"}/>
                        </FlexStyled>
                    </StyledWrapper>

            }

        </>
    );
};

