import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const DisplayCardList = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <SafeAreaView>
      <ScrollView>
            <View className="flex flex-row flex-nowrap pt-6 justify-center items-center px-6">
                <Text className="text-center font-medium text-3xl mx-auto pl-25 flex-1">{this.props.title}2222</Text>
                <View className="justify-center items-center  w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]">
                    <Image source={require('../../Assets/head.png')} className="w-full h-full rounded-full"/>
                </View>
            </View>
            <View className="px-4">
                <FlatList
                    data={this.props.DataList}
                    keyExtractor={item => item.id}
                    maxToRenderPerBatch={15}
                    renderItem={({item}) => <CardOne width={width/1.5} height={height/3.5} flex={2} imageUri={item.image} name={item.title} duration={item.readyInMinutes} display={false} /> }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default DisplayCardList