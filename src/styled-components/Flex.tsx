import styled from "styled-components";

type propsType = {
    direction?:"row" | "row-reverse" | "column" | "column-reverse"
    align?:"center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end"
    justify?:"center" | "start" | "end" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch"
    margin?:string
    padding?:string
    columnGap?:string
    rowGap?:string
    textAlign?:"start" | "end" | "left" | "right" | "center" | "justify" | "match-parent"
}


export const FlexStyled = styled.div<propsType>`
  display:flex;
  flex-direction: ${(props) => props.direction || "row" } ;
  align-items:${props => props.align || "stretch"} ;
  justify-content:${props => props.justify || "stretch"};
  margin:${props => props.margin || "0"} ;
  padding: ${props => props.padding || "0"};
  column-gap:${props => props.columnGap || "0"};
  row-gap: ${props => props.rowGap || "0"};
  text-align: ${props => props.textAlign || "start"};
`