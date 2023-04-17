import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import LogTop from '../Assets/LogTop.svg'
import LogBottom from '../Assets/LogBottom.svg'
import AddUser from '../Assets/AddUser.svg'
import {Octicons, FontAwesome} from '@expo/vector-icons'
import Authfunc from '../Firebase/Auth'

const SignUp = ({navigation}) => {
  const testcreation = ()=>{
    let insc = new Authfunc()
    insc.Signup("lio@mail.com","123456")
  }

  return (
    <View className="bg-[#F3F3F3]">
      <View className="h-full flex justify-between">

        <View className="self-end">
            <LogTop/>
            <View className="absolute top-9 left-44">
              <AddUser width={50} height={50}/>
            </View>
        </View>

        <View className="justify-center items-center">
      
          <View className="bg-[#597E6175]/[.46] space-y-3 px-4 pt-12 rounded-2xl pb-8">
              
              <TouchableOpacity className="items-center mx-auto px-8 py-5 w-full rounded-full  bg-[#D9D9D9]">
                <Octicons name="plus" size={90} color="white"/>
              </TouchableOpacity>
        
              <View className="pb-4 space-y-2">
                <Text className="font-bold text-md">Allergies alimentaires :</Text>
                <TextInput placeholder="Mot de passe" className="bg-[#D9D9D9] p-1 rounded-xl"/>
              </View>

              <TouchableOpacity onPress={testcreation} className="bg-[#597E61] rounded-md py-3 px-16 mx-auto">
                <Text className="font-bold text-white text-center text-xl"> Continuer </Text>
              </TouchableOpacity>

          </View>
        </View>
        
        <View className="self-start">
            <LogBottom/>
            <TouchableOpacity className="absolute bottom-6 right-40" onPress={navigation.goBack}>
              <FontAwesome name="long-arrow-left" size={35} color="white"/>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default SignUp

/*

        <View className="space-y-1">
          <Text className="font-bold text-md">Votre Nom :</Text>
          <TextInput placeholder="Nom" className="bg-[#D9D9D9] p-1   rounded-xl"/>
        </View>

        <View className="space-y-1">
          <Text className="font-bold text-md">Votre Prénom :</Text>
          <TextInput placeholder="Prénom" className="bg-[#D9D9D9] p-1   rounded-xl"/>
        </View>

        <View className="space-y-1">
          <Text className="font-bold text-md">E-mail :</Text>
          <TextInput placeholder="E-mail" className="bg-[#D9D9D9] p-1   rounded-xl"/>
        </View>

        <View className="pb-4 space-y-1">
          <Text className="font-bold text-md">Mot de passe :</Text>
          <TextInput placeholder="Mot de passe" className="bg-[#D9D9D9] p-1   rounded-xl"/>
        </View>

        <TouchableOpacity className="bg-[#597E61] rounded-md py-3 px-16 mx-auto">
          <Text className="font-bold text-white text-center text-xl"> Continuer </Text>
        </TouchableOpacity>

*/