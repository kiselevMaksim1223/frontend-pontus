import styled from "styled-components";

type propsType = {
    width?: string
    borderRadius?: string
    margin?: string
    padding?:string
}

export const ImgContainerStyled = styled.div<propsType>`
  position: relative;
  width: ${({width}) => width};
  border-radius: ${({borderRadius}) => borderRadius};
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};

`