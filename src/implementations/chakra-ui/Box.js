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
