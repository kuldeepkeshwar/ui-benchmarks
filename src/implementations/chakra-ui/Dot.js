/* eslint-disable react/prop-types */
// import { styled } from 'goober';
import React from 'react'
import { Box } from '@chakra-ui/core'

const getStyle = (p) => ({
  position: 'absolute',
  cursor: 'pointer',
  width: 0,
  height: 0,
  borderColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: 0,
  transform: 'translate(50%, 50%)',
  borderRightWidth: `${p.size / 2}px`,
  borderBottomWidth: `${p.size / 2}px`,
  borderLeftWidth: `${p.size / 2}px`,
  marginLeft: `${p.x}px`,
  marginTop: `${p.y}px`,
})

const Dot = ({ color, ...props }) => {
  return <Box {...getStyle(props)} style={{ borderBottomColor: color }} />
}

export default Dot
