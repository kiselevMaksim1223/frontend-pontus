import styled from "styled-components";

type GridWrapperType = {
    gridTemplate?: string
    gap?: string
}

export const GridWrapper = styled.div<GridWrapperType>`
  display: grid;
  grid-template-columns: ${props => props.gridTemplate};
  gap: ${props => props.gap};
  padding: 0 0 1em 0;
  
  @media(max-width: 750px){
    grid-template-columns: none;
    grid-template-rows: ${props => props.gridTemplate};
    gap: ${props => props.gap};
    padding: 1em 0.2em;
  }
`