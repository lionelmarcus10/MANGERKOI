import { View, Text, ScrollView, Image,Dimensions, FlatList, TouchableOpacity, Modal, Pressable, StyleSheet } from 'react-native'
import RequestToApis from '../../API/RequestToApis';
import React, { useEffect, useState } from 'react';
import { FontAwesome,AntDesign } from '@expo/vector-icons';
import {  resetList, add_to_list_liked, remove_from_list_liked } from '../../Store/DataSlice';
import { useDispatch, useSelector } from 'react-redux';
import SmallCardOne from '../Design/SmallCardOne';
import { addToPlanification, resetPlanification } from '../../Store/PlanificationSlice';
import { listMenuAdd } from '../../Store/ListSlice';
const Recieps = ( {navigation, route}) => {

  let dispatch = useDispatch()
  let get_data_state = useSelector(state => state.reducer.DataItem)
  let get_planification_state = useSelector(state => state.reducer.PlanificationItem)
  function parseInstructions(text){
    const regex = /(<([^>]+)>)/ig;
    const textWithoutTags = text.replace(regex, "").replace("\n", "");
    const sentences = textWithoutTags.split(".");
    return sentences;
  }

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  useEffect(() => {
    
    checkIfInStore();
  },[]);

  let [color, setColor] = useState("black")

  // changer la couleur et mettre dans le store ou retirer du store

  function changeColor(){
    if(color == "black"){
      setColor("green")
      // mettre dans le store 
      dispatch(add_to_list_liked(route.params.id))
    }else{
      setColor("black")
      // "enlever du store"
      dispatch(remove_from_list_liked(route.params.id))

    }
  }

  // verifier si la recette est dans le store ou pas et set la couleur en consequence
  function checkIfInStore(){

    // get into variable the state of the store list_liked
    let liked = get_data_state.list_liked
    liked.includes(route.params.id) ? setColor("green") : setColor("black")
    }
  console.log(get_data_state)
  console.log(get_planification_state)
  let get_list_menu_state = useSelector(state => state.reducer.ListItem)
  console.log(get_list_menu_state)

    // supprimer le console log

    // fonction pour afficher les instructions et afficher sous forme de card les inngrédients
  let Days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
  let [ dayy, setDayys ] = useState('')
  function handleDaysSelection(value){
    setDayys(value);
    //dispatch(resetPlanification())
    dispatch(addToPlanification({name: route.params.infos.title, day: value}))
    setModalVisible(false);
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView className="bg-gray-100">
      <View className="flex flex-row flex-nowrap pt-6 justify-center items-center px-6">
          <Text className="text-center font-medium text-3xl mx-auto pl-25 flex-1">Recette</Text>
          <View className="justify-center items-center  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
            <Image source={require('../../Assets/head.png')} className="w-full h-full rounded-full"/>
          </View>
        </View>
        <View className="mx-4 my-3 rounded-lg border-solid border-2 border-black bg-white">

            <Text className="font-bold py-2 px-2">{ route.params.infos.title }</Text>

            <View className="w-full">
              <Image className="w-full" source={{uri: route.params.infos.image}}
                          style={{ flex: 0.15, height: height/5, resizeMode: 'cover' }}
                      />
              <View className="flex flex-row flex-nowrap px-2 justify-between py-2">
                <View className="flex flex-row space-x-2">
                  <View className="justify-self-center flex justify-center">
                      <FontAwesome name="circle" size={9} color="green" />
                  </View>
                  <Text className="text-xs my-auto">{route.params.infos.readyInMinutes} min</Text>
                </View>
                
                <TouchableOpacity className="my-auto bg-gray-300 px-3 py-1 rounded-full" onPress={ ()=> {
                  // console.log(route.params.infos.allingredients)
                  route.params.infos.allingredients.forEach(element => {
                    dispatch(listMenuAdd(element.name))
                  });
                }} >
                  <Text className="font-bold text-xs" style={{ color: color }} >Cuisiner</Text>
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                    <View style={styles.modalContainer}>
                      <View style={styles.modalContent}>
                        {Days.map((daysElement) => (
                          <TouchableOpacity key={daysElement} style={styles.modalItem} onPress={() => {console.log(daysElement),handleDaysSelection(daysElement)}}>
                            <Text>{daysElement}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  </Modal>
                <TouchableOpacity className="my-auto bg-gray-300 px-3 py-1 rounded-full">
                  <Pressable onPress={() => setModalVisible(true)} >
                    <Text className="font-bold text-xs" style={{ color: color }} >Planifier</Text>
                  </Pressable>
                </TouchableOpacity>
                
                <TouchableOpacity className="flex flex-row space-x-1 bg-gray-300 px-3 py-1 rounded-full" onPress={ ()=> changeColor() }>
                        <View className="">
                            <AntDesign name="like1" size={15} color={color} />
                        </View>
                        <Text className="font-bold text-xs" style={{ color: color }} >Mes favoris</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="px-2 pb-2">
              
              <View className="space-y-2">
                <Text className="font-bold">Ingrédients</Text>
                {
                  
                  <FlatList
                  data={route.params.infos.allingredients}
                  keyExtractor={item => item.id}
                  maxToRenderPerBatch={10}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => <SmallCardOne imageUri={"https://spoonacular.com/cdn/ingredients_100x100/"+item.image} name={item.name}/>}
                  />
                  
                }
              </View>

              <View className="space-y-1 pt-2">
                <Text className="font-bold">Preparation</Text>
                <View className="flex flex-col">
                    {
                      route.params.infos.allsteps.map((step, index) => (
                        <View className="flex flex-col flex-nowrap space-x-2 py-2 space-y-2 mx-2" key={index}>
                          <Text key={index} className="font-bold">Étape {index+1}</Text>
                          <Text className="text-sm font-semibold text-justify text-gray-600">{step}</Text>
                        </View>
                      ))
                    }
                </View>

              </View>

            </View>
            
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalItem: {
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  
});

export default Recieps