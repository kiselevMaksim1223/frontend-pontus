import styled from "styled-components";

type propsType = {
    width?:string
    margin?:string
}

export const StyledImg = styled.img<propsType>`
  width: ${props => props.width};
  margin: ${props => props.margin};
`