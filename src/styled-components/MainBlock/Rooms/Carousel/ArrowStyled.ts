import styled, {css} from "styled-components";

type ArrowType = {
    side: "left" | "right"
}

export const Arrow = styled.div<ArrowType>`
  position: relative;
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius:50%;
  margin: 0 2px;
  cursor: pointer;
  z-index: 5;
  ${props => props.side === "left" && css`
    ::after{
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      border-bottom: 2px solid black;
      border-left: 2px solid black;
      top: 30%;
      left: 35%;
      transform: rotate(45deg);
    }
  `}
  ${props => props.side === "right" && css`
    ::after{
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      border-top: 2px solid black;
      border-right: 2px solid black;
      top: 30%;
      left: 35%;
      transform: rotate(45deg);
    }
  `}`