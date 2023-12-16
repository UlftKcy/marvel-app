"use server";
import {
  CharacterCard,
  CharacterCardHeader,
  CharacterCardImageWrapper,
} from "@/components/ui/character/card";
import { GridContainer } from "@/components/ui/character/container";
import { Character } from "@/types";
import md5 from "md5";
import Image from "next/image";
import Link from "next/link";

const privateKey = process.env.API_PRIVATE_KEY;
const publicKey = process.env.API_PUBLIC_KEY;

const generateHash = (ts: string) => {
  return md5(ts + privateKey + publicKey);
};

export const fetchCharacters = async (offset: number) => {
  const ts = Date.now().toString();
  const hash = generateHash(ts);

  const response = await fetch(
    `${process.env.API_BASE_URL}/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=30`
  );
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const { data } = await response.json();

  return data.results;
   
};
