import React from 'react';
import {StyledWrapper} from "../../../styled-components/Wrapper";
import {StyledContainer} from "../../../styled-components/Container";
import {StyledTitle} from "../../../styled-components/Title";
import {StyledText} from "../../../styled-components/Text";
import {Carousel} from "./Carousel/Carousel";
import {FlexStyled} from "../../../styled-components/Flex";
import {CarouselItem} from "../../../styled-components/MainBlock/Rooms/Carousel/CarouselItemStyled";
import {sliderData} from "../../../api/sliderData";

export const Rooms = () => {
    return (
        <StyledWrapper>
            <StyledContainer>
                <FlexStyled justify={"space-between"} isMedia>
                    <StyledWrapper padding={"5px"} lineHeight={"1.6em"} width={["40%", "85%"]} isMedia>

                        <StyledTitle as={"h5"}>Rooms</StyledTitle>
                        <StyledText>
                            Multiple room options available, including:
                            <br/>
                            Single master suite
                            <br/>
                            Four beds per room
                        </StyledText>

                        <StyledTitle as={"h5"}>Perks</StyledTitle>
                        <StyledText>
                            TV, refrigerator, sofas to relax and hang out
                        </StyledText>

                        <StyledTitle as={"h5"}>
                            Relax and let us worry about your comfort
                        </StyledTitle>
                        <StyledText>
                            At Sochi Guest House, you have a variety of rooms to fit your needs. Starting from a single
                            room, up to 4 beds per room,
                            There is a good chance we will have something suitable for you.
                            If you have any special accomodation requirements, please feel free to contact us, and we
                            will
                            be happy to address them.
                        </StyledText>

                    </StyledWrapper>

                    <Carousel>
                        {sliderData.map(s => <CarouselItem key={s.id} url={s.img} />)}
                    </Carousel>
                </FlexStyled>
            </StyledContainer>
        </StyledWrapper>
    );
};



