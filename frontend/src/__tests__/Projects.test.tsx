import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, test } from 'vitest';
import Carousel from '../components/Carousel';
import mockProjects from '../mocks/projects.json';

window.open = vi.fn();

beforeEach(() => {
  render(<Carousel projects={mockProjects} />);
});

afterEach(() => {
  cleanup();
});

describe('Carousel Component', () => {
  test('render Carousel', () => {
    const { container } = render(<Carousel projects={mockProjects} />);
    expect(container).toBeInTheDocument();
  });

  test('Carousel snapshot', () => {
    const result = render(<Carousel projects={mockProjects} />);
    expect(result).toMatchSnapshot();
  });

  test('cards length', async () => {
    const cards = await screen.findAllByRole('article');
    expect(cards).toHaveLength(4); // in the carusel settings is 4 on the screen, the others are hidden
  });

  test('every card should have a title and link', async () => {
    const cards = await screen.findAllByRole('article');

    // name
    const firstCard = cards[0];
    expect(firstCard).toHaveTextContent('clinic ghodad');

    // img
    const img = within(firstCard).getByRole('img');
    expect(img).toHaveAttribute('src', '/images/p1.jpg');

    // url link
    const url = within(firstCard).getByText('https://app.clinicghodad.com');
    expect(url).toHaveTextContent('https://app.clinicghodad.com');

    // click url
    fireEvent.click(url);

    expect(window.open).toHaveBeenCalledWith('https://app.clinicghodad.com', '_blank');
  });
});
