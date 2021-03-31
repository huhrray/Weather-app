import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

function Loading(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>How's the weather today?</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    
    text: {
        color: "#2c2c2c",
        fontSize: 30
    },
    
    yellowView:{
        flex:1,
        backgroundColor:"yellow"
    },

    blueView:{
        flex:3,
        backgroundColor:"blue"
    }
})
export default Loading;