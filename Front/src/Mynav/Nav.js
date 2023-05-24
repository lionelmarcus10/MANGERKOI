import { View, Text,StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import ListScreen from '../Components/Main/ListScreen';
import MenuScreen from "../Components/Main/MenuScreen";
import HomeScreen from "../Components/Main/HomeScreen"; 
// this is for  a test




// fin test


const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: [
        { position: 'absolute',height:60, shadowColor: "#000",shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: -30,
        elevation: 5,
      }],tabBarShowLabel: false ,
      }}
      initialRouteName='Acceuil'
      >
        <Tab.Screen name="Menu" component={MenuScreen} options={{ tabBarItemStyle: [] ,tabBarIcon: ()=> (<MaterialIcons name="restaurant-menu" size={30} color="black" />) }} />
        <Tab.Screen name="Acceuil" component={HomeScreen}  options={{ tabBarItemStyle: [] ,tabBarIcon: ()=> (<MaterialCommunityIcons name="food-variant" size={30} color="black" />) }}/>
        <Tab.Screen name="Courses" component={ListScreen} options={{ tabBarItemStyle: [] ,tabBarIcon: ()=> (<AntDesign name="shoppingcart" size={30} color="black" />) }} />
     </Tab.Navigator>
    
  )
}

