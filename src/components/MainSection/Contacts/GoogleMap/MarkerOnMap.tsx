import React, {FC} from 'react';
import styled from "styled-components";

type markerPropsType = {
    text:string
    lat:number
    lng:number
}

export const MarkerOnMap:FC<markerPropsType> = ({text}) => {


    return (
        <HoverMarker>
            <MarkerStyled/>
            <TextForMarker>{text}</TextForMarker>
        </HoverMarker>
    );
};

export const HoverMarker = styled.div`
  transition: transform 0.3s;
  animation: ease 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`

export const MarkerStyled = styled.div`
  width: 24px;
  height: 24px;
  font-size: 14px;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color:#ab3131;
  background-size: cover;
  background-position: center;
`

const TextForMarker = styled.p`
  color: firebrick;
  font-size: 18px;
`
