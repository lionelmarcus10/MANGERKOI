import { View,Image , Text, SafeAreaView, ScrollView,TextInput,Pressable, FlatList, VirtualizedList } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { listNeedAdd } from '../../Store/ListSlice';

// fonction pour ajouter un item à la liste de course à avoir et modifier le store en consequence ( list_need )
// checkbox pour suppromer du stre et de la liste de course
// option pour planification ( boutton avec modal pour ajouter )
export default function ListScreen({navigation}) {
  let [ InputAdd, setInputAdd ] = React.useState("")
  let dispatch = useDispatch()
  let get_list_need = useSelector(state => state.reducer.ListItem.list_need)
  let get_list_menu = useSelector(state => state.reducer.ListItem.list_menu)
  return (
    <SafeAreaView className="px-6 space-y-5 sm:px-12">
        <View className="flex flex-row flex-nowrap pt-6 justify-center items-center">
          <Text className="text-center font-medium text-3xl mx-auto pl-25 flex-1">Liste de course</Text>
          <View className="justify-center items-center  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
            <Image source={require('../../Assets/img1.jpg')} className="w-full h-full rounded-full"/>
          </View>
        </View>
        <View className="flex flex-row flex-nowrap bg-[#D9D9D9] rounded-2xl px-1 sm:rounded-full">
            <View className="p-2 sm:p-3 flex flex-nowrap justify-center items-center">
              <SimpleLineIcons name="magnifier-add" size={20} color="black"/>
            </View>
            <TextInput placeholder='Ajouter à la liste' className="p-1 sm:p-3 sm:text-lg font-bold w-full" onChangeText={(value) => setInputAdd(value)} onSubmitEditing={()=> dispatch(listNeedAdd(InputAdd))}/>
        </View>

        <View className="flex flex-col flex-nowrap justify-center items-start space-y-2">
          <Text className="text-xl font-bold text-gray-400 text-left">Il vous faut</Text>
          <View className="w-full">
            <VirtualizedList
                  data={get_list_need}
                  initialNumToRender={1}
                  keyExtractor={item => item.id} 
                  renderItem={({item}) => <Text className="py-[1.5px] font-bold text-[17px]">{item.name}</Text>} 
                  getItemCount={(data) => get_list_need.length}
                  getItem={(data, index) => 
                    ({ 
                     key: index,
                     id: Math.random().toString(12).substring(0),
                     name: `${get_list_need[index]}`
                    })
                  }
            />
          
          </View>
        </View>

        <View className="flex flex-col flex-nowrap justify-center items-start space-y-2">
          <Text className="text-xl font-bold text-gray-400 text-left">Dans les menus de cette semaine</Text>
          <View className="w-full">
          <VirtualizedList
                  data={get_list_menu}
                  initialNumToRender={1}
                  keyExtractor={item => item.id} 
                  renderItem={({item}) => <Text className="py-[1.5px] font-bold text-[17px]">{item.name}</Text>} 
                  getItemCount={(data) => get_list_menu.length}
                  getItem={(data, index) => 
                    ({ 
                     key: index,
                     id: Math.random().toString(12).substring(0),
                     name: `${get_list_menu[index]}`
                    })
                  }
            />
         </View>
        </View>

    </SafeAreaView>
  )
}