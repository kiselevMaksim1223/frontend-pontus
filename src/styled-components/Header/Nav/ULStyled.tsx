import styled from "styled-components";

export const UlStyled = styled.ul`
  list-style: none;
  display: flex;
  //justify-content: space-around;
  align-items: center;
`
export const LiStyled = styled.li`
  color:black; //white;
  cursor:pointer;

  :not(:last-child) {
    padding-right: 3em;
  }
`