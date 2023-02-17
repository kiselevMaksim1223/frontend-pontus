import styled from "styled-components";

type propsType = {
    width?:string
    color?:string
}

export const StyledText = styled.p<propsType>`
  width: ${props => props.width ? props.width : ""};
  color: ${props => props.color};
`