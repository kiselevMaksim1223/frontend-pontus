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
    isMedia?:boolean
}

export const WrapperStyled = styled.div<propType>`
  padding: ${({padding}) => padding};
  background-color: ${({backgroundColor}) => backgroundColor};
  position: ${({position}) => position};
  width: ${({width}) => width !== undefined ? width[0] : ""};
  height: ${({height}) => height}
  bottom: ${({bottom}) => bottom};
  align-self: ${({alignSelf}) => alignSelf};
  margin: ${({margin}) => margin};
  line-height: ${({lineHeight}) => lineHeight};
  ${({blackout}) => blackout && css`
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
  
${({isMedia}) => isMedia && css<propType>`
  @media (max-width: 950px) {
    width: ${({width}) => width ? width[1] : ""};
    text-align: center;
  }
`}
`