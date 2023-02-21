import React from 'react';
import {StyledContainer} from "../../../styled-components/Container";
import {FlexStyled} from "../../../styled-components/Flex";
import {Description} from "./HeaderDescription/Description";
import {Button} from "../../common/Button";
import {StyledWrapper} from "../../../styled-components/Wrapper";

export const HeaderTop = () => {
    return (
        <StyledWrapper padding={"1em 0.2em"} backgroundColor={"#2A2E49"}>
            <StyledContainer>
                <FlexStyled align={"center"}>
                    <Description/>
                    <Button buttonType={"secondary"} margin={"0 0 0 auto"} onClick={() => {}}>
                        Text us please!
                    </Button>
                </FlexStyled>
            </StyledContainer>
        </StyledWrapper>
    );
};

