import { View, Text } from 'react-native'
import React from 'react'
import AddUser from "../Assets/AddUser.svg"
import FindUser from "../Assets/FindUser.svg"


const Start = () => {
  return (
    <View className="bg-[#597E61] h-full flex flex-row flex-nowrap justify-center items-center space-x-8">
      
      <View className="bg-white/[.46] px-5 pt-4 pb-3 rounded-[20px] w-[113px] h-[155px]">
        <View className="flex flex-col items-center justify-center">
            <AddUser width={90} height={90}/>
            <Text className="text-white text-center">Créer un compte</Text>
        </View>
      </View>

      <View className="bg-white/[.46] px-5 pt-4 pb-3 rounded-[20px] w-[113px] h-[155px]">
        <View className="flex flex-col items-center justify-center">
            <FindUser width={90} height={90}/>
            <Text className="text-white text-center">Se Connecter</Text>
        </View>
      </View>
      
    </View>
  )
}

export default Start