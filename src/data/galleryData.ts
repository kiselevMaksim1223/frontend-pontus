import {v1} from "uuid";
import photo1 from "./img/Gallery/1.jpg"
import photo2 from "./img/Gallery/2.jpg"
import photo3 from "./img/Gallery/3.jpg"
import photo4 from "./img/Gallery/4.jpg"
import photo5 from "./img/Gallery/5.jpg"
import photo6 from "./img/Gallery/6.jpg"
import photo7 from "./img/Gallery/7.jpg"
import photo8 from "./img/Gallery/8.jpg"
import photo9 from "./img/Gallery/9.jpg"
import photo10 from "./img/Gallery/10.jpg"
import photo11 from "./img/Gallery/11.jpg"
import photo12 from "./img/Gallery/12.jpg"
import photo13 from "./img/Gallery/13.jpg"
import photo14 from "./img/Gallery/14.jpg"

export type galleryItemType = {
    id:string
    img:string
    proportions: string
}

export const galleryData:galleryItemType[] = [
    {id:v1(), img:photo1, proportions: "wide"},
    {id:v1(), img:photo2, proportions: "wide"},
    {id:v1(), img:photo3, proportions: "wide"},
    {id:v1(), img:photo4, proportions: "wide"},
    {id:v1(), img:photo5, proportions: "narrow"},
    {id:v1(), img:photo6, proportions: "narrow"},
    {id:v1(), img:photo7, proportions: "narrow"},
    {id:v1(), img:photo8, proportions: "narrow"},
    {id:v1(), img:photo9, proportions: "narrow"},
    {id:v1(), img:photo10, proportions: "wide"},
    {id:v1(), img:photo11, proportions: "narrow"},
    {id:v1(), img:photo12, proportions: "narrow"},
    {id:v1(), img:photo13, proportions: "wide"},
    {id:v1(), img:photo14, proportions: "narrow"},
]