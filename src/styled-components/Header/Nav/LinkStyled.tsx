import styled, {css} from "styled-components";

type propsType = {
    linkStyle?: "primary" | "secondary"
}

export const LinkStyled = styled.a<propsType>`
  position: relative;
  cursor: pointer;
  &:hover {
    ::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%) scaleX(100%);
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
        transform: translateX(-50%) scaleX(100%);
        width: 100%;
        height: 2px;
        background-color: #2a2e49;
  `}
`