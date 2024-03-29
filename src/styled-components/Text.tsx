import styled from "styled-components";

type propsType = {
    width?:string
    color?:string
}

export const TextStyled = styled.p<propsType>`
  width: ${({width}) => width};
  color: ${({color}) => color};
`