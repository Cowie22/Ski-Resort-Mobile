import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import styles from './WeatherStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { weatherType } from './WeatherConditions';
import { Button } from 'react-native-elements';
import Forecast from './Forecast/Forecast';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastView: false,
      weatherDisplayAnim: new Animated.ValueXY({x: -300, y: 0}),
      forecastDisplayAnim: new Animated.ValueXY({x: 300, y: 0}),
    }
    this.handleForecastView = this.handleForecastView.bind(this);
    this.handleDailyWeatherView = this.handleDailyWeatherView.bind(this);
    this.handleWeatherSlide = this.handleWeatherSlide.bind(this);
    this.handleForecastSlide = this.handleForecastSlide.bind(this)
  }
  handleForecastView() {
    this.setState({
      forecastView: true,
    })
  }
  handleDailyWeatherView() {
    this.setState({
      forecastView: false,
    })
  }
  // Left to right animations depending on whether the current day's weather is being displayed
  // Or the five day forecast is being displayed
  handleWeatherSlide() {
    Animated.timing(this.state.weatherDisplayAnim, {
      toValue: {x: 0, y: 0},
      duration: 700,
    }, this.state.weatherDisplayAnim.setValue({x: -300, y: 0})).start();
  }
  handleForecastSlide() {
    Animated.timing(this.state.forecastDisplayAnim, {
      toValue: {x: 0, y: 0},
      duration: 700,
    }, this.state.forecastDisplayAnim.setValue({x: 300, y: 0})).start();
  }
  render() {
    const {
      temperature,
      weatherCondition,
      loading,
      humidity,
      maxTemp,
      minTemp,
      windSpeed,
      forecastData,
    } = this.props;
    // Ensures that the data is available and the proper information is displayed using these conditionals
    const weatherIcon = <Icon name='weather-lightning-rainy' size={28} color={'#000000'} />
    loading === false && this.state.forecastView === false ? this.handleWeatherSlide() :
    this.state.forecastView === true ? this.handleForecastSlide() : null
    return (
      // Conditional to ensure that the weather data is available before anything is rendered,
      // The weather API can be slow and will crash the entire app without the conditional
      loading === false && this.state.forecastView === false ?
      <View>
        {/* Dynamic background color and icons depending on the current days weather.  Simple, but adds a lot
        of life to the component */}
        <Animated.View style={[this.state.weatherDisplayAnim.getLayout(), styles.weatherContainer, {backgroundColor: weatherType[weatherCondition].color}]}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>{weatherType[weatherCondition].title}</Text>
            <Icon size={48} name={weatherType[weatherCondition].icon} color={'#fff'} />
            <Text style={styles.tempText}>{temperature}˚F</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.subtitle}><Text style={{color: 'white'}}>High:</Text> {maxTemp}˚F</Text>
              <Text style={styles.subtitle}><Text style={{color: 'white'}}>Humidity:</Text> {humidity} %</Text>
            </View>
            <View style={styles.fieldContainer}>
              <Text style={styles.subtitle}><Text style={{color: 'white'}}>Low:</Text> {minTemp}˚F</Text>
              <Text style={styles.subtitle}><Text style={{color: 'white'}}>Wind:</Text> {windSpeed} MPH</Text>
            </View>
          </View>
        </Animated.View>
        {/* Buttons controlling which weather to display */}
        <View style={styles.btnContainer}>
            <Button
            buttonStyle={styles.btn}
            title="Current"
            icon={weatherIcon}
            titleStyle={styles.btnTitle}
            onPress={this.handleDailyWeatherView}
            />
            <Button
            buttonStyle={styles.btn}
            title="Forecast"
            icon={weatherIcon}
            titleStyle={styles.btnTitle}
            onPress={this.handleForecastView}
            />
          </View>
      </View>
      : this.state.forecastView === true ?
      <View>
        <Animated.View style={[this.state.forecastDisplayAnim.getLayout()]}>
          <Forecast
            forecastData={forecastData}
            loading={loading}
          />
        </Animated.View>
        <View style={styles.btnContainer}>
            <Button
            buttonStyle={styles.btn}
            title="Current"
            icon={weatherIcon}
            titleStyle={styles.btnTitle}
            onPress={this.handleDailyWeatherView}
            />
            <Button
            buttonStyle={styles.btn}
            title="Forecast"
            icon={weatherIcon}
            titleStyle={styles.btnTitle}
            onPress={this.handleForecastView}
            />
          </View>
      </View>
      :
      <View>
        <Text>Loading Weather Data</Text>
      </View>
    )
  }
}

export default Weather