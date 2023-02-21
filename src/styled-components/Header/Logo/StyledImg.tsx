import styled from "styled-components";

type propsType = {
    width?:string
}

export const StyledImg = styled.img<propsType>`
  width: ${props => props.width};
`