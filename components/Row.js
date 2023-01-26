import React from 'react';
import { View } from 'react-native'

export default ({ children }) => {
  return (
    <View style={{ flexDirection: 'row' }} >{children}</View>
  )
}
