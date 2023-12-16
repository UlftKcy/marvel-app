"use client";
import { useInView } from "react-intersection-observer";
import { Loading } from "../ui/loading";
import { Fragment, useEffect, useState } from "react";
import { fetchCharacters } from "@/utils/actions";
import { Character } from "@/types";
import { GridContainer } from "../ui/character/container";
import CharacterList from "./CharacterList";

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [offset, setOffset] = useState(30);

  useEffect(() => {
    if (inView) {
      const fetchData = async () => {
        const data = await fetchCharacters(offset);
        setCharacters([...characters, ...data]);
        setOffset(offset + 30);
      };

      fetchData();
    }
  }, [inView, offset, characters]);

  return (
    <Fragment>
      <GridContainer>
        <CharacterList {...characters} />
      </GridContainer>
      <Loading ref={ref} />
    </Fragment>
  );
}
