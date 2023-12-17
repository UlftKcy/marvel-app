"use client";
import CharacterList from "@/components/home/CharacterList";
import { GridContainer, WrapperContainer } from "@/components/ui/character/container";
import { Header } from "@/components/ui/character/header";
import { Character } from "@/types";
import { fetchFilteredCharacters } from "@/utils/actions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim();
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (query) {
      const filteredCharacters = async () => {
        const response = await fetchFilteredCharacters(query);
        setFilteredCharacters(response);
      };

      filteredCharacters();
    }
  }, [query]);

  return (
    <WrapperContainer>
      <Header>Discover Marvel Characters</Header>
      <GridContainer>
        <CharacterList {...filteredCharacters} />
      </GridContainer>
    </WrapperContainer>
  );
}
