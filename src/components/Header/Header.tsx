import React from 'react';
import {StyledContainer} from "../../styled-components/Container";
import {Flex} from "../../styled-components/Flex";
import {Logo} from "./Logo/Logo";
import {Nav} from "./Nav/Nav";
import {StyledWrapper} from "../../styled-components/Wrapper";
import {Description} from "./HeaderDescription/Description";
import {Button} from "../common/Button";




export const Header = () => {
    return (
        <>
            <StyledWrapper padding={"1em 0.2em"} backgroundColor={"#2A2E49"}>
                <StyledContainer>
                    <Flex align={"center"}>
                        <Description/>
                        <Button buttonType={"secondary"} margin={"0 0 0 auto"} onClick={() => {}}>
                            Text us please!
                        </Button>
                    </Flex>
                </StyledContainer>
            </StyledWrapper>

            <StyledWrapper padding={"1em 0.2em"}>
                <StyledContainer>
                    <Flex justify={"space-between"}>
                        <Logo/>
                        <Nav/>
                    </Flex>
                </StyledContainer>
            </StyledWrapper>
        </>
    );
};

