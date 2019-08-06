import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './ForecastStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { weatherType } from '../WeatherConditions';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    // The API data is all over the place to be completely honest
    // Takes quit a bit of mining in order to understand what is going on and what is available
    // All of the set up below is filtering and manipulating the API data in a way that a user
    // Would actually understand and enjoy
    const { forecastData } = this.props;
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let calculatedDays = [];
    let calculatedWeather = [];
    forecastData.map((day, i) => {
      let index = Math.floor((day.dt / 86400) + 4) % 7
      calculatedDays.push(daysOfWeek[index]);
      calculatedWeather.push(day.weather[0].main);
    });
    // Again using dynamic background colors and icons, both adding a lot of life to the page
    const weatherDayInformation = this.props.forecastData.map((day, i) => {
      let cloudy = day.weather[0].main === 'Clouds';
      let dynamicWeatherInfo = cloudy === true && day.clouds.all < 51 ? 'Clear' : day.weather[0].main;
      return (
        // Ensures that all of the data is available before being displayed
        // Again the API is slow and this ensures that the app will not crash
        this.props.loading === false ?
        <View
          style={[styles.dayContainer, {backgroundColor: weatherType[dynamicWeatherInfo].color ?
          weatherType[dynamicWeatherInfo].color : 'black'}]}
          key={i}
        >
          <Text style={styles.weekday}>{calculatedDays[i]}</Text>
          <Text style={styles.title}>{weatherType[dynamicWeatherInfo].title}</Text>
          <Icon size={28} name={weatherType[dynamicWeatherInfo].icon} color={'#000000'} />
          <Text style={styles.subtitle}>
            <Text
            style={{color: 'white', marginRight: 2}}>Ave:
            </Text>
          {Math.round(day.main.temp)}˚F
          </Text>
          <Text style={[styles.subtitle, {color: 'white'}]}>Humidity</Text>
          <Text style={styles.subtitle}>{day.main.humidity}%</Text>
        </View>
        :
        <View>

        </View>
      )
    })
    return (
      <View style={styles.forecastContainer}>
        {weatherDayInformation}
      </View>
    )
  }
}

export default Forecast