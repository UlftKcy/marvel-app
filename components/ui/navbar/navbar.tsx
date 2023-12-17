"use client";

import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  background-color: #000;
  padding:1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
  
`;

