import { render } from '@testing-library/react';
import Theme from '../../Theme';
import Spinner from '../ui/Spinner';

test('renders a spinner', () => {
  const { container } = render(
    <Theme>
      <Spinner />
    </Theme>
  );
  const divs = container.getElementsByTagName('div');
  expect(divs.length).toBe(4); // Container + 3 Dots
});
