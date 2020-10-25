import { Box } from 'juhuui'
import React from 'react'

const StyledBox = Box.with(({ fw: { size, color, x, y } }) => {
  return {
    position: 'absolute',
    cursor: 'pointer',
    width: '0',
    height: '0',
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
  }
})

const Dot = ({ color, size, x, y }) => {
  return <StyledBox fw={{ color, size, x, y }} />
}

export default Dot
