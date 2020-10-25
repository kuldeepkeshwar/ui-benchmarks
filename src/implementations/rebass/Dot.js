import React from 'react';
import { Box } from 'rebass';

const Dot = ({ color, size, x, y }) => {
  return (
    <Box
      width="0"
      height="0"
      sx={{
        position: 'absolute',
        cursor: 'pointer',
        borderColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: '0',
        transform: 'translate(50%, 50%)',
        borderRightWidth: `${size / 2}px`,
        borderBottomWidth: `${size / 2}px`,
        borderLeftWidth: `${size / 2}px`,
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
        borderBottomColor: color,
      }}
    />
  );
};

export default Dot;
