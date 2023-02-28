import styled from "styled-components";

export const WindowCarousel = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  
  @media (max-width: 950px) {
    height: 300px;
    min-height: 200px;
    width: 90%;
  }
  @media (max-width: 600px) {
    height: 100%;
    min-height: 150px;
    //width: 300px;
  }
`



