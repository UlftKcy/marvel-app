import { CharacterDetailContainer } from "@/components/ui/character-detail/container"

export default function CharacterDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CharacterDetailContainer>
      {children}
    </CharacterDetailContainer>
  )
}
