import React from 'react';
import View from './View';

const COLOR = {
  0: '#14171A',
  1: '#AAB8C2',
  2: '#E6ECF0',
  3: '#FFAD1F',
  4: '#F45D22',
  5: '#E0245E',
};

const view = {
  alignItems: 'stretch',
  borderWidth: 0,
  borderStyle: 'solid',
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: 'auto',
  flexShrink: 0,
  margin: 0,
  padding: 0,
  position: 'relative',
  minHeight: 0,
  minWidth: 0,
};

const Box = ({ color, fixed = false, layout = 'column', outer = false, ...props }) => {
  return (
    <View
      // ref={ref}
      alignSelf="flex-start"
      flexDirection={layout === 'column' ? 'column' : 'row'}
      padding={outer ? '4px' : '0'}
      backgroundColor={COLOR[color] || 'transparent'}
      height={fixed ? '6px' : ''}
      width={fixed ? '6px' : ''}
      {...props}
    />
  );
};

export default Box;
