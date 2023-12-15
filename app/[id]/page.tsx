import CharacterComics from "@/components/characterDetail/CharacterComics";
import CharacterDetailHeader from "@/components/characterDetail/CharacterDetailHeader";
import { CharacterComicCardWrapper } from "@/components/ui/character-detail/card";
import { Character } from "@/types";
import {
  fetchCharacter,
  fetchCharacterWithComics,
} from "@/utils/character-detail";
import Image from "next/image";
import { Fragment } from "react";

export default async function Page({ params }: { params: { id: number } }) {
  const character = await fetchCharacter(params.id);
  const comics = await fetchCharacterWithComics(params.id);

  return (
    <Fragment>
      <CharacterDetailHeader {...character.results} />
      <CharacterComicCardWrapper>
        <CharacterComics {...comics.results} />
      </CharacterComicCardWrapper>
    </Fragment>
  );
}
