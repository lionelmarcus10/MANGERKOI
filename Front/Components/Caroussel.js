import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import Animated, {interpolate, Extrapolate, useSharedValue, useAnimatedStyle} from "react-native-reanimated";
import tw from 'twrnc';
const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH * 0.6;
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.08) / 2;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)



function Item({index, scrollX}){

  const size = useSharedValue(0.8);

  const inputRange = [
    (index -1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH
  ]

  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP,
  )


  const opacity = useSharedValue(1);
  const opacityInputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];
  opacity.value = interpolate(
    scrollX,
    opacityInputRange,
    [0.5, 1, 0.5],
    Extrapolate.CLAMP
  );

  const cardStyle = useAnimatedStyle(()=>{
    return{
      transform: [{scaleY: size.value}],
      opacity: opacity.value,
    }
  })

  return(
    <Animated.View style={[styles.card, cardStyle,tw`mx-2`,]}>
      <Image 
        source={require("./images/img1.jpg")}
        style={{width: "100%", height: "100%"}}
      />
      <Text>000</Text>
    </Animated.View>
  )
}

export default function Carousel() {

  const [scrollX, setScrollX] = useState(0);
    
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <Animated.View>
      <AnimatedFlatList 
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + (SPACING * 1.5)}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={"center"}
        data={DATA}
        horizontal={true}
        renderItem={({item, index})=>{
          return(
            <Item index={index} scrollX={scrollX} />
          )
        }}
        //@ts-ignore
        keyExtractor={(item) => item.id}
        onScroll={(event)=>{
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_LENGTH,
    height: 220,
    overflow: "hidden",
    borderRadius: 15,
  }
});