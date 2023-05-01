import styled from "styled-components";

type propsType = {
    width?:string
    margin?:string
}

export const ImgStyled = styled.img<propsType>`
  width: ${({width}) => width};
  margin: ${({margin}) => margin};
`