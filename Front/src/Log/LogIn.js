import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import LogTop from '../Assets/LogTop.svg'
import LogBottom from '../Assets/LogBottom.svg'
import AddUser from '../Assets/AddUser.svg'
import {FontAwesome} from '@expo/vector-icons'
import Authfunc from '../Firebase/Auth'



const Login = () => {
  
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [validity, setValidity] = useState("false")
  const ConnectToAccount = () => {
    
    let connector = new Authfunc()
    let result = connector.Login(mail,password)
    console.log(result)
  }
  return (
    
      <View className="h-full flex justify-between bg-[#F3F3F3]">

      <View className="self-end">
        <LogTop/>
        <View className="absolute top-9 left-44">
          <AddUser width={50} height={50}/>
        </View>
      </View>

        <View className="justify-center items-center">
      
          <View className="bg-[#597E6175]/[.46] space-y-3 px-4 pt-12 rounded-2xl pb-8">
              

            <View className="space-y-1">
              <Text className="font-bold text-md">Addresse e-mail :</Text>
              <TextInput placeholder="E-mail" value={mail} onChangeText={setMail} className="bg-[#D9D9D9] p-1 rounded-xl"/>
            </View>

            <View className="pb-4 space-y-1">
              <Text className="font-bold text-md">Mot de passe :</Text>
              <TextInput value={password} onChangeText={setPassword} placeholder="Mot de passe" className="bg-[#D9D9D9] p-1 rounded-xl"/>
            </View>

            <TouchableOpacity onPress={ConnectToAccount} className="bg-[#597E61] rounded-md py-3 px-16 mx-auto">
              <Text className="font-bold text-white text-center text-xl"> Se connecter </Text>
            </TouchableOpacity>

          </View>
        </View>

        <View className="self-start">
            <LogBottom/>
            <TouchableOpacity className="absolute bottom-6 right-40">
              <FontAwesome name="long-arrow-left" size={35} color="white"/>
            </TouchableOpacity>
        </View>
        

      </View>
    
  )
}

export default Login
