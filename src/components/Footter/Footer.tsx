import React from 'react';
import {StyledWrapper} from "../../styled-components/Wrapper";
import {StyledContainer} from "../../styled-components/Container";
import {FlexStyled} from "../../styled-components/Flex";
import {Logo} from "../Header/HeaderBottom/Logo/Logo";
import {StyledImg} from "../../styled-components/Header/Logo/StyledImg";
import inst from "../../styled-components/Footer/icons/img/inst.png"
import fb from "../../styled-components/Footer/icons/img/fb.png"
import {LinkStyled} from "../../styled-components/Header/Nav/LinkStyled";
import {StyledText} from "../../styled-components/Text";
import {StyledImgContainer} from "../../styled-components/Footer/icons/IconContainer";


export const Footer = () => {
    return (
        <StyledWrapper bottom={"0"} width={"100%"} position={"relative"} backgroundColor={"#2A2E49"}>
            <StyledContainer>
                <FlexStyled direction={"column"} align={"center"} rowGap={"2em"} padding={"2em"}>
                    <Logo/>
                    <StyledWrapper>
                        <FlexStyled>
                            <StyledImgContainer padding={"7px 7px 0px 7px"} width={"45px"} margin={"0 10px"}>
                                <StyledImg src={inst} width={"100%"}/>
                                <LinkStyled type={"icon"} href={"https://www.instagram.com/hotelpontus/"}
                                            target={"_blank"}></LinkStyled>
                            </StyledImgContainer>
                            <StyledImgContainer padding={"7px 7px 0px 7px"} width={"45px"} margin={"0 10px"}>
                                <StyledImg src={fb} width={"100%"}/>
                                <LinkStyled type={"icon"}
                                            href={"https://www.facebook.com/people/Hotel-Pontus/100063250899217/"}
                                            target={"_blank"}></LinkStyled>
                            </StyledImgContainer>
                        </FlexStyled>
                    </StyledWrapper>
                    <div>
                        <StyledText>@2023 Hotel Pontus. All right reserved</StyledText>
                    </div>
                </FlexStyled>
            </StyledContainer>
        </StyledWrapper>
    );
};


