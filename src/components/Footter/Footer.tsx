import React from 'react';
import {WrapperStyled} from "../../styled-components/Wrapper";
import {ContainerStyled} from "../../styled-components/Container";
import {FlexStyled} from "../../styled-components/Flex";
import {Logo} from "../common/Logo/Logo";
import inst from "../../styled-components/Footer/icons/img/inst.png"
import fb from "../../styled-components/Footer/icons/img/fb.png"
import {TextStyled} from "../../styled-components/Text";
import logoWhite from "../../data/img/Logo/pontusPogoWhite.png"
import {Icon} from "./icons/Icon";

export const Footer = () => {
    return (
        <WrapperStyled margin={"auto 0 0 0"} alignSelf={"bottom"} bottom={"0"} width={"100%"} position={"relative"} backgroundColor={"#2A2E49"}>
            <ContainerStyled>
                <FlexStyled direction={"column"} align={"center"} rowGap={"2em"} padding={"2em"}>
                    <Logo src={logoWhite} width={"150px"}/>
                    <WrapperStyled>
                        <FlexStyled>
                            <Icon img={inst} link={"https://www.instagram.com/hotelpontus/"}/>
                            <Icon img={fb} link={"https://www.facebook.com/people/Hotel-Pontus/100063250899217/"}/>
                        </FlexStyled>
                    </WrapperStyled>
                    <div>
                        <TextStyled color={"white"}>2023 Hotel Pontus. All right reserved</TextStyled>
                    </div>
                </FlexStyled>
            </ContainerStyled>
        </WrapperStyled>
    );
};
