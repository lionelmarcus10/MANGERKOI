import { View, Text, ScrollView, Image,Dimensions } from 'react-native'
import RequestToApis from '../../API/RequestToApis';
import React, { useEffect, useState } from 'react';

const Recieps = ( {navigation, route}) => {
  
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  function loadRecieps(id){
    let allInfos = new RequestToApis().ReciepeById(id).then((data) => setReciepsData(data));
  }
  useEffect(() => {
    
    loadRecieps(route.params.id);
  },[]);
  let [ ReciepsData, setReciepsData ] = useState([])
  return (
    <ScrollView>
      <View className="flex flex-row flex-nowrap pt-6 justify-center items-center px-6">
          <Text className="text-center font-medium text-3xl mx-auto pl-25 flex-1">Recette</Text>
          <View className="justify-center items-center  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
            <Image source={require('../../Assets/head.png')} className="w-full h-full rounded-full"/>
          </View>
        </View>
        <View className="mx-4 my-3 rounded-lg border-solid border-2 border-black">
            <Text className="font-bold py-2 px-2">{ ReciepsData.title }</Text>
            <View className="w-full h-full">
              <Image className="w-full" source={{uri: ReciepsData.image}}
                          style={{ flex: 0.15, height: height/6, resizeMode: 'cover' }}
                      />
            </View>

            <View>
              <Text>Ingrédients</Text>
              <View>
                <Text>hellow</Text>
              </View>
            </View>
            
        </View>

    </ScrollView>
  )
}

export default Recieps