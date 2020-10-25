import { createElement } from 'react'
import { setup } from 'goober'
import Box from './Box'
import Dot from './Dot'
import Provider from './Provider'
import View from './View'

setup(createElement)

export default {
  Box,
  Dot,
  Provider,
  View,
}
