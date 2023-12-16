import CharacterList from '@/components/home/CharacterList'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react';

const characters = [
  {
    id:1,
    name:"Name",
    description:"description",
    thumbnail:{
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      extension: "jpg"
    }
  }
]

describe('CharacterList', () => {
  it('renders a CharacterCard for each character', async() => {
    render(<CharacterList {...characters}/>)
 
    await waitFor(() => {
      characters.map((character) => {
        const { id } = character;
        const characterElm = screen.getByTestId(id);
        expect(characterElm).toBeInTheDocument();
      });

    });
  });
})