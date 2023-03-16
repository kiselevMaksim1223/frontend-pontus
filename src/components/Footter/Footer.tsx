import React from 'react';
import {StyledWrapper} from "../../styled-components/Wrapper";
import {StyledContainer} from "../../styled-components/Container";
import {FlexStyled} from "../../styled-components/Flex";
import {Logo} from "../common/Logo/Logo";
import inst from "../../styled-components/Footer/icons/img/inst.png"
import fb from "../../styled-components/Footer/icons/img/fb.png"
import {StyledText} from "../../styled-components/Text";
import logoWhite from "../../img/Logo/pontusPogoWhite.png"

import {Icon} from "./icons/Icon";


export const Footer = () => {
    return (
        <StyledWrapper margin={"auto 0 0 0"} alignSelf={"bottom"} bottom={"0"} width={"100%"} position={"relative"} backgroundColor={"#2A2E49"}>
            <StyledContainer>
                <FlexStyled direction={"column"} align={"center"} rowGap={"2em"} padding={"2em"}>
                    <Logo src={logoWhite} width={"150px"}/>
                    <StyledWrapper>
                        <FlexStyled>
                            <Icon img={inst} link={"https://www.instagram.com/hotelpontus/"}/>
                            <Icon img={fb} link={"https://www.facebook.com/people/Hotel-Pontus/100063250899217/"}/>
                        </FlexStyled>
                    </StyledWrapper>
                    <div>
                        <StyledText>c2023 Hotel Pontus. All right reserved</StyledText>
                    </div>
                </FlexStyled>
            </StyledContainer>
        </StyledWrapper>
    );
};


