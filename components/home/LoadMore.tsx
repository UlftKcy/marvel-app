"use client";
import { useInView } from "react-intersection-observer";
import { Loading } from "../ui/loading";
import { useEffect, useState } from "react";
import { fetchCharacters } from "@/utils/actions";

export default function LoadMore() {
  const { ref, inView } = useInView();
  const [characters, setCharacters] = useState();
  const [offset, setOffset] = useState(30);

  useEffect(() => {
    if (inView) {
      fetchCharacters(offset).then((res: any) => {
        setCharacters(res);
        setOffset(offset + 30);
      });
    }
  }, [inView, characters, offset]);

  return (
    <>
      {characters}
      <Loading ref={ref} />
    </>
  );
}
