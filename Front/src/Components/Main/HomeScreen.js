import { View,Image, Text, SafeAreaView, ScrollView,Dimensions, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useMemo } from 'react';
import { MaterialIcons, FontAwesome} from '@expo/vector-icons';
import Category from '../Design/Category';
import { FlatList } from 'react-native';
import RequestToApis from '../../API/RequestToApis';
import CardOne from '../Design/CardOne';
import SmallCardOne from '../Design/SmallCardOne';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const HomeScreen = ({navigation}) => { 

  get_data_state = useSelector(state => state.reducer.DataItem)

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  let [RandomData, setRandomData] = useState([])
  let [Liked, setLiked] = useState([])
  let [Can_DO, setCan_DO] = useState([])

  function random(){
    let RandomReciepe = new RequestToApis().RandomReciepe().then((data) => setRandomData(data) ) 
  }
  function likedLoad(){
    let likedItem = new RequestToApis().MultipleReciepeByIds(get_data_state.list_liked).then((data)=> setLiked(data))
  }

  function canDOLoad(){
    let canDOItem = new RequestToApis().MultipleReciepeByIds(get_data_state.list_canDO).then((data)=> setCan_DO(data))
  }

  function navigateTo(dataList,titre){
    navigation.getParent().navigate("ReciepesOnCards",{title: titre, elements: JSON.stringify([...dataList])})
  }
  function navigateToReciep(identifiant, allTheData ){
    navigation.navigate("Recieps",{id: identifiant, infos: allTheData })
  }
  useEffect(() => {
    random();
    canDOLoad();
    likedLoad();
  },[]);

  useMemo(() => {
    likedLoad();
  },[get_data_state.list_liked]);

  useMemo(() => {
    canDOLoad();
  },[get_data_state.list_canDO]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row flex-nowrap pt-6 justify-center items-center px-6">
          <Text className=" font-medium text-3xl text-center pl-25 flex-1">Accueil</Text>
          <View className="justify-center items-center  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
            <Image source={require('../../Assets/head.png')} className="w-full h-full rounded-full"/>
          </View>
        </View>

        <ScrollView className="">
          <View className="py-4 flex flex-row flex-nowrap justify-between px-3">
            <Text className="text-xl font-bold text-gray-400">Dans votre frigo</Text>
            <Pressable onPress={random}>
                <MaterialIcons name="navigate-next" size={30} color="#BDBDBD" />
            </Pressable>
          </View>
          
          
          <View>
          
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // integrer le carousel en flatlist , le renomer ainsi que tous ses files, le redisigner avec les props (width, height, urlimage, name ou dataitem) et les styles
            >

                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="oil"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="vinegra"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="onion"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="tomato"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="avocado"
                />

            </ScrollView>
        </View>
        </ScrollView>
        
        <ScrollView className="">
          <View className="py-4 flex flex-row flex-nowrap justify-between px-3">
            <Text className="text-xl font-bold text-gray-400">Vous pouvez faire</Text>
            <Pressable>
              <MaterialIcons name="navigate-next" size={30} color="#BDBDBD" />
            </Pressable>
          </View>
          { get_data_state.list_canDO.length > 0 && (
              <FlatList
              data={Can_DO}
              keyExtractor={item => item.id}
              maxToRenderPerBatch={10}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>
            <TouchableOpacity onPress={likedLoad}>
                <SmallCardOne imageUri={item.image} name={item.title}/>
            </TouchableOpacity> }
            />)
          }
          {
            !get_data_state.list_canDO.length > 0 && (
              <View className="flex flex-row flex-nowrap justify-center items-center px-8">
                <Text className="text-lg font-bold text-center text-gray-500">Les ingrédients que vous avez ne vous permettent pas de faire une quelconque recette</Text>
              </View>
            ) 
          }
        </ScrollView>
        
        <View className="">
          <View className="py-4 flex flex-row flex-nowrap justify-between px-3">
              <TouchableOpacity onPress={()=>random()}>
                  <Text className="text-xl font-bold text-gray-400">Explorer</Text>
              </TouchableOpacity>
              <Pressable onPress={() => navigateTo(RandomData,"Explorer")}>
                <MaterialIcons name="navigate-next" size={30} color="#BDBDBD" />
              </Pressable>
          </View>
          <FlatList
                 data={RandomData}
                 keyExtractor={item => item.id}
                 maxToRenderPerBatch={10}
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=> navigateToReciep(item.id,item)}>
                    <CardOne width={width/1.5} height={height/3.5} flex={2} imageUri={item.image} name={item.title} duration={item.readyInMinutes} display={false}  />
                </TouchableOpacity> }
                />
        </View>
        
        <View className="pb-20">
          <View className="py-4 flex flex-row flex-nowrap justify-between px-3">
              <Text className="text-xl font-bold text-gray-400">Vous avez aimé</Text>
              <Pressable onPress={() => {
                if(Liked.length > 0){
                  navigateTo(Liked,"Vous avez aimé")  
                }}} >
                <MaterialIcons name="navigate-next" size={30} color="#BDBDBD" />
              </Pressable>
          </View>
            { Liked.length > 0 && (
              <FlatList
              data={Liked}
              keyExtractor={item => item.id}
              maxToRenderPerBatch={10}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>
            <TouchableOpacity onPress={()=> navigateToReciep(item.id,item)}>
                <SmallCardOne imageUri={item.image} name={item.title}/>
            </TouchableOpacity> }
            />)
          }
          {
            !Liked.length > 0 && (
              <View className="flex flex-row flex-nowrap justify-center items-center">
                <Text className="text-lg font-bold text-black">Vous n'avez pas encore aimé de recette</Text>
              </View>
            )
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen