import styled, {css} from "styled-components";

type propType = {
    backgroundColor?: string
    padding?: string
    blackout?: boolean
    position?:string
    width?:string | string[]
    height?:string
    bottom?:string
    alignSelf?:string
    margin?:string
    lineHeight?:string
    media?:boolean
}

export const StyledWrapper = styled.div<propType>`
  padding: ${props => props.padding};
  background-color: ${props => props.backgroundColor};
  position: ${props => props.position};
  width: ${props => props.width !== undefined ? props.width[0] : ""};
  height: ${props => props.height}
  bottom: ${props => props.bottom};
  align-self: ${props => props.alignSelf};
  margin: ${props => props.margin};
  line-height: ${props => props.lineHeight};
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
  
${props => props.media && css<propType>`
  @media (max-width: 950px){
   width: ${props => props.width ? props.width[1] : ""};
    text-align: center;
  }
`}
`