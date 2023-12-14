import LoadMore from "@/components/home/LoadMore";
import { WrapperContainer } from "@/components/ui/container";
import { fetchCharacters } from "@/utils/actions";
import React from "react";

export default async function Home() {
  const characters = await fetchCharacters(0);
  return (
    <WrapperContainer>
      {characters}
      <LoadMore />
    </WrapperContainer>
  );
}
