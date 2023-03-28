import styled from "styled-components";


export const ButtonLink = styled.button`
  position: relative;
  border-radius: 1em;
  cursor: pointer;
  text-decoration: none;
  padding: 1em 5em;
  opacity: 0.9;
  background: #2a2e49;
  color: white;
  z-index: 5;
  font-size:18px;
  :hover{
    opacity: 0.95;
  }
  @media(min-width: 750px){
    display: none;
  }
`