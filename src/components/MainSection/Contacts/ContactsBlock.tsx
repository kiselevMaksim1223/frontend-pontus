import React from 'react';
import {StyledTitle} from "../../../styled-components/Title";
import {StyledText} from "../../../styled-components/Text";
import {LinkStyled} from "../../../styled-components/Header/Nav/LinkStyled";
import {ContactInfoContainer, ContactInfoWrapper} from "../../../styled-components/MainBlock/Contacts/ContactInfoBlock";
import {DirectionButton} from "../../../styled-components/MainBlock/Gallery/DirectionButton";


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

                <DirectionButton target={"_blank"}
                                 href={"https://www.google.com/maps/dir//Hotel+Pontus,+75+Shota+Rustaveli+street,+Kobuleti+6200/@41.8163019,41.775987,17.64z/data=!4m9!4m8!1m0!1m5!1m1!1s0x405d77fe9fbc9a3d:0x802ae76dca741152!2m2!1d41.7769898!2d41.8166034!3e2"}>
                    Directions
                </DirectionButton>
        </ContactInfoContainer>

    );
};

export default ContactsBlock;

