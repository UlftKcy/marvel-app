"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  visible: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
  hidden: { opacity: 0 },
};

export const CharacterCard = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants,
}))`
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
