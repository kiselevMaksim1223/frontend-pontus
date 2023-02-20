import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const ButtonLink = styled(NavLink)`
  position: relative;
  border-radius: 1em;
  cursor: pointer;
  text-decoration: none;
  padding: 0.7em 2.5em;
  opacity: 0.8;
  transition: opacity .2s ease-in-out;
  background: #2a2e49;
  color: white;
  z-index: 5;
  :hover{
    opacity: 0.95;
    transition: opacity .2s ease-in-out;
  }
`