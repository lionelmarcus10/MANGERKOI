import { View, Text, SafeAreaView, ScrollView,Image, FlatList } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import { store } from '../../Store/Store';
import { useDispatch, useSelector } from 'react-redux';
import { listNeedAdd, resetListNeed, resetLists } from '../../Store/ListSlice';
import { add_to_list_canDO, resetList } from '../../Store/DataSlice';
import { resetlog } from '../../Store/LogSlice';
import { resetPlanification } from '../../Store/PlanificationSlice';

const DayItem = ({ day, menus }) => (
  <View className="pb-5">
    <Text className="font-bold text-2xl pb-3">{day}</Text>
    <View className="space-y-3 px-4">
   {menus.length === 0 ? (
      <Text className="font-bold text-md text-gray-600">Aucune planification</Text>
    ) : (
      menus.map((menu, index) => <Text key={index} className="font-bold text-md text-gray-600">{menu}</Text>)
    )}
    </View>
  </View>
);


export default function MenuScreen() {
  const renderItem = ({ item }) => <DayItem day={item.day} menus={item.menus} />;
  let dispatch = useDispatch()
  let get_log_state = useSelector(state => state.reducer.LogItem)
  let get_list_need_state = useSelector(state => state.reducer.ListItem)
  let get_planification_state = useSelector(state => state.reducer.PlanificationItem)
  let get_data_state = useSelector(state => state.reducer.DataItem)
  let AllPlan = get_planification_state.planification
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row flex-nowrap pt-6 justify-center items-center px-6">
            <Text className=" font-medium text-3xl text-center pl-25 flex-1">Planifications</Text>
            <View className="justify-center items-center  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
              <Image source={require('../../Assets/head.png')} className="w-full h-full rounded-full"/>
            </View>
          </View>
          <View>
            <FlatList
              data={Object.entries(AllPlan).map(([day, menus]) => ({ day, menus }))}
              renderItem={renderItem}
              keyExtractor={(item) => item.day}
              className="px-5 "
            />
        </View>   

        
        <View className="pb-16">
          <Button onPress={() => {dispatch(resetLists()), console.log('reset of list need and menu', get_list_need_state ) } }>reset list menu and need</Button>
          <Button onPress={() => {dispatch(resetlog()), console.log('reset of log',get_log_state) } }>Reset Log params</Button>
          <Button onPress={() => {dispatch(resetPlanification()), console.log('reset planifications', get_planification_state ) } }>reset all planifications</Button>
          <Button onPress={() => {dispatch(resetList()),console.log("reset of all data in homescreen", get_data_state)}}>reset all homescreen data </Button>
          <Button onPress={() => {dispatch(add_to_list_canDO(633160))} }>add to can do </Button>
          <Button onPress={()=> console.log(store.getState().reducer)}>View the Store</Button>  
        </View>
       
    </ScrollView>
    </SafeAreaView>
  )
}
