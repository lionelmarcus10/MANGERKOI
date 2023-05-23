import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { store } from '../../Store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { listNeedAdd, resetLists, resetListNeed } from '../../Store/ListSlice';



export default function MenuScreen() {
  let [testval, setTestval] = React.useState("testval")
  
  let dispatch = useDispatch()
  console.log('state of store is :: ', store.getState().reducer)
  return (
    <View>
      <Text>MenuScreen22</Text>
      <Button onPress={() => {dispatch(resetListNeed()), console.log('state of store is :: ------') } }>test update</Button>
      <Text>this is : { testval }</Text>
      <Text> { () => console.log(useSelector(state => state.reducer.ListItem.list_need)) } --- </Text>
    </View>
  )
}
