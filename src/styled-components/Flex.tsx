import React from 'react';
import styled from "styled-components";

type propsType = {
    children:React.ReactNode
    direction?:"row" | "row-reverse" | "column" | "column-reverse"
    align?:"center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end"
    justify?:"center" | "start" | "end" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch"
    margin?:string
    columnGap?:string
    textAlign?:"start" | "end" | "left" | "right" | "center" | "justify" | "match-parent"
}

export const Flex:React.FC<propsType> = ({...props}) => {
    return (
        <FlexStyled {...props}/>
    );
};

const FlexStyled = styled.div<propsType>`
  display:flex;
  flex-direction: ${(props) => props.direction || "row" } ;
  align-items:${props => props.align || "stretch"} ;
  justify-content:${props => props.justify || "stretch"};
  margin:${props => props.margin || "0"} ;
  column-gap:${props => props.columnGap || "0"};
  text-align: ${props => props.textAlign || "start"};
`