"use server";
import md5 from "md5";

const privateKey = process.env.API_PRIVATE_KEY;
const publicKey = process.env.API_PUBLIC_KEY;

const generateHash = (ts: string) => {
  return md5(ts + privateKey + publicKey);
};

// fetch all characters
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

// fetch character by id
export const fetchCharacter = async (characterId: number) => {
  const ts = Date.now().toString();
  const hash = generateHash(ts);

  const response = await fetch(
    `${process.env.API_BASE_URL}/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const { data } = await response.json();

  return data;
};

// fetch character with comics
export const fetchCharacterWithComics = async (characterId: number) => {
  const ts = Date.now().toString();
  const hash = generateHash(ts);

  const response = await fetch(
    `${process.env.API_BASE_URL}/v1/public/characters/${characterId}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=10&orderBy=-onsaleDate`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const { data } = await response.json();

  return data;
};

// search characters
export const fetchFilteredCharacters = async (nameStartsWith: string) => {
  const ts = Date.now().toString();
  const hash = generateHash(ts);

  const response = await fetch(
    `${process.env.API_BASE_URL}/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${nameStartsWith}`
  );
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const { data } = await response.json();

  return data.results;
   
};