import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogStack from './LogStack';
import NavigationBar from './Nav';
import DisplayBlockCardReciepes from '../Components/Design/DisplayBlockCardReciepes';
import Recieps from '../Components/Design/Recieps';
import { useSelector } from 'react-redux';
const Stack = createStackNavigator();


const MainNav = () => {
  let connected = useSelector(state => state.reducer.LogItem.connected)
  let myIinitRoot = connected ? 'TabMenu' : 'LogStack'
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={myIinitRoot}>
            <Stack.Screen name="LogStack" component={LogStack} />
            <Stack.Screen name="TabMenu" component={NavigationBar}  />
            <Stack.Screen name="ReciepesOnCards" component={DisplayBlockCardReciepes} />
            <Stack.Screen name="Recieps" component={Recieps} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNav