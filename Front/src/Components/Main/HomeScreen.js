import { View,Image, Text, SafeAreaView, ScrollView,Dimensions, Pressable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { MaterialIcons, FontAwesome} from '@expo/vector-icons';
import Category from '../Design/Category';
import { FlatList } from 'react-native';
import RequestToApis from '../../API/RequestToApis';
import CardOne from '../Design/CardOne';

const HomeScreen = ({navigation}) => { 
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  let [RandomData, setRandomData] = useState([])
  function random(){
    let RandomReciepe = new RequestToApis().RandomReciepe().then((data) => setRandomData(data) ) 
  }
  function navigateTo(){
    navigation.getParent().navigate("LogStack")
  }
  
  useEffect(() => {
    random()
    console.log('mount it!');
  },[]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row flex-nowrap pt-6 justify-center items-center px-6">
          <Text className="text-center font-medium text-3xl mx-auto pl-25 flex-1">Acceuil</Text>
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
                    name="Home"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Experiences"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Resturant"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Resturant"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Resturant"
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
          <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // integrer le carousel en flatlist , le renomer ainsi que tous ses files, le redisigner avec les props (width, height, urlimage, name ou dataitem) et les styles
            >
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Home"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Experiences"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Resturant"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Resturant"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Resturant"
                />
            </ScrollView>
        </ScrollView>
        
        <View className="">
          <View className="py-4 flex flex-row flex-nowrap justify-between px-3">
              <TouchableOpacity>
                  <Text className="text-xl font-bold text-gray-400">Explorer</Text>
              </TouchableOpacity>
              <Pressable onPress={random}>
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
                <TouchableOpacity onPress={navigateTo}>
                    <CardOne width={width/1.5} height={height/3.5} flex={2} imageUri={item.image} name={item.title} duration={item.readyInMinutes} display={false}  />
                </TouchableOpacity> }
                />
        </View>
        
        <ScrollView className="pb-20">
          <View className="py-4 flex flex-row flex-nowrap justify-between px-3">
              <Text className="text-xl font-bold text-gray-400">Vous avez aimé</Text>
              <Pressable>
                <MaterialIcons name="navigate-next" size={30} color="#BDBDBD" />
              </Pressable>
          </View>
          <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // integrer le carousel en flatlist , le renomer ainsi que tous ses files, le redisigner avec les props (width, height, urlimage, name ou dataitem) et les styles
            >
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Home"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Experiences"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Resturant"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Resturant"
                />
                <Category imageUri={require("../../Assets/img1.jpg")}
                    name="Resturant"
                />
            </ScrollView>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen