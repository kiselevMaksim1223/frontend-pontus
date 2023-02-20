import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

type propsType = {
    linkStyle?: "primary" | "secondary"
}

export const NavLinkStyled = styled(NavLink)<propsType>`
  font-size: medium;
  font-weight: 400;
  color: inherit;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    ::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%) scaleX(1);
      width: 100%;
      height: 2px;
      background-color: white;
    }
  }
  ${props => props.linkStyle === "secondary" && css`
    &:hover {
      ::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) scaleX(1);
        width: 100%;
        height: 2px;
        background-color: #2a2e49;
    
  `}
`