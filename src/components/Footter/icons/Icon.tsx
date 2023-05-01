import React, {FC} from 'react';
import {ImgStyled} from "../../../styled-components/Header/Logo/ImgStyled";
import {LinkStyled} from "../../../styled-components/Header/Nav/LinkStyled";
import {ImgContainerStyled} from "../../../styled-components/Footer/icons/IconContainer";

type iconType = {
    img: string
    link: string | undefined
}

export const Icon: FC<iconType> = ({img, link}) => {
    return (
        <ImgContainerStyled padding={"7px 7px 0px 7px"} width={"45px"} margin={"0 10px"}>
            <ImgStyled src={img} width={"100%"}/>
            <LinkStyled
                type={"icon"}
                href={link}
                target={"_blank"}>
            </LinkStyled>
        </ImgContainerStyled>
    );
};

