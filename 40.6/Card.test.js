import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('matches snapshot for Card component', () => {
    const { asFragment } = render(<Card title="Test Title" content="Test Content" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders Card component without crashing', () => {
    render(<Card title="Test Title" content="Test Content" />);
  });