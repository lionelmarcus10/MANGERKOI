import { StyleSheet, Text, View, StatusBar } from 'react-native';
import NavigationBar from './Mynav/Nav';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationBar/>
      <StatusBar/>
    </View>
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
