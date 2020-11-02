/* eslint-disable react/prop-types */
import { css } from 'juhuui';
import React from 'react';

const classNames = css({
  position: 'absolute',
  cursor: 'pointer',
  width: '0',
  height: '0',
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: '0',
  transform: 'translate(50%, 50%)',
});

const Dot = ({ color, size, x, y }) => {
  return (
    <div
      className={`${css({
        borderRightWidth: `${size / 2}px`,
        borderBottomWidth: `${size / 2}px`,
        borderLeftWidth: `${size / 2}px`,
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
        borderBottomColor: color,
      })} ${classNames}`}
    />
  );
};

export default Dot;
