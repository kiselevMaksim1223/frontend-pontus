import React from 'react';
import {StyledWrapper} from "../../../styled-components/Wrapper";
import {StyledContainer} from "../../../styled-components/Container";
import {FlexStyled} from "../../../styled-components/Flex";
import styled from "styled-components";
import {galleryData} from "../../../api/galleryData";
import {useLocation} from "react-router-dom";
import {StyledTitle} from "../../../styled-components/Title";

export const Gallery = () => {
    const location = useLocation()
    const pathName = location.pathname.replace("/", "")[0].toUpperCase() + location.pathname.replace("/", "").slice(1)

    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledTitle as={"h2"} fontSize={"65px"} margin={"1em 0"} textAlign={"center"} color={"#2A2E49"}>
                    {pathName}
                </StyledTitle>
                <FlexStyled media flexWrap={"wrap"} columnGap={"2em"} rowGap={"2em"} margin={"3em auto"} align={"center"} justify={"space-between"}>
                    {galleryData.map(i => {
                        return(
                            <GalleryItem src={i.img} width={i.proportions === "wide" ? 240 : 180} height={i.proportions === "wide" ? 180 : 240}/>
                        )
                    })}
                </FlexStyled>
            </StyledContainer>
        </StyledWrapper>
    );
};



const GalleryItem = styled.img`
  max-width: 100%;
`

