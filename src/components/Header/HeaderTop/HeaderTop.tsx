import React from 'react';
import {StyledContainer} from "../../../styled-components/Container";
import {Description} from "./HeaderDescription/Description";
import {StyledWrapper} from "../../../styled-components/Wrapper";

export const HeaderTop = () => {
    return (
        <StyledWrapper padding={"1em 0.2em"} backgroundColor={"#2A2E49"}>
            <StyledContainer>
                    <Description/>
            </StyledContainer>
        </StyledWrapper>
    );
};

