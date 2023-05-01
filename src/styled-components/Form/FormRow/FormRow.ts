import styled from "styled-components";

export const RowStyled = styled.div`
  display: flex;
  flex-direction: column;

  ::after {
    content: "";
    display: table;
    clear: both;
  }
`