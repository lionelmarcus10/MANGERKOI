import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogStack from './LogStack';
import NavigationBar from './Nav';
import DisplayBlockCardReciepes from '../Components/Design/DisplayBlockCardReciepes';


const Stack = createStackNavigator();


const MainNav = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="TabMenu" component={NavigationBar}  />
            <Stack.Screen name="LogStack" component={LogStack} />
            <Stack.Screen name="ReciepesOnCards" component={DisplayBlockCardReciepes} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNav