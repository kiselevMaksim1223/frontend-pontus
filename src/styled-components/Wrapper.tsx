import styled, {css} from "styled-components";

type propType = {
    backgroundColor?: string
    padding?: string
    blackout?: boolean
    position?:string
    width?:string
    bottom?:string
}

export const StyledWrapper = styled.div<propType>`
  padding: ${props => props.padding ? props.padding : ""};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
  position: ${props => props.position || "relative"};
  width: ${props => props.width};
  bottom: ${props => props.bottom};
  ${(props) => props.blackout && css`
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 100vw;
      transform: translateX(-50%);
      height: 100%;
      background-color: rgb(42 46 73 / 35%);
      transition: background-color .2s ease-in-out;
    }
    :hover::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 100vw;
        transform: translateX(-50%);
        height: 100%;
        background-color: rgb(42 46 73 / 10%);
        transition: background-color .2s ease-in-out;
      }
  `
  }
}
`