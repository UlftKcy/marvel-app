"use client";
import styled from "styled-components";

export const WrapperContainer = styled.main`
  margin: 1rem 2rem;
  background-color: #0f1117;
  padding: 4rem;
  min-height: 100vh;

  @media (max-width: 500px) {
    margin-top: 3rem;
  }
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 16rem;
  gap: 2rem;
  margin-bottom: 2rem;
`;
