import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Testing the Navbar', () => {
  it('Matches the snapshot', () => {
    const snap = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(snap).toMatchSnapshot();
  });

  it('Goes to the correct route on Link click', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const rocketsLink = getByText('Rockets');
    fireEvent.click(rocketsLink);
    expect(window.location.pathname).toBe('/');
  });
});
