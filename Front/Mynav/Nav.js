import { View, Text,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import HomeScreen from '../Components/HomeScreen';
import ListScreen from '../Components/ListScreen';
import MenuScreen from '../Components/MenuScreen';
const Tab = createBottomTabNavigator();

export default function NavigationBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { position: 'absolute' },tabBarShowLabel: false }} >
        <Tab.Screen name="Menu" component={MenuScreen} options={{  tabBarIcon: ()=> {<MaterialIcons name="restaurant-menu" size={10} color="red" />} }} />
        <Tab.Screen name="Acceuil" component={HomeScreen}  options={{  tabBarIcon: ()=> {<MaterialIcons name="food-variant" size={10} color="red" />} }}/>
        <Tab.Screen name="Courses" component={ListScreen} options={{ tabBarIcon: ()=> {<AntDesign name="shoppingcart" size={24} color="black" />} }} />
     </Tab.Navigator>
    </NavigationContainer>
  )
}

