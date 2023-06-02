import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";


// width height flex as props
// display like buttun and durations : props
class SmallCardOne extends Component {
    render() {
        return (
            <View className="rounded-md bg-white" style={ [styles.shadow ,{ height: 110, width: 120, marginLeft: 10, borderWidth: 0.8, borderColor: '#dddddd' , marginRight: 8}]}>
                <View style={{ flex: 3 }}>
                    <Image className="rounded-t-md" source={{uri: this.props.imageUri}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View className="mx-auto" style={[{ flex: 0.75, paddingTop: 5 }]}>
                    <Text className="font-medium text-sm text-center" style={[]}>{this.props.name}</Text>
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

export default SmallCardOne;