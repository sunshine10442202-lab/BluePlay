import 'react-native';
import {render} from '@testing-library/react-native';
import * as React from 'react';

import {Tile} from '../src/components/Tile';

const defaultProps = {
  label: 'Test Tile',
  icon: {uri: 'mock-icon'},
  isFocused: false,
  onFocus: jest.fn(),
  testID: 'test-tile',
};

describe('Tile', () => {
  it('renders with the default BluePlay style', () => {
    const screen = render(<Tile {...defaultProps} />);
    const tile = screen.getByTestId('test-tile');
    const style = Object.assign({}, ...[tile.props.style].flat());

    expect(screen.getByText('Test Tile')).toBeTruthy();
    expect(style.backgroundColor).toBe('rgba(10, 27, 52, 0.88)');
  });

  it('applies the blue focused style', () => {
    const screen = render(<Tile {...defaultProps} isFocused={true} />);
    const tile = screen.getByTestId('test-tile');
    const style = Object.assign({}, ...[tile.props.style].flat());

    expect(style.backgroundColor).toBe('rgba(15, 65, 117, 0.96)');
    expect(style.borderColor).toBe('#55B4FF');
  });
});
