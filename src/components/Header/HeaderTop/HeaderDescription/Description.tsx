import React from 'react';
import {StyledTitle} from "../../../../styled-components/Title";
import {FlexStyled} from "../../../../styled-components/Flex";
import {StyledText} from "../../../../styled-components/Text";
import {LinkStyled} from "../../../../styled-components/Header/Nav/LinkStyled";
import {Button} from "../../../common/Button";

export const Description = () => {
    return (
        <FlexStyled columnGap={"2em"} align={"center"}>
            <StyledTitle color={"white"}>Hotel Pontus</StyledTitle>
            <StyledText width={"40%"} color={"white"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br/>
                    <LinkStyled type={"primary"}>+995 123 456 789</LinkStyled>
                <br/>
                    <LinkStyled type={"primary"}>+995 123 456 789</LinkStyled>
            </StyledText>
            <Button buttonType={"secondary"} margin={"0 0 0 auto"} onClick={() => {}}>
                Text us please!
            </Button>
        </FlexStyled>
    );
};

