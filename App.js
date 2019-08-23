import React from 'react';
import Loading from './Loading';
import { Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';



const API_KEY = '843e233f47326fde038c1d3ea30e0179';

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async(lat, lon) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`);
    console.log(data);
    this.setState({
      isLoading: false,
      temp: data.main.temp
    })
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      // Send to API and get the weather
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you","So Sad");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render(){
    const { isLoading, temp } = this.state;
    return (
      isLoading 
      ? <LinearGradient colors={['#EDE574','#E1F5C4']} style={{flex: 1}}><Loading /></LinearGradient> 
      : <Weather temp= {Math.round(temp)} />
    )
  }
}

