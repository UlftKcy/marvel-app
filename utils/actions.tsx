"use server";

import {
  CharacterCard,
  CharacterCardHeader,
  CharacterCardImageWrapper,
} from "@/components/ui/card";
import { GridContainer } from "@/components/ui/container";
import { Character } from "@/types";
import md5 from "md5";
import Image from "next/image";

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
  const { data } = await response.json();

  return (
    <GridContainer>
      {Object.values(data.results).map((character) => {
        const { id, name, description, thumbnail, comics } =
          character as Character;
        return (
          <CharacterCard key={id}>
            <CharacterCardImageWrapper>
              <Image
                src={thumbnail.path + "." + thumbnail.extension}
                width={100}
                height={100}
                objectFit="cover"
                quality={100}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                }}
                alt={name}
              />
            </CharacterCardImageWrapper>
            <CharacterCardHeader>{name}</CharacterCardHeader>
          </CharacterCard>
        );
      })}
    </GridContainer>
  );
};
