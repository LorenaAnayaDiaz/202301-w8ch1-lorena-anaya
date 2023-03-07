import styled from "styled-components";

export const CardContainer = styled.article`
  position: relative;
  display: grid;
  width: 200px;
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  gap: 20px;
  padding: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.01);
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }
  :hover::after {
    left: 100%;
  }
  font-family: "Orbitron", sans-serif;
  color: #ffe81f;
  text-align: center;
`;

export const CardImg = styled.img`
  max-width: 80%;
  max-height: 150px;
  justify-self: center;
  background: radial-gradient(
    circle,
    rgba(255, 232, 31, 0.5) 0%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Orbitron", sans-serif;
  color: #ffe81f;
  background-color: inherit;
  border: none;
  font-size: 1rem;
  :hover {
    border: 3px solid black;
    cursor: pointer;
  }
`;
