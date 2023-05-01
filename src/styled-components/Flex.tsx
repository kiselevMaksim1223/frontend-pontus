import styled, {css} from "styled-components";

type propsType = {
    direction?:"row" | "row-reverse" | "column" | "column-reverse"
    align?:"center" | "start" | "end" | "self-start" | "self-end" | "flex-start" | "flex-end"
    justify?:"center" | "start" | "end" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "stretch"
    margin?:string
    padding?:string
    columnGap?:string
    rowGap?:string
    textAlign?:"start" | "end" | "left" | "right" | "center" | "justify" | "match-parent"
    isMedia?: boolean
    flexWrap?:"nowrap" | "wrap" | "wrap-reverse"
}


export const FlexStyled = styled.div<propsType>`
  display:flex;
  flex-direction: ${({direction}) => direction || "row" } ;
  align-items:${({align}) => align || "stretch"} ;
  justify-content:${({justify}) => justify || "stretch"};
  margin:${({margin}) => margin || "0"} ;
  padding: ${({padding}) => padding || "0"};
  column-gap:${({columnGap}) => columnGap || "0"};
  row-gap: ${({rowGap}) => rowGap || "0"};
  text-align: ${({textAlign}) => textAlign || "start"};
  flex-wrap: ${({flexWrap}) => flexWrap};
  
  ${({isMedia}) => isMedia && css`
  @media (max-width: 950px){
    flex-direction: column;
    align-items: center;
  }
  
  
  `}
  
  
`