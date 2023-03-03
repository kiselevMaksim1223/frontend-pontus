import styled from "styled-components";

type GridWrapperType = {
    gridTemplateColumn?: string
    gap?: string
}

export const GridWrapper = styled.div<GridWrapperType>`
  display: grid;
  grid-template-columns: ${props => props.gridTemplateColumn};
  gap: ${props => props.gap};
  padding: 0 0 1em 0;
`