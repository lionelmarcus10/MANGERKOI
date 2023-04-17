import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogStack from './LogStack';
import NavigationBar from './Nav';

const Stack = createStackNavigator();


const MainNav = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="TabMenu" component={NavigationBar}  options={{ headerShown: false }} />
            <Stack.Screen name="LogStack" component={LogStack} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNav