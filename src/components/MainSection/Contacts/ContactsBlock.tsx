import React from 'react';
import {StyledTitle} from "../../../styled-components/Title";
import {StyledText} from "../../../styled-components/Text";
import {LinkStyled} from "../../../styled-components/Header/Nav/LinkStyled";
import {ContactInfoContainer, ContactInfoWrapper} from "../../../styled-components/MainBlock/Contacts/ContactInfoBlock";


const ContactsBlock = () => {
    return (
        <ContactInfoContainer>
            <ContactInfoWrapper>
                <StyledTitle as={"h3"}>Address</StyledTitle>
                <StyledText>Shota Rustaveli 75 , Kobuleti, Georgia</StyledText>
            </ContactInfoWrapper>
            <ContactInfoWrapper>
                <StyledTitle as={"h3"}>Phone</StyledTitle>
                <LinkStyled type={"secondary"}>+995 123 456 789 </LinkStyled>
                <span>(What`s up, Viber)</span>
            </ContactInfoWrapper>
            <ContactInfoWrapper>
                <StyledTitle as={"h3"}>E-mail</StyledTitle>
                <LinkStyled type={"secondary"}
                            href={"mailto:hotelpontus@gmail.com"}>hotelpontus@gmail.com</LinkStyled>
            </ContactInfoWrapper>
        </ContactInfoContainer>
    );
};

export default ContactsBlock;