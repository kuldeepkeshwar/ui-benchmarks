import React from 'react'
import { css } from 'juhuui'

export const styles = {
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
  minHeight: 0,
  minWidth: 0,
}

// export const classNames = css(styles)

const View = (props) => {
  return <div {...props} />
}

export default View
//
