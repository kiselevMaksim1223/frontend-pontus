import React, {Children, FC, ReactNode, useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {PAGE_WIDTH} from "../Rooms";

type carouselType = {
    children?: ReactNode
}

export const Carousel: FC<carouselType> = ({children}) => {
    const [pages, setPages] = useState<ReactNode | ReactNode[]>([])
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setPages(Children.map(children, child => child))
        console.log()
    }, [children])

    const rightSlideHandle = () => {
        console.log("right slide")
        setOffset((currOffset) => {

            const newOffset = currOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (Children.toArray(children).length-1))
            return Math.max(newOffset, maxOffset)
        })
    }

    const leftSlideHandle = () => {
        console.log("left slide")
        setOffset((currOffset) => {
            const newOffset = currOffset + PAGE_WIDTH

            return Math.min(newOffset, 0)
        })
    }

    return (
        <CarouselContainer>
            <Arrow side={"left"} onClick={leftSlideHandle}/>
            <WindowCarousel>
                <AllCarouselPageCont style={{transform: `translateX(${offset}px)`}}>
                    {pages}
                </AllCarouselPageCont>
            </WindowCarousel>
            <Arrow side={"right"} onClick={rightSlideHandle}/>
        </CarouselContainer>
    );
};

const CarouselContainer = styled.div`
  width: 683px;
  height: 300px;
  
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`

const WindowCarousel = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

const AllCarouselPageCont = styled.div`
  height: 100%;
  display: flex;
`

type ArrowType = {
    side: "left" | "right"
}

const Arrow = styled.div<ArrowType>`
  position: relative;
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius:50%;
  margin: 0 2px;
  cursor: pointer;
  ${props => props.side === "left" && css`
    ::after{
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      border-bottom: 2px solid black;
      border-left: 2px solid black;
      top: 30%;
      left: 35%;
      transform: rotate(45deg);
    }
  `}
  ${props => props.side === "right" && css`
    ::after{
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      border-top: 2px solid black;
      border-right: 2px solid black;
      top: 30%;
      left: 35%;
      transform: rotate(45deg);
    }
  `}`
