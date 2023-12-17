"use client";
import { useInView } from "react-intersection-observer";
import { Loading } from "../ui/loading/loading";
import { Fragment, useEffect, useState } from "react";
import { fetchCharacters, fetchFilteredCharacters } from "@/utils/actions";
import { Character } from "@/types";
import { GridContainer } from "../ui/character/container";
import CharacterList from "./CharacterList";
import { useSearchParams } from "next/navigation";

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [offset, setOffset] = useState(30);
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim();

  useEffect(() => {
    if (inView) {
      const fetchData = async () => {
        const data = await fetchCharacters(offset);
        setCharacters([...characters, ...data]);
        setOffset(offset + 30);
      };

      fetchData();
    }

    if(inView && query){
      const filteredCharacters = async () => {
        const data = await fetchFilteredCharacters(offset,query);
        setCharacters([...characters, ...data]);
        setOffset(offset + 30);
      };

      filteredCharacters();
    }
  }, [inView, offset, characters,query]);

  return (
    <Fragment>
      <GridContainer>
        <CharacterList {...characters} />
      </GridContainer>
      <Loading ref={ref} />
    </Fragment>
  );
}
