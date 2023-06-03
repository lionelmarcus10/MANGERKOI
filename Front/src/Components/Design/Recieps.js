import { View, Text, ScrollView, Image,Dimensions, Pressable, TouchableOpacity } from 'react-native'
import RequestToApis from '../../API/RequestToApis';
import React, { useEffect, useState } from 'react';
import { FontAwesome,AntDesign } from '@expo/vector-icons';
import {  resetList, add_to_list_liked, remove_from_list_liked } from '../../Store/DataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'react-native-reanimated';

const Recieps = ( {navigation, route}) => {

  let dispatch = useDispatch()
  let get_data_state = useSelector(state => state.reducer.DataItem)
  function parseInstructions(text){
    const regex = /(<([^>]+)>)/ig;
    const textWithoutTags = text.replace(regex, "").replace("\n", "");
    const sentences = textWithoutTags.split(".");
    return sentences;
  }

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  useEffect(() => {
    
    checkIfInStore();
  },[]);

  let [color, setColor] = useState("black")

  // changer la couleur et mettre dans le store ou retirer du store

  function changeColor(){
    if(color == "black"){
      setColor("green")
      // mettre dans le store 
      dispatch(add_to_list_liked(route.params.id))
    }else{
      setColor("black")
      // "enlever du store"
      dispatch(remove_from_list_liked(route.params.id))

    }
  }

  // verifier si la recette est dans le store ou pas et set la couleur en consequence
  function checkIfInStore(){

    // get into variable the state of the store list_liked
    let liked = get_data_state.list_liked
    liked.includes(route.params.id) ? setColor("green") : setColor("black")
    }
  console.log(get_data_state)
    // supprimer le console log

    // fonction pour afficher les instructions et afficher sous forme de card les inngrédients
    
    
  return (
    <ScrollView className="bg-gray-100">
      <View className="flex flex-row flex-nowrap pt-6 justify-center items-center px-6">
          <Text className="text-center font-medium text-3xl mx-auto pl-25 flex-1">Recette</Text>
          <View className="justify-center items-center  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
            <Image source={require('../../Assets/head.png')} className="w-full h-full rounded-full"/>
          </View>
        </View>
        <View className="mx-4 my-3 rounded-lg border-solid border-2 border-black bg-white">

            <Text className="font-bold py-2 px-2">{ route.params.infos.title }</Text>

            <View className="w-full">
              <Image className="w-full" source={{uri: route.params.infos.image}}
                          style={{ flex: 0.15, height: height/5, resizeMode: 'cover' }}
                      />
              <View className="flex flex-row flex-nowrap px-2 justify-between py-2">
                <View className="flex flex-row space-x-2">
                  <View className="justify-self-center flex justify-center">
                      <FontAwesome name="circle" size={9} color="green" />
                  </View>
                  <Text className="text-xs my-auto">{route.params.infos.readyInMinutes} min</Text>
                </View>
                <TouchableOpacity className="flex flex-row space-x-1 bg-gray-300 px-3 py-1 rounded-full" onPress={ ()=> changeColor() }>
                        <View className="">
                            <AntDesign name="like1" size={15} color={color} />
                        </View>
                        <Text className="font-bold text-xs" style={{ color: color }} >Mes favoris</Text>
                </TouchableOpacity>
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
                    
                </View>

              </View>

            </View>
            
        </View>

    </ScrollView>
  )
}

export default Recieps