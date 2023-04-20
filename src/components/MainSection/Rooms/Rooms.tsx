import React from 'react';
import {StyledWrapper} from "../../../styled-components/Wrapper";
import {StyledContainer} from "../../../styled-components/Container";
import {StyledTitle} from "../../../styled-components/Title";
import {Carousel} from "./Carousel/Carousel";
import {FlexStyled} from "../../../styled-components/Flex";
import {CarouselItem} from "../../../styled-components/MainBlock/Rooms/Carousel/CarouselItemStyled";
import {sliderData} from "../../../api/sliderData";
import {roomsDescriptionTitles, roomsDescriptions} from "../../../api/RoomsData";

export const Rooms = () => {
    return (
        <StyledWrapper>
            <StyledContainer>
                <FlexStyled justify={"space-between"} isMedia>
                    <StyledWrapper padding={"5px"} lineHeight={"1.6em"} width={["40%", "85%"]} isMedia>
                        {roomsDescriptionTitles.map((t => {
                            return (<>
                                    <StyledTitle key={t.id} as={"h4"}>{t.title}</StyledTitle>
                                    <ul key={t.title} style={{listStyleType:"none"}} >
                                        {roomsDescriptions[t.id].map(d => {
                                            return(
                                                <li key={d.id}>{d.description}</li>
                                            )
                                        })}
                                    </ul>
                                </>
                            )
                        }))}
                    </StyledWrapper>

                    <Carousel>
                        {sliderData.map(s => <CarouselItem key={s.id} url={s.img}/>)}
                    </Carousel>

                </FlexStyled>
            </StyledContainer>
        </StyledWrapper>
    );
};