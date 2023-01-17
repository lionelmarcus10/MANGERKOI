import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function IconToRender({decider }) {
    if (decider == "Menu"){
        return <MaterialIcons name="restaurant-menu" color="black" size={30} />
        }else if(decider == "Acceuil"){
        return <MaterialCommunityIcons name="food-variant" color="black" size={30} />
        }else if(decider == "Courses"){
        return (<AntDesign name="shopping-cart" color="black" size={30} />)
    }
}

const TabButton = ({iconLabelName }) => {
    
    return (
    <Pressable>
        <Pressable>
            <MaterialIcons name="shopping-cart" color="black" size={30} />
        </Pressable>
    </Pressable>
  )
}

export default TabButton