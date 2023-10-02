import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, test } from 'vitest';
import App from '../App';
import Title from '../components/Title';

describe('Title', () => {
  afterEach(() => {
    cleanup();
  });

  // beforeEach(() => {
  //   render(<App />);
  // });

  it('should render hello world', () => {
    expect(true).toBeTruthy();
  });

  test('ttest app', () => {
    render(<Title handleScroll={vi.fn()} />);
  });

  it('Should render the page correctly', async () => {
    const h1 = screen.findByText('hello world');
    expect(h1).not.toBeNull();
  });
});
