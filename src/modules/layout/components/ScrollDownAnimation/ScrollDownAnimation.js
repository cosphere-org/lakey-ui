import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"

const scroll = keyframes`
  0% {
      opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(146px);
  }
`

export const ScrollDownAnimation = styled.div`
  width: 40px;
  height: 70px;
  margin-left: -20px;
  margin-top: -35px;
  bottom: 30px;
  left: 50%;
  position: absolute;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;

  &:before {
    content: "-";
    width: 8px;
    padding-bottom: 10px;
    height: 8px;
    background: #fff;
    margin-top: 10px;
    top: 18px;
    border-radius: 4px;
    animation: ${scroll} 1.5s infinite;
  }
`

export default ScrollDownAnimation
