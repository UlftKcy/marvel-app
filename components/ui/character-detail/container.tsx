"use client";
import styled from "styled-components";

export const CharacterDetailContainer = styled.section`
  margin: 1rem 2rem;
  background: linear-gradient(to bottom, #0f1117, #e74c3c);
  padding: 4rem;
  min-height: 100vh;
  @media (max-width: 500px) {
    margin-top: 3rem;
    padding: 4rem 2rem;
    width: min-content;
  }
`;
