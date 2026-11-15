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
  it('renders an app wordmark and label', () => {
    const screen = render(<Tile {...defaultProps} />);
    const tile = screen.getByTestId('test-tile');
    const style = Object.assign({}, ...[tile.props.style].flat());

    expect(screen.getByText('Test Tile')).toBeTruthy();
    expect(screen.getByText('T')).toBeTruthy();
    expect(style.backgroundColor).toBe('rgba(5, 10, 24, 0.88)');
  });

  it('applies a glowing cyan focus style', () => {
    const screen = render(<Tile {...defaultProps} isFocused={true} />);
    const tile = screen.getByTestId('test-tile');
    const style = Object.assign({}, ...[tile.props.style].flat());

    expect(style.backgroundColor).toBe('rgba(5, 35, 83, 0.96)');
    expect(style.borderColor).toBe('#50D9FF');
    expect(style.shadowColor).toBe('#18BFFF');
  });
});
