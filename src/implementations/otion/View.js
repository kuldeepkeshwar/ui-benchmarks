import React from 'react'
import { css } from 'otion'

const classNames = css({
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
})

const View = (props) => {
  return <div {...props} className={`${classNames} ${props.className}`} />
}

export default View
