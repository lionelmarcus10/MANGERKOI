import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { store } from '../../Store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { listNeedAdd, resetListNeed } from '../../Store/ListSlice';
import { add_to_list_canDO } from '../../Store/DataSlice';
import { resetlog } from '../../Store/LogSlice';


export default function MenuScreen() {
  let [testval, setTestval] = React.useState("testval")
  
  let dispatch = useDispatch()
  let get_log_state = useSelector(state => state.reducer.LogItem)
  console.log('state of store is :: ', store.getState().reducer)
  return (
    <View>
      <Text>MenuScreen22</Text>
      <Button onPress={() => {dispatch(resetListNeed()), console.log('state of store is lol :: ') } }>reset list menu and need</Button>
      <Text>this is : { testval }</Text>
      <Text> { () => console.log(useSelector(state => state.reducer.ListItem.list_need)) } --- </Text>
      <Button onPress={() => {dispatch(resetlog()), console.log('main root initialized',get_log_state) } }>test update</Button>
      <Button onPress={() => {dispatch(add_to_list_canDO(633160))} }>add to can do </Button>
    </View>
  )
}
