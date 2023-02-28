import styled from "styled-components";

export const CarouselMainContainer = styled.div`
  flex: 1 0 auto;
  min-width: 600px;
  max-width: 600px;
  min-height: 380px;
  
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 600px){
    flex: 1 1 auto;
    width: 100%;
    min-width: 300px;
    height: 200px;
    min-height: auto;
  }
`