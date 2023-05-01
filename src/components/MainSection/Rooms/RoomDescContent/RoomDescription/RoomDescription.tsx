import React, {FC} from "react";
import {roomsDescriptions, roomsDescriptionTitlesType} from "../../../../../data/RoomsData";

export const RoomDescription: FC<{ descTitle: roomsDescriptionTitlesType }> = ({descTitle}) => {
    return (
        <>
            {roomsDescriptions[descTitle.id].map(d => {
                return (
                    <div key={d.id}>{d.description}</div>
                )
            })}
        </>
    )
}