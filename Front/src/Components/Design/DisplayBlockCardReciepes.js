import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CardOne from './CardOne'

const DisplayBlockCardReciepes = ( {navigation, route}) => {
  let dist = true ? route.params.title != "Vous avez aimé" : false
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex flex-row flex-nowrap pt-6 justify-center items-center px-6">
          <Text className="text-center font-medium text-3xl mx-auto pl-25 flex-1">{route.params.title}</Text>
          <View className="justify-center items-center  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
            <Image source={require('../../Assets/head.png')} className="w-full h-full rounded-full"/>
          </View>
      </View>
      <FlatList 
                 data={JSON.parse(route.params.elements)}
                 className="pb-8"
                 keyExtractor={item => item.id}
                 maxToRenderPerBatch={10}
                 showsVerticalScrollIndicator={false}
                 renderItem={({item}) =>
                    <TouchableOpacity className="mx-auto py-3">
                        <CardOne width={width/1.15} height={height/3.5} flex={2} imageUri={item.image} name={item.title} duration={item.readyInMinutes} display={dist}  />
                    </TouchableOpacity> }
                />
    </ScrollView>
  )
}

// charger plus de recettes en bas des anciennes

export default DisplayBlockCardReciepes