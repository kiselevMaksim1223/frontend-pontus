import styled from "styled-components";

type HomePgPropsType = {
    img: string
}

export const StyledHomePgImg = styled.div<HomePgPropsType>`
  position: relative;
  width: 100%;
  padding-top: 65vh;
  background: url("${({img}) => img}") 0 70%/100% auto no-repeat;
  
  @media (max-width: 670px) {
    background: url("${({img}) => img}") 0 100%/100% 100% no-repeat
  }
`