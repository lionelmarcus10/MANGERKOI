import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import LogTop from '../Assets/LogTop.svg'
import LogBottom from '../Assets/LogBottom.svg'
import AddUser from '../Assets/AddUser.svg'
import {Octicons , FontAwesome} from '@expo/vector-icons'
import Authfunc from '../Firebase/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { changeConnected, changeEmail, changeName, changePassword, changePrenom } from '../Store/LogSlice'


const SignUp = ({navigation}) => {
  
  
    let dispatch = useDispatch()
    function AccountCreation(){
      
      if(name != "" && prenom != "" && mail != "" && password != ""){ 
        let insc =  new Authfunc()
         insc.SignUp(mail,password).then((message)=>{
          setfirstStep(true)
          setMessage(message)
          dispatch(changeConnected(true))
          dispatch(changeEmail(mail))
          dispatch(changePassword(password))
          dispatch(changeName(name))
          dispatch(changePrenom(prenom))

          
        }).catch((error)=>{
          console.log(error)
          setMessage(error)
        })
      }else{
        setMessage("Veuillez remplir tous les champs")
      }
    }

  let [mail, setMail] = useState("")
  let [password, setPassword] = useState("")
  let [name, setName] = useState("")
  let [prenom, setPrenom] = useState("")
  let [firstStep, setfirstStep] = useState(false)
  let [message, setMessage] = useState("")
  return (
    <View className="bg-[#F3F3F3]">
      <View className="h-full flex justify-between">

        <View className="self-end z-[-1]">
            <LogTop/>
            <View className="absolute top-9 left-44">
              <AddUser width={50} height={50}/>
            </View>
        </View>

        <View className="justify-center items-center">
      
          <View className="bg-[#597E6175]/[.46] space-y-3 px-4 pt-12 rounded-2xl pb-8">
            {!firstStep  && (
             <>
                <View className="space-y-1">
                  <Text className="font-bold text-md">Votre Nom :</Text>
                  <TextInput placeholder="Nom" className="bg-[#D9D9D9] p-1 rounded-xl" onChangeText={(value) =>setName(value)} value={name}/>
                </View>

                <View className="space-y-1">
                  <Text className="font-bold text-md">Votre Prénom :</Text>
                  <TextInput placeholder="Prénom" className="bg-[#D9D9D9] p-1 rounded-xl" onChangeText={(value) =>setPrenom(value)} value={prenom} />
                </View>

                <View className="space-y-1">
                  <Text className="font-bold text-md">E-mail :</Text>
                  <TextInput placeholder="E-mail" className="bg-[#D9D9D9] p-1 rounded-xl" onChangeText={(value) =>setMail(value)} value={mail} />
                </View>

                <View className="pb-4 space-y-1">
                  <Text className="font-bold text-md">Mot de passe :</Text>
                  <TextInput placeholder="Mot de passe" className="bg-[#D9D9D9] p-1 rounded-xl" onChangeText={(value) =>setPassword(value)} value={password} />
                </View>

                <TouchableOpacity className="bg-[#597E61] rounded-md py-3 px-16 mx-auto" onPress={()=> AccountCreation()} >
                  <Text className="font-bold text-white text-center text-xl"> Continuer </Text>
                </TouchableOpacity>
                <Text className="mx-auto text-sm text-red-500 mt-3"> { message } </Text>
              </>
            )}
            {firstStep && (
              <>
                <TouchableOpacity className="items-center mx-auto px-8 py-5 w-full rounded-full  bg-[#D9D9D9]">
                  <Octicons name="plus" size={90} color="white"/>
                </TouchableOpacity>
              
                <View className="py-4 space-y-2">
                  <Text className="font-bold text-md">Appuyez sur l'icone pour choisir une photo</Text>
                </View>
              
                <TouchableOpacity onPress={()=> navigation.navigate('TabMenu') } className="bg-[#597E61] rounded-md py-3 px-16 mx-auto">
                  <Text className="font-bold text-white text-center text-xl"> Continuer </Text>
                </TouchableOpacity>
              </>
            )}

          </View>
        </View>
        
        <View className="self-start z-[-1]">
            <LogBottom/>
            <TouchableOpacity className="absolute bottom-16 right-40" onPress={navigation.goBack}>
              <FontAwesome name="long-arrow-left" size={35} color="white"/>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default SignUp