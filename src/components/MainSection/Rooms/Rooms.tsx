import React from 'react';
import {WrapperStyled} from "../../../styled-components/Wrapper";
import {ContainerStyled} from "../../../styled-components/Container";
import {Carousel} from "./Carousel/Carousel";
import {FlexStyled} from "../../../styled-components/Flex";
import {CarouselItem} from "../../../styled-components/MainBlock/Rooms/Carousel/CarouselItemStyled";
import {sliderData} from "../../../data/sliderData";
import {roomsDescriptionTitles} from "../../../data/RoomsData";
import {RoomDescContent} from "./RoomDescContent/RoomDescContent";

export const Rooms = () => {
    return (
        <WrapperStyled>
            <ContainerStyled>
                <FlexStyled justify={"space-between"} isMedia>
                    <WrapperStyled padding={"5px"} lineHeight={"1.6em"} width={["40%", "85%"]} isMedia>
                        {roomsDescriptionTitles.map(((t) => <RoomDescContent key={t.id} descTitle={t}/>))}
                    </WrapperStyled>

                    <Carousel>
                        {sliderData.map(s => <CarouselItem key={s.id} url={s.img}/>)}
                    </Carousel>

                </FlexStyled>
            </ContainerStyled>
        </WrapperStyled>
    );
};




