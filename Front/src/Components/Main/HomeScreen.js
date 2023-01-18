import { View,Image, Text, SafeAreaView, ScrollView,Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Carousel from '../Design/Caroussel';
import Category from '../Design/Category';
const scale = 0.8;
const PAGE_WIDTH = window.width * scale;
const PAGE_HEIGHT = 240 * scale;

function Index() {
    const AutoPLay = useToggleButton({
        defaultValue: false,
        buttonTitle: ElementsText.AUTOPLAY,
    });

    const animationStyle = React.useCallback(
        (value) => {
            'worklet';

            const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
            const scale = interpolate(value, [-1, 0, 1], [1.25, 1, 0.25]);
            const rotateZ = `${interpolate(
                value,
                [-1, 0, 1],
                [-45, 0, 45]
            )}deg`;
            const translateX = interpolate(
                value,
                [-1, 0, 1],
                [-PAGE_WIDTH, 0, PAGE_WIDTH]
            );
            const opacity = interpolate(value, [-0.75, 0, 1], [0, 1, 0]);

            return {
                transform: [{ scale }, { rotateZ }, { translateX }],
                zIndex,
                opacity,
            };
        },
        []
    );
}
    
const HomeScreen = () => { 
  const width = Dimensions.get('window').width;
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row flex-nowrap pt-6 justify-center items-center px-6">
          <Text className="text-center font-medium text-3xl mx-auto pl-25 flex-1">Acceuil</Text>
          <View className="justify-center items-center  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
            <Image source={require('../../Assets/img1.jpg')} className="w-full h-full rounded-full"/>
          </View>
        </View>
        <ScrollView className="">
          <View className="py-4 flex flex-row flex-nowrap justify-between px-3">
            <Text className="text-xl font-bold text-gray-400">Dans votre frigo</Text>
            <Pressable>
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
        
        <ScrollView className="px-3">
          <View className="py-4 flex flex-row flex-nowrap justify-between">
            <Text className="text-xl font-bold text-gray-400">Vous pouvez faire</Text>
            <Pressable>
              <MaterialIcons name="navigate-next" size={30} color="#BDBDBD" />
            </Pressable>
          </View>
          <Text>Caroussel view</Text>
        </ScrollView>
        
        <ScrollView className="">
          <View className="py-4 flex flex-row flex-nowrap justify-between px-3">
              <Text className="text-xl font-bold text-gray-400">Explorer</Text>
              <Pressable>
                <MaterialIcons name="navigate-next" size={30} color="#BDBDBD" />
              </Pressable>
          </View>
          <Carousel/>
        </ScrollView>
        
        <ScrollView className="pb-20">
          <View className="py-4 flex flex-row flex-nowrap justify-between px-3">
              <Text className="text-xl font-bold text-gray-400">Vous avez aimé</Text>
              <Pressable>
                <MaterialIcons name="navigate-next" size={30} color="#BDBDBD" />
              </Pressable>
          </View>
          <Carousel/>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen