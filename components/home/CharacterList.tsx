import { Character } from "@/types";
import Link from "next/link";
import {
    CharacterCard,
    CharacterCardHeader,
    CharacterCardImageWrapper,
  } from "@/components/ui/character/card";
import Image from "next/image";

export default function CharacterList(characters:Character[]) {
    return(
        Object.values(characters).map((character) => {
            const { id, name, thumbnail } = character as Character;
            return (
              <Link href={`/${id}`} key={id}>
                <CharacterCard>
                  <CharacterCardImageWrapper>
                    <Image
                      src={thumbnail.path + "." + thumbnail.extension}
                      width={100}
                      height={100}
                      objectFit="cover"
                      quality={100}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: "6px",
                        borderTopRightRadius: "6px",
                      }}
                      alt={name}
                    />
                  </CharacterCardImageWrapper>
                  <CharacterCardHeader>{name}</CharacterCardHeader>
                </CharacterCard>
              </Link>
            );
          })
    )
}