import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { weatherType } from '../WeatherConditions';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { forecastData } = this.props;
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let calculatedDays = [];
    let calculatedWeather = [];
    forecastData.map((day, i) => {
      let index = Math.floor((day.dt / 86400) + 4) % 7
      calculatedDays.push(daysOfWeek[index]);
      calculatedWeather.push(day.weather[0].main);
    });

    const weatherDayInformation = this.props.forecastData.map((day, i) => {
      console.log(day)
      let cloudy = day.weather[0].main === 'Clouds';
      let dynamicWeatherInfo = cloudy === true && day.clouds.all < 51 ? 'Clear' : day.weather[0].main;
      return (
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

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  forecastContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 4,
  },
  dayContainer: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRightWidth: 1,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekday: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 4,
  },
  btn: {
    backgroundColor: 'rgba(255,255,255, 0.4)',
    borderRadius: 20,
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Georgia-Bold',
    letterSpacing: 1,
  }
});


export default Forecast