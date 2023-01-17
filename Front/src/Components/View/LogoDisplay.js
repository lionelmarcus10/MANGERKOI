import { View, Text } from 'react-native'
import React from 'react'
import Logo from '../../Assets/Logo.svg'
const LogoDisplay = () => {
  return (
    <View className="bg-[#597E61] h-full flex flex-row flex-nowrap justify-center items-center">
      <Logo width={178} height={155}/>
    </View>
  )
}

export default LogoDisplay