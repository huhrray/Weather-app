import React from 'react';
import PropTypes from 'prop-types'
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient'

const weatherOptions = {
    
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Good weather to listen to the song'Thunder'"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Annoying kind of rain"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "It's raining man, hallelujah!",
        subtitle: "Don't forget your umbrella"

    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Let it snow",
        subtitle: "Do you wanna build a snowman~"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Mist",
        subtitle: "Let's moisturize your skin!"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny and lovely",
        subtitle: "Should go out to get vitamin D"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "Gloomy gloomy cloudy day"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Open your eyes big enough to see properly!"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "Let's moisturize your skin!"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subtitle: "It's hard to breathe!"
    }
  };


export default function Weather({temp, condition}) {
    return (

        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
        >
            <StatusBar barStyle="light-conent" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    color="white" 
                    size={96} 
                    name={weatherOptions[condition].iconName} />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.textContainer}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subTitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Haze",
      "Mist",
      "Dust"
    ]).isRequired 
}

const styles =StyleSheet.create({
    container: {
        flex:1,
    },

    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    temp:{
        fontSize:36,
        color:"white"
    },  
    textContainer:{
        paddingHorizontal:40,
        alignItems:'flex-start',
        justifyContent:"center",
        flex:1
 
    },

    title:{
        color:"white",
        fontWeight:"300",
        fontSize :44,
        marginBottom:10,    
        textAlign:"left"
    },

    subTitle:{
        color:"white",
        fontSize:24,
        fontWeight:"600",
        textAlign:"left"
    }


})