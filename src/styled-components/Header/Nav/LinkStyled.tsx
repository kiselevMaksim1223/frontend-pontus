import styled, {css} from "styled-components";

type propsType = {
    type?: "primary" | "secondary" | "icon"
}

export const LinkStyled = styled.a<propsType>`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  //color: #2A2E49;
  
 ${props => props.type === "primary" && css`
  color: white;
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
      color: white;
    }
  `}
  ${props => props.type === "secondary" && css`
   color: #2A2E49;
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
      
     }
    }
  `}
  ${props => props.type === "icon" && css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        outline: none;
        //z-index: 10;
   &:hover {
     border: 1px solid white;
     border-radius: 10px;
   }
  `}
`