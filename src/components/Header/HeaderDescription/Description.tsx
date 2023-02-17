import React from 'react';
import {Title} from "../../../styled-components/Title";
import {Flex} from "../../../styled-components/Flex";
import {StyledText} from "../../../styled-components/Text";
import {LinkStyled} from "../../../styled-components/Header/Nav/LinkStyled";
import {StyledWrapper} from "../../../styled-components/Wrapper";

export const Description = () => {
    return (
        <Flex columnGap={"2em"} align={"center"}>
            <Title color={"white"}>Hotel Pontus</Title>
            <StyledText width={"50%"} color={"white"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <StyledWrapper padding={"0.3em 0"}>
                    <LinkStyled>+995 123 456 789</LinkStyled>
                </StyledWrapper >
                <StyledWrapper padding={"0.3em 0"}>
                    <LinkStyled>+995 123 456 789</LinkStyled>
                </StyledWrapper>
            </StyledText>
        </Flex>
    );
};

