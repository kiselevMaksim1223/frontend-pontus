import styled from "styled-components";

type propType = {
    backgroundColor?:string
    padding?: string
}

export const StyledWrapper = styled.div<propType>`
  padding: ${props => props.padding ? props.padding : ""};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
`