import { View, Text,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import HomeScreen from '../Components/HomeScreen';
import ListScreen from '../Components/ListScreen';
import MenuScreen from '../Components/MenuScreen';
import tw from 'twrnc'
const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: [tw``,
        { position: 'absolute',height:60, shadowColor: "#000",shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: -30,
        elevation: 5,
      }],tabBarShowLabel: false ,
      }}>
        <Tab.Screen name="Menu" component={MenuScreen} options={{ tabBarItemStyle: [tw``] ,tabBarIcon: ()=> (<MaterialIcons name="restaurant-menu" size={30} color="black" />) }} />
        <Tab.Screen name="Acceuil" component={HomeScreen}  options={{ tabBarItemStyle: [tw``] ,tabBarIcon: ()=> (<MaterialCommunityIcons name="food-variant" size={30} color="black" />) }}/>
        <Tab.Screen name="Courses" component={ListScreen} options={{ tabBarItemStyle: [tw``] ,tabBarIcon: ()=> (<AntDesign name="shoppingcart" size={30} color="black" />) }} />
     </Tab.Navigator>
    </NavigationContainer>
  )
}

