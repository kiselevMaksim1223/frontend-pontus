import styled from "styled-components";

type propsType = {
    width?: string
    borderRadius?: string
    margin?: string
    padding?:string
}

export const StyledImgContainer = styled.div<propsType>`
  position: relative;
  width: ${props => props.width};
  border-radius: ${props => props.borderRadius};
  margin: ${props => props.margin};
  padding: ${props => props.padding};

`