import React, {Children, FC, ReactNode, useEffect, useRef, useState} from 'react';
import {CarouselMainContainerStyled} from "../../../../styled-components/MainBlock/Rooms/Carousel/CarouselMainContainerStyled";
import {WindowCarousel} from "../../../../styled-components/MainBlock/Rooms/Carousel/WindowCarouselStyled";
import {AllCarouselPageCont} from "../../../../styled-components/MainBlock/Rooms/Carousel/AllCarouselPageConteinerStyled";
import {HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight} from "react-icons/hi";

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
        }
    }, [photoWidth, offset])

    //slider to the right side
    const rightSlideHandle = () => {
        setOffset((currOffset) => {

            const newOffset = currOffset - photoWidth
            const maxOffset = -(photoWidth * (Children.toArray(children).length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }
    //slider to the left side
    const leftSlideHandle = () => {
        setOffset((currOffset) => {
            const newOffset = currOffset + photoWidth
            return Math.min(newOffset, 0)
        })
    }

    return (
        <CarouselMainContainerStyled>
            <HiOutlineArrowCircleLeft size={30} onClick={leftSlideHandle}/>
            <WindowCarousel ref={ref}>
                <AllCarouselPageCont style={{transform: `translateX(${offset}px)`}}>
                    {pages}
                </AllCarouselPageCont>
            </WindowCarousel>
            <HiOutlineArrowCircleRight size={30} onClick={rightSlideHandle}/>
        </CarouselMainContainerStyled>
    );
};








