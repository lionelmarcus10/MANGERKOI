import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import tw from 'twrnc';

class Category extends Component {
    render() {
        return (
            <View style={{ height: 110, width: 120, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd' , marginRight: 8}}>
                <View style={{ flex: 3 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={[tw`mx-auto`,{ flex: 1, paddingTop: 5 }]}>
                    <Text style={[tw`font-medium text-sm`]}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});