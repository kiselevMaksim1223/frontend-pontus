import styled from "styled-components";

type carouselItem = {
    color?:string
    url?:string
}

// export const PHOTO_WIDTH = 650

export const CarouselItem = styled.div<carouselItem>`
  //width: 400px;
  //height: 350px;
  background: url("${({url}) => url}") 0 0/100% 100% no-repeat;
  //background: ;
  height: 100%;
  min-width: 100%;
//{max-width: PHOTO_WIDTHpx;
`