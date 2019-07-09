import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
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
    const weatherIcon = <Icon name='weather-lightning-rainy' size={28} color={'#000000'} />
    loading === false && this.state.forecastView === false ? this.handleWeatherSlide() :
    this.state.forecastView === true ? this.handleForecastSlide() : null
    return (
      loading === false && this.state.forecastView === false ?
      <View>
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


export default Weather