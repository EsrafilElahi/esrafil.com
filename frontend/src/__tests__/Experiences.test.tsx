import { act, cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, test } from 'vitest';
import Experiences from '../components/Sections/Experiences';
import mockExperinces from '../mocks/experiences.json';

beforeEach(() => {
  render(<Experiences experiences={mockExperinces} />);
});

afterEach(() => {
  cleanup();
});

describe('Experiences Component', async () => {
  test('renders correctly', () => {
    const { container } = render(<Experiences experiences={mockExperinces} />);
    expect(container).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Experiences experiences={mockExperinces} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('length of experiences is equal to mockExperinces.length', async () => {
    const exps = await screen.findAllByTestId('exp');
    expect(exps).toHaveLength(4);

    const firstExp = exps[0];
    const secondExp = exps[1];
    const thirdExp = exps[2];
    const fourthExp = exps[3];

    expect(within(firstExp).getByText('frontend developer')).toBeInTheDocument();
    expect(within(secondExp).getByText('frontend reactjs | nextjs | typescript developer')).toBeInTheDocument();
    expect(within(thirdExp).getByText('senior frontend developer')).toBeInTheDocument();
    expect(within(fourthExp).getByText('senior frontend engineer')).toBeInTheDocument();
  });
});
