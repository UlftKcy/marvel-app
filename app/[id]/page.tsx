import CharacterComics from "@/components/characterDetail/CharacterComics";
import CharacterDetailHeader from "@/components/characterDetail/CharacterDetailHeader";
import { CharacterComicCardWrapper } from "@/components/ui/character-detail/card";
import { fetchCharacter, fetchCharacterWithComics } from "@/utils/actions";
import { Fragment } from "react";

export default async function CharacterDetailPage({ params }: { params: { id: number } }) {
  const characterData = fetchCharacter(params.id);
  const comicsData = fetchCharacterWithComics(params.id);

  const [character, comics] = await Promise.all([characterData, comicsData]);

  return (
    <Fragment>
      <CharacterDetailHeader {...character.results} />
      <CharacterComicCardWrapper>
        <CharacterComics {...comics.results} />
      </CharacterComicCardWrapper>
    </Fragment>
  );
}
