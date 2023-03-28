import React from 'react';
import {StyledContainer} from "../../../styled-components/Container";
import {StyledTitle} from "../../../styled-components/Title";
import {StyledWrapper} from "../../../styled-components/Wrapper";
import ContactsBlock from "./ContactsBlock";
import {GridWrapper} from "../../../styled-components/MainBlock/Contacts/GridWrapper";
import {GoogleMapBlock} from "./GoogleMap/GoogleMapBlock";


export const Contacts = () => {
    return (
        <StyledContainer>
            <StyledWrapper>
                <StyledTitle as={"h2"} color={"#2A2E49"} margin={"0 0 1em 0"} textAlign={"center"} fontSize={"45px"}>Contact information</StyledTitle>
                <GridWrapper gridTemplate={"33% 1fr"} gap={"2em"}>
                    <ContactsBlock/>
                    <GoogleMapBlock/>
                </GridWrapper>
            </StyledWrapper>
        </StyledContainer>
    );
};



