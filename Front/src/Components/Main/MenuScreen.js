import { View, Text } from 'react-native'
import React from 'react'
import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export default function MenuScreen() {
  return (
    <View>
      <Text>MenuScreen</Text>
    </View>
  )
}