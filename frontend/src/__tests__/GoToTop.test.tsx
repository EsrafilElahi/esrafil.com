import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, test } from 'vitest';
import GoToTop from '../components/GoToTop';

beforeEach(() => {
  render(<GoToTop />);
});

afterEach(() => {
  cleanup();
});

describe('GoToTop Component', () => {
  test('render GoToTop', () => {
    const { container } = render(<GoToTop />);
    expect(container).toBeInTheDocument();
  });

  test('GoToTop snapshot', () => {
    const result = render(<GoToTop />);
    expect(result).toMatchSnapshot();
  });

  test('exist and click on it', async () => {
    const arrow = screen.getByRole('img');
    expect(arrow).toBeInTheDocument();
  });
});
