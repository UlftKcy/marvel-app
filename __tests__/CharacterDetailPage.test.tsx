import CharacterList from "@/components/home/CharacterList";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const characters = [
  {
    id: 1,
    name: "Name",
    description: "description",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg",
    },
  },
];

describe("Character Detail Page", () => {
  it("Display character detail page", async () => {
    render(<CharacterList {...characters} />);

    await waitFor(() => {
      characters.map((character) => {
        const { id } = character;
        const characterElm = screen.getByTestId(id);

        userEvent.click(characterElm);
      });
    });

    await waitFor(()=>{
        const { id, name } = characters[0];

        const characterPageHeader = screen.getByTestId(id);
        expect(characterPageHeader).toBeInTheDocument();
        expect(characterPageHeader).toHaveTextContent(name);

    })

  });
});
