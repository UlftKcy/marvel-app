import { Character } from "@/types";
import Image from "next/image";
import {
  CharacterDetailCard,
  CharacterDetailCardDescription,
  CharacterDetailCardImageWrapper,
  CharacterDetailCardTextWrapper,
  CharacterDetailCardTitle,
} from "@/components/ui/character-detail/card";

export default function CharacterDetailHeader(characterData: Character) {
  return Object.values(characterData).map((character: Character) => {
    const { id, name, thumbnail, description } = character;

    return (
      <CharacterDetailCard key={id}>
        <CharacterDetailCardImageWrapper>
          <Image
            src={thumbnail.path + "." + thumbnail.extension}
            width={100}
            height={100}
            objectFit="cover"
            quality={100}
            style={{
              width: "12rem",
              height: "12rem",
              borderRadius: "6px",
            }}
            alt={name}
          />
        </CharacterDetailCardImageWrapper>
        <CharacterDetailCardTextWrapper>
          <CharacterDetailCardTitle>{name}</CharacterDetailCardTitle>
          <CharacterDetailCardDescription>
            {description ? description : "No description"}
          </CharacterDetailCardDescription>
        </CharacterDetailCardTextWrapper>
      </CharacterDetailCard>
    );
  });
}
