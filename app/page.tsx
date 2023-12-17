import CharacterList from "@/components/home/CharacterList";
import LoadMore from "@/components/home/LoadMore";
import { GridContainer, WrapperContainer } from "@/components/ui/character/container";
import { Header } from "@/components/ui/header";
import { fetchCharacters } from "@/utils/actions";
import React from "react";

export default async function Home() {
  const characters = await fetchCharacters(0);
  return (
    <WrapperContainer>
      <Header>Discover Marvel Characters</Header>
      <GridContainer>
        <CharacterList {...characters}/>
      </GridContainer>
      <LoadMore />
    </WrapperContainer>
  );
}
