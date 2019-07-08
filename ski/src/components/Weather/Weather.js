import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { weatherType } from './WeatherConditions';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { temperature, weatherCondition, loading, humidity, maxTemp, minTemp, windSpeed } = this.props;
    console.log('current', weatherType)
    console.log('props', weatherCondition)
    return (
      loading === false ?
      <View style={[styles.weatherContainer, {backgroundColor: weatherType[weatherCondition].color}]}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{weatherType[weatherCondition].title}</Text>
          <Icon size={48} name={weatherType[weatherCondition].icon} color={'#fff'} />
          <Text style={styles.tempText}>{temperature}˚F</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.fieldContainer}>
            <Text style={styles.subtitle}>High: {maxTemp}˚F</Text>
            <Text style={styles.subtitle}>Humidity: {humidity} %</Text>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.subtitle}>Low: {minTemp}˚F</Text>
            <Text style={styles.subtitle}>Wind: {windSpeed} MPH</Text>
          </View>
        </View>
      </View>
      :
      <View>
        <Text>Loading Weather Data</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    marginRight: 8,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tempText: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 22,
  },
  fieldContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  title: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});


export default Weather