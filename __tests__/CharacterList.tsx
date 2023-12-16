import CharacterList from '@/components/home/CharacterList';
import { render } from '@testing-library/react';

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

it('renders CharacterList correctly', () => {
  const { asFragment } = render(<CharacterList {...characters} />);
  expect(asFragment()).toMatchSnapshot();
});
