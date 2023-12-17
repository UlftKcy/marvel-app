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

export const CharacterDetailCard = styled.div`
  display: flex;
  border: 1px solid #3d465a;
  border-radius: 6px;
  background-color: #070a0f;
  padding: 2.5rem 4rem;
  margin-bottom: 5rem;
`;

export const CharacterDetailCardImageWrapper = styled.div`
  margin-right: 2rem;
`;

export const CharacterDetailCardTextWrapper = styled.div`
  column-span: 2;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const CharacterDetailCardTitle = styled.h4`
  margin-bottom: 1rem;
`;

export const CharacterDetailCardDescription = styled.div`
  color: #67728a;
`;

// comics
export const CharacterComicCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 400px;
  gap: 3rem;
`;

export const CharacterComicCard = styled(motion.div).attrs(() => ({
  initial: "hidden",
  variants,
}))`
  display: flex;
  flex-direction: column;
  place-content: center;
  background-color: #ffffff;
  border-radius: 6px;
`;

export const CharacterComicCardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 75%;
`;

export const CharacterComicCardHeader = styled.h4`
  height: 25%;
  padding: 1rem;
  color: #070a0f;
`;
