import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Log/LogIn';
import SignUp from '../Log/SignUp';
import Start from '../Log/Start';

const Stack = createStackNavigator();

const LogStack = () => {
  return (
  
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Start" component={Start} options={{ animationTypeForReplace: "pop"}}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    
  );
}

export default LogStack;