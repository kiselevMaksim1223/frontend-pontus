import React from 'react';
import {ContainerStyled} from "../../../styled-components/Container";
import {TitleStyled} from "../../../styled-components/Title";
import {WrapperStyled} from "../../../styled-components/Wrapper";
import ContactsBlock from "./ContactsBlock";
import {GridWrapper} from "../../../styled-components/MainBlock/Contacts/GridWrapper";
import {GoogleMapBlock} from "./GoogleMap/GoogleMapBlock";


export const Contacts = () => {
    return (
        <ContainerStyled>
            <WrapperStyled>
                <TitleStyled as={"h2"} color={"#2A2E49"} margin={"0 0 1em 0"} textAlign={"center"} fontSize={"45px"}>Contact information</TitleStyled>
                <GridWrapper gridTemplate={"33% 1fr"} gap={"2em"}>
                    <ContactsBlock/>
                    <GoogleMapBlock/>
                </GridWrapper>
            </WrapperStyled>
        </ContainerStyled>
    );
};



