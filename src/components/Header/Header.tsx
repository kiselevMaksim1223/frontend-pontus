import React from 'react';
import {StyledContainer} from "../../styled-components/Container";
import {Flex} from "../../styled-components/Flex";
import {Logo} from "./Logo/Logo";
import {Nav} from "./Nav/Nav";
import {StyledWrapper} from "../../styled-components/Wrapper";
import {Description} from "./HeaderDescription/Description";
import {Button} from "../../styled-components/commonComponents/Button";



export const Header = () => {
    return (
        <>
            <StyledWrapper  backgroundColor={"#2A2E49"}>
                <StyledContainer>
                    <Flex align={"center"}>
                        <Description/>
                        <Button buttonType={"secondary"} margin={"0 0 0 auto"} onClick={() => {}}>
                            Text us please!
                        </Button>
                    </Flex>
                </StyledContainer>
            </StyledWrapper>

            <StyledWrapper>
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

