"use client";
import styled from "styled-components";

export const SearchInput = styled.input`
  width: clamp(240px, 30vw, 50vw);
  padding: 0.8rem 1rem;
  border: 1px solid #0f1117;
  border-radius: 0.8rem;
  font-size: 0.9rem;
  background-color: transparent;
  &:focus {
    outline-offset: 3px;
    outline-style: solid;
    outline-color: #2d3344;
    outline-width: thin;
  }
`;
