import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

type propsType = {
    linktype?: "primary" | "secondary"
    fontSize?: "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large" | "xxx-large"
}

export const NavLinkStyled = styled(NavLink)<propsType>`
  font-size: ${({fontSize}) => fontSize ? fontSize : "medium"};
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
  ${({linktype}) => linktype === "secondary" && css`
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