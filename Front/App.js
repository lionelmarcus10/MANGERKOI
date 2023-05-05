import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import NavigationBar from './src/Mynav/Nav';
import Login from './src/Log/LogIn';
import SignUp from './src/Log/SignUp';
import Start from './src/Log/Start';
import LogStack from './src/Mynav/LogStack';
import DisplayCardList from './src/Components/Design/DisplayCardList';
import MainNav from './src/Mynav/MainNav';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainNav/>
      <StatusBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff' #F4F4F4,
    /*alignItems: 'center',
    justifyContent: 'center',*/
  },
});
