import room1 from "../img/Rooms/1.jpg"
import room4 from "../img/Rooms/4.jpg"
import room8 from "../img/Rooms/8.jpg"
import room10 from "../img/Rooms/10.jpg"
import {v1} from "uuid";

type sliderDataType = Array<{id:string,img:string}>

export const sliderData:sliderDataType = [
    {id:v1(), img: room1},
    {id:v1(), img: room4},
    {id:v1(), img: room8},
    {id:v1(), img: room10},
]