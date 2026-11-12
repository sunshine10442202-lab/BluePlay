import 'react-native';
import {render} from '@testing-library/react-native';
import * as React from 'react';

import {Tile} from '../src/components/Tile';

const defaultProps = {
  label: 'Test Tile',
  logo: 'T',
  isFocused: false,
  onFocus: jest.fn(),
  testID: 'test-tile',
};

describe('Tile', () => {
  it('renders an app logo and label', () => {
    const screen = render(<Tile {...defaultProps} />);
    const tile = screen.getByTestId('test-tile');
    const style = Object.assign({}, ...[tile.props.style].flat());

    expect(screen.getByText('Test Tile')).toBeTruthy();
    expect(screen.getByText('T')).toBeTruthy();
    expect(style.backgroundColor).toBe('rgba(8, 22, 43, 0.84)');
  });

  it('applies a glowing blue focus style', () => {
    const screen = render(<Tile {...defaultProps} isFocused={true} />);
    const tile = screen.getByTestId('test-tile');
    const style = Object.assign({}, ...[tile.props.style].flat());

    expect(style.backgroundColor).toBe('rgba(18, 65, 115, 0.96)');
    expect(style.borderColor).toBe('#55B4FF');
    expect(style.shadowColor).toBe('#168BFF');
  });
});
