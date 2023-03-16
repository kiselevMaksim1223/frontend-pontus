import React, {Children, FC, ReactNode, useEffect, useRef, useState} from 'react';
import {Arrow} from "../../../../styled-components/MainBlock/Rooms/Carousel/ArrowStyled";
import {
    CarouselMainContainer
} from "../../../../styled-components/MainBlock/Rooms/Carousel/CarouselMainContainerStyled";
import {WindowCarousel} from "../../../../styled-components/MainBlock/Rooms/Carousel/WindowCarouselStyled";
import {
    AllCarouselPageCont
} from "../../../../styled-components/MainBlock/Rooms/Carousel/AllCarouselPageConteinerStyled";

type carouselType = {
    children?: ReactNode
}

export const Carousel: FC<carouselType> = ({children}) => {

    const [pages, setPages] = useState<ReactNode | ReactNode[]>([])
    const [offset, setOffset] = useState(0)
    const [photoWidth, setPhotoWidth] = useState<number>(0)

    const ref = useRef<HTMLDivElement | null>(null)

    //make a list of photos
    useEffect(() => {
        setPages(Children.map(children, child => child))
    }, [children])

    useEffect(() => {
        if (ref.current) {
            setPhotoWidth(ref.current.offsetWidth)
            console.log(photoWidth)
        }
    })

    //slider to the right side
    const rightSlideHandle = () => {
        console.log("right slide")
        setOffset((currOffset) => {

            const newOffset = currOffset - photoWidth
            console.log(photoWidth, newOffset)
            const maxOffset = -(photoWidth * (Children.toArray(children).length - 1))
            console.log(newOffset, maxOffset)
            return Math.max(newOffset, maxOffset)
        })
    }
    //slider to the left side
    const leftSlideHandle = () => {
        console.log("left slide")
        setOffset((currOffset) => {
            const newOffset = currOffset + photoWidth
            return Math.min(newOffset, 0)
        })
    }

    return (
        <CarouselMainContainer>
            <Arrow side={"left"} onClick={leftSlideHandle}/>
            <WindowCarousel ref={ref}>
                <AllCarouselPageCont style={{transform: `translateX(${offset}px)`}}>
                    {pages}
                </AllCarouselPageCont>
            </WindowCarousel>
            <Arrow side={"right"} onClick={rightSlideHandle}/>
        </CarouselMainContainer>
    );
};








