import { View, Text,TextInput, Pressable } from 'react-native'
import React from 'react'
import LogTop from '../Assets/LogTop.svg'
import LogBottom from '../Assets/LogBottom.svg'
import AddImg from '../Assets/AddImg.svg'

const SignUp = () => {
  return (
    <View className="h-full bg-white justify-center items-center">
      <View className="bg-[#597E6175]/[.46] space-y-4 px-4 pt-12 rounded-2xl pb-8">
        
        <View className="space-y-1">
          <Text className="font-bold text-md">Votre Nom :</Text>
          <TextInput className="bg-[#D9D9D9] p-1  w-[335px] rounded-xl"/>
        </View>

        <View className="space-y-1">
          <Text className="font-bold text-md">Votre Prénom :</Text>
          <TextInput className="bg-[#D9D9D9] p-1  w-[335px] rounded-xl"/>
        </View>

        <View className="space-y-1">
          <Text className="font-bold text-md">E-mail :</Text>
          <TextInput className="bg-[#D9D9D9] p-1  w-[335px] rounded-xl"/>
        </View>

        <View className="pb-4 space-y-1">
          <Text className="font-bold text-md">Mot de passe :</Text>
          <TextInput className="bg-[#D9D9D9] p-1  w-[335px] rounded-xl"/>
        </View>

        <Pressable className="bg-[#597E61] rounded-md py-3 px-16 mx-auto">
          <Text className="font-bold text-white text-center text-xl"> Continuer </Text>
        </Pressable>

      </View>
    </View>
  )
}

export default SignUp