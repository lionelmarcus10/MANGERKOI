import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

// width height flex as props
// display like buttun and durations : props
class CardOne extends Component {
  
    render() {
        return (
            <View className="rounded-md bg-white" style={ [styles.shadow ,{ height: this.props.height, width: this.props.width, marginLeft: 10, borderWidth: 0.8, borderColor: '#dddddd' , marginRight: 8}]}>
                <View style={{ flex: this.props.flex }}>
                    <Image className="rounded-t-md" source={{uri: this.props.imageUri}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View className="flex flex-col justify-evenly" style={[{ flex: 0.75, paddingTop: 5 }]}>
                    <View className="text-left px-2 flex flex-row space-x-2 items-stretch">
                        <Text className="font-medium text-sm" style={[]} numberOfLines={1} ellipsizeMode="tail">{this.props.name}</Text>
                    </View>
                    <View className="flex flex-row px-2 items-stretch justify-between">
                    <View className="flex flex-row bg-white">
                        <View className="justify-self-center flex justify-center">
                            <FontAwesome name="circle" size={9} color="green" />
                        </View>
                        <Text className="font-medium text-[11px]"> {this.props.duration} min</Text>
                    </View>
                        
                    { 
                        this.props.display == true ? 
                        <View className="">
                            <AntDesign name="like1" size={15} color="green"/>
                        </View>
                         : null 
                    }
                    </View>
                </View>
                
                
            </View>
        );
    }
}

// { this.props.duration == undefined ? console.log(undefined) : <Text>{this.props.duration}</Text> }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow:{
    }
});

export default CardOne;