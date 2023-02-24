import React, {FC} from 'react';
import {StyledImg} from "../../../styled-components/Header/Logo/StyledImg";
import {LinkStyled} from "../../../styled-components/Header/Nav/LinkStyled";
import {StyledImgContainer} from "../../../styled-components/Footer/icons/IconContainer";

type iconType = {
    img:string
    link:string | undefined
}

export const Icon:FC<iconType> = ({img, link}) => {
    return (
        <StyledImgContainer padding={"7px 7px 0px 7px"} width={"45px"} margin={"0 10px"}>
            <StyledImg src={img} width={"100%"}/>
            <LinkStyled type={"icon"} href={link}
                        target={"_blank"}></LinkStyled>
        </StyledImgContainer>
    );
};

