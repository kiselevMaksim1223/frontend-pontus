import React from 'react';
import styled from "styled-components";

type propsType = {
    children?:React.ReactNode
    color?:string
    asType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export const Title:React.FC<propsType> = ({asType, ...props}) => {
    return (
        <StyledTitle as={asType} {...props}/>
    );
};

const StyledTitle = styled.h1<propsType>`
  color:${props => props.color};
`