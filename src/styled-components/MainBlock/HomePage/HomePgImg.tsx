import styled from "styled-components";

type HomePgPropsType = {
    img: string
}

export const StyledHomePgImg = styled.div<HomePgPropsType>`
  position: relative;
  width: 100%;
  padding-top: 65vh;
  background: url("${props => props.img}") 0 70%/100% auto no-repeat;
`