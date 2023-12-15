"use client";
import styled from "styled-components";

export const CharacterCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #3d465a;
  border-radius: 6px;
  background-color: #070a0f;
  cursor: pointer;
  &:hover {
    border-color: #ffffff;
    background: linear-gradient(to bottom, #3498db, #e74c3c);
  }
`;

export const CharacterCardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 75%;
`;

export const CharacterCardHeader = styled.h4`
  height: 25%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
`;
