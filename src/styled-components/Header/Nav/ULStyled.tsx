import styled, {css} from "styled-components";

type propsType = {
    isColumn?:boolean
}

export const UlStyled = styled.ul<propsType>`
  list-style: none;
  display: flex;
  flex-direction: ${({isColumn}) => isColumn ? "column" : "row"};
  align-items: center;
`
export const LiStyled = styled.li<propsType>`
  color:black; //white;
  cursor:pointer;
  
  ${({isColumn}) => isColumn 
          ?css`
            position: relative;
            padding: 1em 0;
            ::before {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 100vw;
              transform: translateX(-50%);
              height: 1px;
              background-color: #2a2e49;
              opacity: .2;
            }
          `
          :css`
            :not(:last-child) {
            padding-right: 3em;
          }`
    
  }
`