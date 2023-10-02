import { act, cleanup, findByTestId, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeAll, beforeEach, describe, test } from 'vitest';
import Skills from '../components/Sections/Skills';
import mockSkills from '../mocks/skills.json';

beforeAll(() => {
  render(<Skills skills={mockSkills} />);
});

afterEach(() => {
  cleanup();
});

describe('Skills Component', () => {
  test('render Skills', () => {
    const { container } = render(<Skills skills={mockSkills} />);
    expect(container).toBeInTheDocument();
  });

  test('Skills snapshot', () => {
    const result = render(<Skills skills={mockSkills} />);
    expect(result).toMatchSnapshot();
  });

  test('get all skills and test length', async () => {
    await act(async () => {
      render(<Skills skills={mockSkills} />);
    });

    await screen.findAllByText('React').then((items) => {
      expect(items).toHaveLength(9);
    });
  });

  test('all skills has name and icon', async () => {
    await act(async () => {
      render(<Skills skills={mockSkills} />);
    });

    await screen.findAllByText('React').then((items) => {
      for (const item of items) {
        expect(within(item).getByText('React')).toBeInTheDocument();
      }
    });
  });
});
