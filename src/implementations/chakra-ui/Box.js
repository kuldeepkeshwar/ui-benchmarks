import React from 'react'
import View from './View'

const getColor = (color) => {
  switch (color) {
    case 0:
      return '#14171A'
    case 1:
      return '#AAB8C2'
    case 2:
      return '#E6ECF0'
    case 3:
      return '#FFAD1F'
    case 4:
      return '#F45D22'
    case 5:
      return '#E0245E'
    default:
      return 'transparent'
  }
}

const styles = {
  outer: {
    alignSelf: 'flex-start',
    padding: 4,
  },
  row: {
    flexDirection: 'row',
  },
  color0: {
    backgroundColor: '#14171A',
  },
  color1: {
    backgroundColor: '#AAB8C2',
  },
  color2: {
    backgroundColor: '#E6ECF0',
  },
  color3: {
    backgroundColor: '#FFAD1F',
  },
  color4: {
    backgroundColor: '#F45D22',
  },
  color5: {
    backgroundColor: '#E0245E',
  },
  fixed: {
    width: 6,
    height: 6,
  },
}

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
}

const Box = React.forwardRef(
  (
    { color, fixed = false, layout = 'column', outer = false, ...props },
    ref
  ) => {
    return (
      <View
        ref={ref}
        alignSelf="flex-start"
        flexDirection={layout === 'column' ? 'column' : 'row'}
        padding={outer ? '4px' : '0'}
        backgroundColor={getColor(color)}
        height={fixed ? '6px' : ''}
        width={fixed ? '6px' : ''}
        {...props}
      />
    )
  }
)

export default Box
