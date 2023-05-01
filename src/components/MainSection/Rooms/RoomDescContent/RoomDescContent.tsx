import React, {FC} from "react";
import {roomsDescriptionTitlesType} from "../../../../data/RoomsData";
import {TitleStyled} from "../../../../styled-components/Title";
import {RoomDescription} from "./RoomDescription/RoomDescription";

export const RoomDescContent: FC<{ descTitle: roomsDescriptionTitlesType }> = ({descTitle}) => {
    return(
        <>
            <TitleStyled as={"h4"}>{descTitle.title}</TitleStyled>
            <RoomDescription descTitle={descTitle}/>
        </>
    )
}