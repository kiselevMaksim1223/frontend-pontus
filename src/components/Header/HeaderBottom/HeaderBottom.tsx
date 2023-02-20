import React from 'react';
import {StyledContainer} from "../../../styled-components/Container";
import {Flex} from "../../../styled-components/Flex";
import {Logo} from "./Logo/Logo";
import {Nav} from "./Nav/Nav";
import {StyledWrapper} from "../../../styled-components/Wrapper";

export const HeaderBottom = () => {
    return (
        <StyledWrapper padding={"1em 0.2em"}>
            <StyledContainer>
                <Flex justify={"space-between"}>
                    <Logo/>
                    <Nav/>
                </Flex>
            </StyledContainer>
        </StyledWrapper>
    );
};

