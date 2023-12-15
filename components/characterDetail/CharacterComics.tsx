import { ComicType } from "@/types";
import { CharacterComicCard, CharacterComicCardHeader, CharacterComicCardImageWrapper } from "../ui/character-detail/card";
import Image from "next/image";

export default function CharacterComics(comics:ComicType[]) {

  return Object.values(comics).map((comic: ComicType) => {
    const { id, title, thumbnail } = comic;
    return(
        <CharacterComicCard key={id}>
            <CharacterComicCardImageWrapper>
            <Image
                  src={thumbnail.path + "." + thumbnail.extension}
                  width={300}
                  height={100}
                  objectFit="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                  alt={title}
                />
            </CharacterComicCardImageWrapper>
           <CharacterComicCardHeader>{title}</CharacterComicCardHeader>
        </CharacterComicCard>
    )
  });
}
