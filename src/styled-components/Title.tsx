import styled from "styled-components";

type propsType = {
    color?:string
    position?:"static" | "relative" | "absolute" | "sticky" | "fixed"
    margin?:string
}

export const StyledTitle = styled.h1<propsType>`
  color:${props => props.color};
  position: ${props => props.position};
  margin: ${props => props.margin};
`