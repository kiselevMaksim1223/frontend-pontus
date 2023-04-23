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
        {id: v1(), description: "There is four rooms in our mini hotel. Each room has:"},
        {id: v1(), description: "Own little kitchen"},
        {id: v1(), description: "One two-sleep or two one-sleep beds"},
        {id: v1(), description: "Sofa to relax"},
    ],
    [headTitleId2]: [
        {id: v1(), description: "TV"},
        {id: v1(), description: "Refrigerator"},
        {id: v1(), description: "Room air conditioner"},
        {id: v1(), description: "Gas heater (for the cold days)"},
        {id: v1(), description: "Washing machine"},
        {id: v1(), description: "WI-FI"},
        {id: v1(), description: "Gas..."},
    ],
    [headTitleId3]: [
        {
            id:v1(),
            description: "At Hotel Pontus, you always feel comfort. " +
                "All our rooms are comfortable and made for people relax. " +
                "It`s only five minutes walk to the central beach of Kobuleti. "+
                "There is a good chance we will have something suitable for you. " +
                "If you have any special accomodation requirements, please feel free to contact us, and we will be happy to address them."}
    ],
}