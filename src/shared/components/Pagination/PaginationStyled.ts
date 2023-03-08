import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Orbitron", sans-serif;
  color: #ffe81f;
  background-color: inherit;
  border: none;
  font-size: 5rem;
  :hover {
    cursor: pointer;
  }
  padding-left: 1rem;
  padding-right: 1rem;
`;
