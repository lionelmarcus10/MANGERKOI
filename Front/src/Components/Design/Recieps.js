import { View, Text, ScrollView, Image,Dimensions } from 'react-native'
import RequestToApis from '../../API/RequestToApis';
import React, { useEffect, useState } from 'react';
import { FontAwesome,AntDesign } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';
const Recieps = ( {navigation, route}) => {
  function parseInstructions(text){
    const regex = /(<([^>]+)>)/ig;
    const textWithoutTags = text.replace(regex, "").replace("\n", "");
    const sentences = textWithoutTags.split(".");
    return sentences;
  }
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  function loadRecieps(){
    //let allInfos = new RequestToApis().ReciepeById(id).then((data) => setReciepsData(data));
    let k = parseInstructions(route.params.infos.instructions)
    console.log(k.lenght, k[-1],"looooo")
    setReciepsData(parseInstructions(route.params.infos.instructions))
    if(ReciepsData[ReciepsData.length-1] == ""){
      setReciepsData(ReciepsData.slice(0,ReciepsData.length-1))
      console.log("looooo2")
    }
    console.log(ReciepsData[ReciepsData.length-1],"looooo")
  }
  useEffect(() => {
    
    loadRecieps();
  },[]);
  let [ ReciepsData, setReciepsData ] = useState([])
  return (
    <ScrollView className="bg-gray-100">
      <View className="flex flex-row flex-nowrap pt-6 justify-center items-center px-6">
          <Text className="text-center font-medium text-3xl mx-auto pl-25 flex-1">Recette</Text>
          <View className="justify-center items-center  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
            <Image source={require('../../Assets/head.png')} className="w-full h-full rounded-full"/>
          </View>
        </View>
        <View className="mx-4 my-3 rounded-lg border-solid border-2 border-black bg-white">

            <Text className="font-bold py-2 px-2">{ ReciepsData.title }</Text>

            <View className="w-full">
              <Image className="w-full" source={{uri: ReciepsData.image}}
                          style={{ flex: 0.15, height: height/5, resizeMode: 'cover' }}
                      />
              <View className="flex flex-row flex-nowrap px-2 justify-between py-2">
                <View className="flex flex-row space-x-2">
                  <View className="justify-self-center flex justify-center">
                      <FontAwesome name="circle" size={9} color="green" />
                  </View>
                  <Text className="text-xs my-auto">{ ReciepsData.readyInMinutes} min</Text>
                </View>
                <View className="flex flex-row space-x-1 bg-gray-300 px-3 py-1 rounded-full">
                        <View className="">
                            <AntDesign name="like1" size={15} color="green"/>
                        </View>
                        <Text className="text-green-800 text-xs">Mes favoris</Text>
                </View>
              </View>
            </View>

            <View className="px-2">
              
              <View>
                <Text className="font-bold">Ingrédients</Text>
                <View>

                </View>
              </View>

              <View>
                <Text className="font-bold">Preparation</Text>
                <View>
                    {ReciepsData.map((sentence, index) => (
                      <View className="">
                        <Text>ETAPE {index+1}</Text>
                        <Text key={index} className="font-bold">{sentence}</Text>
                      </View>
                    ))}
                </View>

              </View>

            </View>
            
        </View>

    </ScrollView>
  )
}

export default Recieps