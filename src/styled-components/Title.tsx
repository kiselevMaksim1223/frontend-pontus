import styled from "styled-components";

type propsType = {
    color?:string
    position?: "static" | "relative" | "absolute" | "sticky" | "fixed"
    margin?:string
    fontSize?:string
    textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent"
}

export const TitleStyled = styled.h1<propsType>`
  color:${({color}) => color};
  position: ${({position}) => position};
  margin: ${({margin}) => margin};
  font-size: ${({fontSize}) => fontSize} ;
  text-align: ${({textAlign}) => textAlign};
`