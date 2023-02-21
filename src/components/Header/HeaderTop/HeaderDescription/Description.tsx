import React from 'react';
import {StyledTitle} from "../../../../styled-components/Title";
import {FlexStyled} from "../../../../styled-components/Flex";
import {StyledText} from "../../../../styled-components/Text";
import {LinkStyled} from "../../../../styled-components/Header/Nav/LinkStyled";
import {StyledWrapper} from "../../../../styled-components/Wrapper";

export const Description = () => {
    return (
        <FlexStyled columnGap={"2em"} align={"center"}>
            <StyledTitle color={"white"}>Hotel Pontus</StyledTitle>
            <StyledText width={"50%"} color={"white"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <StyledWrapper padding={"0.3em 0"}>
                    <LinkStyled type={"primary"}>+995 123 456 789</LinkStyled>
                </StyledWrapper >
                <StyledWrapper padding={"0.3em 0"}>
                    <LinkStyled type={"primary"}>+995 123 456 789</LinkStyled>
                </StyledWrapper>
            </StyledText>
        </FlexStyled>
    );
};

