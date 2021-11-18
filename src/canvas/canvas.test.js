import { render, screen } from '@testing-library/react';

import RedRectangle from './RedRectangle';

describe('RedRectangle', () => {
  test('renders RedRectangle', () => {
    render(<RedRectangle />);

    screen.getByTestId('canvas');
  })
})