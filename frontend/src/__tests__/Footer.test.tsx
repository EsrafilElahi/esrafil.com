import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, test } from 'vitest';
import Footer from '../components/Sections/Footer';

window.open = vi.fn();

beforeEach(() => {
  render(<Footer />);
});

afterEach(() => {
  cleanup();
});

describe('Footer Component', () => {
  test('render Footer', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });

  test('Footer snapshot', () => {
    const result = render(<Footer />);
    expect(result).toMatchSnapshot();
  });

  test('4 icons exists on page', async () => {
    const icons = await screen.findAllByRole('img');
    expect(icons).toHaveLength(4);
  });

  test('click to one and test window.open', async () => {
    const icons = await screen.findAllByRole('img');
    const firstIcon = icons[0];
    fireEvent.click(firstIcon);

    expect(window.open).toHaveBeenCalledWith('mailto:esrafil.elahi@gmail.com', '_blank');
  });

  test('copy right text hide in mobile mode', async () => {
    const copyRight = screen.getByText('Copyright © esrafil.elahi@gmail.com 2023 All Rights Reserved');
    expect(copyRight).toBeInTheDocument();

    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    // Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 200 });

    render(<Footer />);
  });
});
