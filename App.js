import React from 'react';
import Loading from './Loading';
import Weather from './Weather'
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios'
const API_KEY = "b921c0f03d18df3be54d380babf2df68"
export default class App extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const {
      data :{
      main:{temp},
      weather
    }} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )
      this.setState({
        isLoading:false,
        temp,
        condition: weather[0].main })
  }

  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync(); 
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch(error){
      Alert.alert("Can't find your location","Please change your location permission setting")
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state

    return ( 
      isLoading? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>
    )
  }
  
}
