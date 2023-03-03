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
                <StyledTitle as={"h2"} color={"#2A2E49"} margin={"1em 0"}>Contact information</StyledTitle>
                <GridWrapper gridTemplateColumn={"33% 1fr"} gap={"2em"}>
                    <ContactsBlock/>
                    <GoogleMapBlock/>
                </GridWrapper>
            </StyledWrapper>
        </StyledContainer>
    );
};



