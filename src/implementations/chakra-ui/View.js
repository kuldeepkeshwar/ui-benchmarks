import { Box } from '@chakra-ui/core'
import React from 'react'

const viewStyle = {
  alignItems: 'stretch',
  borderWidth: 0,
  borderStyle: 'solid',
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: 'auto',
  flexDirection: 'column',
  flexShrink: 0,
  margin: 0,
  padding: 0,
  position: 'relative',
  // fix flexbox bugs
  minHeight: 0,
  minWidth: 0,
}

const View = ({ style, ...other }) => {
  return <Box {...viewStyle} {...other} style={style} />
}

export default View
