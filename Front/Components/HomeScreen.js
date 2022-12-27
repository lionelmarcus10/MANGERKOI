import { View, Text, SafeAreaView, ScrollView,Dimensions } from 'react-native'
import React, { useState } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import tw from 'twrnc';
import { MaterialIcons } from '@expo/vector-icons';
//import Carousel from 'react-native-reanimated-carousel';
import Carousel from './Caroussel';
import Category from './Category'
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
        <View style={tw`flex flex-row flex-nowrap pt-6 justify-around px-3`}>
          <Text style={tw`text-center font-medium text-3xl mx-auto pl-25 flex-1`}>Acceuil</Text>
          <View style={tw`w-25 justify-center`}>
            <Text style={tw`text-center`}>icone</Text>
          </View>
        </View>
        <ScrollView style={tw``}>
          <View style={tw`py-4 flex flex-row flex-nowrap justify-between px-3`}>
            <Text style={tw`text-xl font-bold text-gray-400`}>Dans votre frigo</Text>
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
                <Category imageUri={require('../Components/images/img1.jpg')}
                    name="Home"
                />
                <Category imageUri={require('../Components/images/img1.jpg')}
                    name="Experiences"
                />
                <Category imageUri={require('../Components/images/img1.jpg')}
                    name="Resturant"
                />
                <Category imageUri={require('../Components/images/img1.jpg')}
                    name="Resturant"
                />
                <Category imageUri={require('../Components/images/img1.jpg')}
                    name="Resturant"
                />
            </ScrollView>
        </View>
        </ScrollView>
        <ScrollView style={tw`px-3`}>
          <View style={tw`py-4 flex flex-row flex-nowrap justify-between`}>
            <Text style={tw`text-xl font-bold text-gray-400`}>Vous pouvez faire</Text>
            <Pressable>
              <MaterialIcons name="navigate-next" size={30} color="#BDBDBD" />
            </Pressable>
          </View>
          <Text>Caroussel view</Text>
        </ScrollView>
        <ScrollView style={tw``}>
          <View style={tw`py-4 flex flex-row flex-nowrap justify-between px-3`}>
              <Text style={tw`text-xl font-bold text-gray-400`}>Explorer</Text>
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