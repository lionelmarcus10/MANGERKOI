import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import CardOne from './CardOne'
const DisplayBlockCardReciepes = (elements,title) => {
  return (
    <View>
      <View>

      </View>
      <ScrollView persistentScrollbar={false}>
      <FlatList
                 data={elements}
                 keyExtractor={item => item.id}
                 maxToRenderPerBatch={10}
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item}) =>
                    <TouchableOpacity onPress={navigateTo} >
                        <CardOne width={width/1.5} height={height/3.5} flex={2} imageUri={item.image} name={item.title} duration={item.readyInMinutes} display={true}  />
                    </TouchableOpacity> }
                />
        
      </ScrollView>
    </View>
  )
}

// charger plus de recettes en bas des anciennes

export default DisplayBlockCardReciepes