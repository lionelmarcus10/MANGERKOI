import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import NavigationBar from './src/Mynav/Nav';
import Login from './src/Log/LogIn';
import SignUp from './src/Log/SignUp';
import Start from './src/Log/Start';
import LogStack from './src/Mynav/LogStack';
import DisplayCardList from './src/Components/Design/DisplayCardList';

import MainNav from './src/Mynav/MainNav';
import { Provider } from 'react-redux'
import { persistor, store } from './src/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <SafeAreaView style={styles.container}>
          <MainNav/>
          <StatusBar/>
        </SafeAreaView>
      </PersistGate>
    </Provider>
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
