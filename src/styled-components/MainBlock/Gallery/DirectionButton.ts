import styled from "styled-components";

export const DirectionButton = styled.a`
  display: block;
  width: max-content;
  cursor: pointer;
  border: 1px solid #2a2e49;
  text-decoration: none;
  padding: 0.7em 2.5em;
  margin-top: 1em;
  transition: opacity .2s ease-in-out;
  background: white;
  color: #2a2e49;

  @media(min-width: 750px){
  :hover {
    background: #2a2e49;
    color: white;
    opacity: 0.95;
    transition: background-color .2s ease-in-out;
  }}
`