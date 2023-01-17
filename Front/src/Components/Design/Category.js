import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 110, width: 120, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd' , marginRight: 8}}>
                <View style={{ flex: 3 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View className="mx-auto" style={[{ flex: 1, paddingTop: 5 }]}>
                    <Text className="font-medium text-sm" style={[]}>{this.props.name}</Text>
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
    }
});

export default Category;