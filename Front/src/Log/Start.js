import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Start = ({navigation}) => {

  return (
    <View className="bg-[#597E61] h-full flex flex-row flex-nowrap justify-center items-center space-x-8">
      
      <TouchableOpacity className="bg-white/[.46] pt-4 pb-3 rounded-[20px] w-[113px] h-[155px]" onPress={()=> {navigation.navigate("SignUp")}}>
        <View className="flex flex-col items-center justify-center">
            <Ionicons name="person-add" size={90} color="white" />
            <Text className="text-white text-center px-4">Créer un compte</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="bg-white/[.46] pt-4 pb-3 rounded-[20px] w-[113px] h-[155px]" onPress={()=> {navigation.navigate("Login")}}>
        <View className="flex flex-col items-center justify-center">
            
            <MaterialCommunityIcons name="account-search" size={90} color="white" />
            <Text className="text-white text-center px-5">Se Connecter</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}

export default Start