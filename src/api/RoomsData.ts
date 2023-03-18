import {v1} from "uuid";

type roomType = {
    id: string
    description: string
}

type roomsDescriptionsType = {
    [p: string]: roomType[]
}

type roomsDescriptionTitlesType = {id:string, title:string}

const headTitleId1 = v1()
const headTitleId2 = v1()
const headTitleId3 = v1()

export const roomsDescriptionTitles:roomsDescriptionTitlesType[] = [
    {id:headTitleId1, title: "Rooms"},
    {id:headTitleId2, title: "Perks"},
    {id:headTitleId3, title: "Relax and let us worry about your comfort"}
]
export const roomsDescriptions:roomsDescriptionsType = {
    [headTitleId1]: [
        {id: v1(), description: "Multiple room options available, including:"},
        {id: v1(), description: "Single master suite"},
        {id: v1(), description: "Four beds per room"},
    ],
    [headTitleId2]: [
        {id: v1(), description: "TV"},
        {id: v1(), description: "Refrigerator"},
        {id: v1(), description: "Sofas to relax and hang out"},
        {id: v1(), description: "Room air conditioner"},
        {id: v1(), description: "WI-FI"},
        {id: v1(), description: "Gas..."},
    ],
    [headTitleId3]: [
        {id:v1(), description: "At Hotel Pontus, you have a variety of rooms to fit your needs. Starting from a single room, up to 4 beds per room. There is a good chance we will have something suitable for you.If you have any special accomodation requirements, please feel free to contact us, and we will be happy to address them."}
    ],
}