import styled from "styled-components";

type propsType = {
    color?:string
    position?: "static" | "relative" | "absolute" | "sticky" | "fixed"
    margin?:string
    fontSize?:string
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent"
}

export const StyledTitle = styled.h1<propsType>`
  color:${props => props.color};
  position: ${props => props.position};
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize} ;
  text-align: ${props => props.textAlign};
`