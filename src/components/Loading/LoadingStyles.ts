import styled from "styled-components";

export const LoadingStyled = styled.div`
  position: relative;
  width: 15.7px;
  height: 15.7px;

  div {
    animation: spinner-4t3wzl 1.875s infinite backwards;
    background-color: rgba(15, 223, 234, 0.77);
    border-radius: 50%;
    height: 50%;
    position: absolute;
    width: 100%;
  }

  div:nth-child(1) {
    animation-delay: 0.15s;
    background-color: rgba(15, 223, 234, 0.9);
  }

  div:nth-child(2) {
    animation-delay: 0.3s;
    background-color: rgba(15, 223, 234, 0.8);
  }

  div:nth-child(3) {
    animation-delay: 0.45s;
    background-color: rgba(15, 223, 234, 0.7);
  }

  div:nth-child(4) {
    animation-delay: 0.6s;
    background-color: rgba(15, 223, 234, 0.6);
  }

  div:nth-child(5) {
    animation-delay: 0.75s;
    background-color: rgba(15, 223, 234, 0.5);
  }

  @keyframes spinner-4t3wzl {
    0% {
      transform: rotate(0deg) translateY(-200%);
    }

    60%,
    100% {
      transform: rotate(360deg) translateY(-200%);
    }
  }
`;
