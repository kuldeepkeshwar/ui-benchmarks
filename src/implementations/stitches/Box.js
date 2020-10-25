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

export default function Box({ color, fixed = false, layout = 'column', outer = false, ...props }) {
  return (
    <View
      css={{
        backgroundColor: COLOR[color] || 'transparent',
        height: fixed ? '6px' : '',
        width: fixed ? '6px' : '',
        alignSelf: 'flex-start',
        flexDirection: layout === 'column' ? 'column' : 'row',
        padding: outer ? '4px' : '0',
      }}
      {...props}
    />
  );
}
