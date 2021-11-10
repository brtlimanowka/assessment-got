import { render, screen } from '@testing-library/react';
import CharacterState from '../../store/characters/CharacterState';
import HouseState from '../../store/houses/HouseState';
import Theme from '../../Theme';
import ErrorCard from '../ui/ErrorCard';

describe('ErrorCard', () => {
  test('renders an error card', () => {
    render(
      <Theme>
        <CharacterState>
          <HouseState>
            <ErrorCard />
          </HouseState>
        </CharacterState>
      </Theme>
    );
    const header = screen.getByText('Something went wrong');
    expect(header).toBeInTheDocument();
  });

  test('does not display any errors by default', () => {
    const { container } = render(
      <Theme>
        <CharacterState>
          <HouseState>
            <ErrorCard />
          </HouseState>
        </CharacterState>
      </Theme>
    );
    const span = container.getElementsByTagName('span')[0];
    expect(span).toBeEmptyDOMElement();
  });
});
